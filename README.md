# json-flattener

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/stevengill/json-flattener/tree/main)

A server that receives json payloads, flattens the keys and sends this new payload to a slack webhook

## Learnings

- Michael and Steve learned about Workflow Builder Webhooks
- Michael learned about LiveShare in Visual Code
- Workflow Builder returns HTTP 400 and `Received a webhook request that was missing a required field` error when a configured variable is missing from the incoming payload. 
- Workflow Builder returns HTTP 400 and `invalid_field` error if incoming value is not a string.
- Workflow Builder / Slackbot only unfurls a URL once, but simple Workflows may want to leverage unfurls to create beautiful messages with ease.
- Would be great if Workflow Builder supported variables in hyperlinks

## Roadmap

- Paste JSON, press a button, flatten it, and click-to-copy a flattened key