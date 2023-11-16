const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const flatten = require('flat');
const path = require('path');
const sslRedirect = require('heroku-ssl-redirect').default;

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.json({
    type: [
        'application/json',
        'text/plain'
    ]
}));

app.use(sslRedirect());
// Redirect http calls to https
// comment this out if you aren't using SSL
// app.use(function(req, res, next) {
//     if (!req.secure && process.env.NODE_ENV === 'production') {
//         // request was via http, so redirect to https
//         res.redirect('https://' + req.headers.host + req.url);
//     } else {
//         // request was via https or on dev instance, so do no special handling
//         next();
//     }
// });
app.use(express.static('public'))


app.post(['/workflows/*', '/triggers/*'], (req, res) => {
    res.send('ok');
    const payload = req.body;
    // Slack restricts variable keys to "a combination of letters, numbers, hyphens, and underscores."
    const flatPayload = flatten(payload, { delimiter: '_' });

    // workflow builder requires values to be strings
    // iterate over every value and convert it to string
    Object.keys(flatPayload).forEach((key) => {
        flatPayload[key] = '' + flatPayload[key];
    })

    axios.post(`https://hooks.slack.com${req.path}`, flatPayload)
})

app.get('/', (req, res) => {
    // this route should ask you to post your slack webhook urls and give you the webhook to supply to github
    // (Essentially changes hooks.slack.com to our servers path)
    res.sendFile(path.join(__dirname+'/public/index.html'));
    console.log(req);
})

app.listen(port, () => {
    console.log(`Server running at ${port}`);
})
