# Courier GitHub action

This action will send a notification event to [Courier](https://trycourier.com/) that you can then use to send notifications using any channel (sms, e-mail, Slack, Facebook Messanger, PagerDuty, etc.).

## Outputs

### `messageId`

The `messageId` returned by the Courier send endpoint.

## Example usage

```yaml
uses: actions/courier-github-action@v1
env:
  EVENT_ID: $GITHUB_REPOSITORY}/$GITHUB_EVENT_NAME
  RECIPIENT_ID: github-$GITHUB_ACTOR
```
