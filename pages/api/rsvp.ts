import type { NextApiRequest, NextApiResponse } from "next";

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

  const names = req.body.names;
  const decision = req.body.decision;
  const dietReqs = req.body.dietReqs;

  if (!names) {
    addError({ type: "names", message: "Enter the names of your party." });
  } else if (names.length > 1000) {
    addError({ type: "names", message: "Too many people are coming, sorry!" });
  }

  if (decision !== false && decision !== true) {
    addError({
      type: "decision",
      message: "Enter whether you will be joining us or not.",
    });
  }

  if (dietReqs.length > 5000) {
    addError({
      type: "dietReqs",
      message: "There is nothing possible to eat, sorry!",
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
            Data: formatMessage(names, decision, dietReqs),
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

const formatMessage = (names: string, decision: boolean, dietReqs: string) => {
  let content = "<h1>New Wedding RSVP</h1><br/><br/>";

  content += `<h2>Names</h2> <p>${names}</p><br/><br/>`;

  content += `<h2>Decision</h2> <p>${
    decision ? "We would love to attend" : "We will NOT be attending."
  }</p><br/><br/>`;

  if (decision && dietReqs != "") {
    content += `<h2>Dietary requirements</h2> <p>${dietReqs}</p><br/><br/>`;
  }

  return `<html><body>${content}</body></html>`;
};

const sleep = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export default handleRsvpForm;
