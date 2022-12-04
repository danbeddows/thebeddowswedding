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

  if (decision !== false || decision !== true) {
    addError({
      type: "decision",
      message: "Enter whether you will be joining us or not.",
    });
  }

  if (dietReqs.length > 5000) {
    addError({
      type: "dietReqs",
      message: "There is nothing left to eat, sorry!",
    });
  }

  if (!errors) {
    const emailParams = {
      Destination: {
        ToAddresses: [process.env.ADMIN_EMAIL],
      },
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: formatMessage(name, emailAddress, message),
          },
          Text: {
            Charset: "UTF-8",
            Data: "danbeddows.com contact submission",
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: "New Contact Form Submission",
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
          field: "internal",
          error: "An unknown error occured. Please try again later.",
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

const formatMessage = (name: string, email: string, message: string) => {
  return (
    "<html><body><h1>New Contact Form Submission</h1><h2>Name</h2><p>" +
    name +
    "</p>" +
    "<h2>Email</h2><p>" +
    email +
    "</p><h2>Message</h2><p>" +
    message +
    "</p></body></html>"
  );
};

const sleep = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export default handleRsvpForm;
