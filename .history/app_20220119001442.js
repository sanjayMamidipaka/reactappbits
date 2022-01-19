const express = require('express');
const app = express();

const path = require('path');

const port = process.env.PORT || 5000;

if (process.env.)

app.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log("running on port", port);
})