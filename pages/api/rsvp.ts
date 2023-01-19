import type { NextApiRequest, NextApiResponse } from "next";
import { Guest } from "pages/rsvp";

/*
 * Config AWS
 */
const AWS = require("aws-sdk");
AWS.config.update({
  region: process.env.AWS_APP_REGION,
  accessKeyId: process.env.AWS_APP_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_APP_SECRET_ACCESS_KEY,
});

interface Error {
  guest?: number;
  type: string;
  message: string;
}

/*
 * Error var helper
 */
let errors: Error[] | undefined = undefined;
const addError = (error: Error) => {
  if (!errors) {
    errors = [];
  }

  errors.push(error);
};

/*
 * Validate request data, and use AWS SDK to send email
 * via AWS SES
 */
const handleRsvpForm = async (req: NextApiRequest, res: NextApiResponse) => {
  errors = undefined;
  let status = "failed";

  const guests: Guest[] = req.body;

  res.json(guests);

  // Check guests is an object with >= 1 in length
  if (!guests) {
    addError({ type: "internal", message: "Invalid payload." });
  }

  if (typeof guests != "object") {
    addError({ type: "internal", message: "Invalid payload." });
  } else if (guests.length <= 0 || guests.length > 10) {
    addError({ type: "internal", message: "Invalid payload." });
  }

  if (!errors) {
    guests.forEach((guest, index) => {
      if (guest.name === "") {
        addError({ guest: index, type: "name", message: "Invalid payload." });
      } else if (guest.name.length > 100) {
        addError({
          guest: index,
          type: "name",
          message: "This guests name is too long. Sorry! :(",
        });
      }

      if (guest.willAttend === "-1") {
        addError({
          guest: index,
          type: "willAttend",
          message: "Select whether attending.",
        });
      }

      if (guest.phone === "") {
        addError({
          guest: index,
          type: "phone",
          message: "Enter phone number.",
        });
      } else if (guest.phone.length > 30) {
        addError({
          guest: index,
          type: "phone",
          message: "Enter valid phone number",
        });
      }

      if (guest.dietReqs.length > 300) {
        addError({
          guest: index,
          type: "dietReqs",
          message: "Too many diet requirements, sorry!",
        });
      }
    });
  }

  if (!errors) {
    const emailParams = {
      Destination: {
        ToAddresses: [process.env.RSVP_EMAIL_TO],
      },
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: formatMessage(guests),
          },
          Text: {
            Charset: "UTF-8",
            Data: "Wedding RSVP",
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: "Wedding RSVP",
        },
      },
      Source: process.env.ADMIN_EMAIL_FROM,
    };

    await new AWS.SES({ apiVersion: "2010-12-01" })
      .sendEmail(emailParams)
      .promise()
      .then(function (data: any) {
        status = "success";
      })
      .catch(function (err: any) {
        addError({
          type: "internal",
          message: "An unknown error occured. Please try again later.",
        });
      });

    // Add arbitary thread pause, so the request doesn't
    // seem broken
    await sleep(2000);
  }

  res.json({
    status,
    errors,
  });
};

const formatMessage = (guests: Guest[]) => {
  let content = "<h1>New Wedding RSVP</h1><br/><br/>";

  guests.forEach((guest) => {
    content += `<hr/><h2>${guest.name}</h2> <br/>`;

    content += `<p>${
      guest.willAttend === "yes"
        ? "Will be attending"
        : "Will NOT be attending."
    }</p><br/>`;

    content += `<p>My phone number is <b>${guest.phone}</b></p><br/>`;

    if (guest.willAttend === "yes" && guest.dietReqs != "") {
      content += `<p>${guest.dietReqs}</p><br/><br/>`;
    }
  });

  return `<html><body>${content}</body></html>`;
};

const sleep = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export default handleRsvpForm;
