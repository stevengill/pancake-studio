const express = require('express');
const axios = require('axios');
var bodyParser = require('body-parser');
var flatten = require('flat');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.post('/workflows/*', (req, res) => {
    // res.send('hello world');
    res.send('ok');
    const payload = req.body;
    const flatPayload = flatten(payload);

    // workflow builder requires values to be strings
    // iterate over every value and convert it to string
    Object.keys(flatPayload).forEach((key) => {
        flatPayload[key] = '' + flatPayload[key];
    })

    // console.log(flatPayload)

    axios.post(`https://hooks.slack.com${req.path}`, flatPayload)
})

app.get('/', (req, res) => {
    // this route should ask you to post your slack webhook urls and give you the webhook to supply to github 
    // (Essentially changes hooks.slack.com to our servers path)
    res.send('hello')
})

app.listen(port, () => {
    console.log(`Server running at ${port}`);
})