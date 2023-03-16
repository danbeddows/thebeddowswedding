import { Guest, Party } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "src/lib/prisma";

/*
 * Config AWS
 */
const AWS = require("aws-sdk");
AWS.config.update({
  region: process.env.AWS_APP_REGION,
  accessKeyId: process.env.AWS_APP_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_APP_SECRET_ACCESS_KEY,
});

/*
 * Validate request data, and use AWS SDK to send email
 * via AWS SES
 */
const handleMenuForm = async (req: NextApiRequest, res: NextApiResponse) => {
  let status = "failed";

  const guests: Guest[] = req.body?.guests;
  const party: Party = req.body?.party;

  // Check guests is an object with >= 1 in length
  if (!guests) {
    return res.json({ status: "failed" });
  }

  if (typeof guests != "object") {
    return res.json({ status: "failed" });
  } else if (guests.length <= 0 || guests.length > 10) {
    return res.json({ status: "failed" });
  }

  // Check party exists
  const partyRow = await prisma.party.findUnique({
    where: {
      hash: party.hash,
    },
    include: {
      guests: {
        orderBy: {
          displayOrder: "asc",
        },
        include: {
          guest: true,
        },
      },
    },
  });

  // Check party exists
  if (partyRow === null) {
    return res.json({ status: "failed" });
  }

  // Check party has guests
  if (partyRow.guests.length === 0) {
    return res.json({ status: "failed" });
  }

  // Check each guest exists in db, plus attached to party
  let hasError = false;
  for (const guest of guests) {
    if (guest.foodChoice === "-1") {
      hasError = true;
      return;
    }

    if (guest.dietReqs !== null && guest.dietReqs.length > 300) {
      hasError = true;
      return;
    }

    // check guest exists on db
    const guestRow = await prisma.guest.findUnique({
      where: {
        id: guest.id,
      },
    });

    // Check guest exists on db
    if (guestRow === null) {
      hasError = true;
      return;
    }

    // Check that guest exists in party
    let found = false;
    for (const partyGuest of partyRow.guests) {
      if (partyGuest.guest.id === guestRow.id) {
        found = true;
      }
    }

    if (!found) {
      hasError = true;
      return;
    }
  }

  // If any guest had an error, exit
  if (hasError) {
    return res.json({ status: "failed" });
  }

  // All good - update records
  for (const guest of guests) {
    await prisma.guest.update({
      where: { id: guest.id },
      data: { foodChoice: guest.foodChoice, dietReqs: guest.dietReqs },
    });
  }

  await prisma.party.update({
    where: { id: party.id },
    data: { hasChosenMeals: true },
  });

  const emailParams = {
    Destination: {
      ToAddresses: process.env.RSVP_EMAIL_TO?.split(","),
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: formatMessage(guests),
        },
        Text: {
          Charset: "UTF-8",
          Data: "Wedding Food Choice",
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Wedding Food Choice",
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
      return res.json({ status: "failed" });
    });

  res.json({
    status: "success",
  });
};

const formatMessage = (guests: Guest[]) => {
  let content = "<h1>New Wedding Food Choice</h1><br/><br/>";

  guests.forEach((guest) => {
    content += `<hr/><h2>${guest.name}</h2> <br/>`;

    content += `<p>Wants to eat <b>${
      guest.foodChoice === "beef"
        ? "Sticky Braised Beef"
        : guest.foodChoice === "chicken"
        ? "Cheshire Chicken Risotto"
        : "Butternut Squash Risotto"
    }</b></p><br/>`;

    content += `<p>${guest.dietReqs}</p><br/><br/>`;
  });

  return `<html><body>${content}</body></html>`;
};

const sleep = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export default handleMenuForm;
