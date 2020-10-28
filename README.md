# Pancake Studio

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/stevengill/pancake-studio/tree/main)

A server that receives json payloads, flattens the keys (brings all keys to top level), and sends this new payload to a webhook that triggers a workflow in Slack.

## Flattend Payload

Under the hood, we are using the [`flat` npm package](https://www.npmjs.com/package/flat).

```
var flatten = require('flat')
 
const flatJson = flatten({
    key1: {
        keyA: 'valueI'
    },
    key2: {
        keyB: 'valueII'
    },
    key3: { a: { b: { c: 2 } } }
})

console.log(flatJson)
// {
//   'key1.keyA': 'valueI',
//   'key2.keyB': 'valueII',
//   'key3.a.b.c': 2
// }
```

## Learnings

- Michael and Steve learned about Workflow Builder Webhooks.
- Michael learned about LiveShare in Visual Code.
- Workflow Builder `Received a webhook request that was missing a required field` error when a configured variable is missing from the incoming payload. Optional fields would allow the workflow to be more versatile.
- Workflow Builder `invalid_field` error if incoming value is not a string.
- Workflow Builder / Slackbot only unfurls a URL once, but simple workflows may want to leverage unfurls to create beautiful messages with ease.
- Workflow Builder does not support the use of variables in hyperlinks.
- Workflow Builder does not support the use of block kit elements.

## Roadmap

- Help user by previewing flattened keys and copying them to the clipboard for use in Workflow Builder. Build UI to paste source JSON payload and preview it from the landing page.
