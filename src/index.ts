import * as core from "@actions/core";
import * as github from "@actions/github";
import { CourierClient } from "@trycourier/courier";

const sendMessage = async () => {
  try {
    const eventId =
      process.env.EVENT_ID ||
      `${process.env.GITHUB_REPOSITORY}/${process.env.GITHUB_EVENT_NAME}`;

    const recipientId =
      process.env.RECIPIENT_ID || `github-${process.env.GITHUB_ACTOR}`;

    if (eventId === "/" || recipientId === "github-") {
      throw new Error("EVENT_ID and RECIPIENT_ID env required");
    }

    const courier = CourierClient({
      authorizationToken: process.env.AUTH_TOKEN,
    });

    const { messageId } = await courier.send({
      eventId,
      recipientId,
      data: github.context.payload,
    });

    core.setOutput("messageId", messageId);
  } catch (err) {
    core.setFailed(err.message);
  }
};

sendMessage();
