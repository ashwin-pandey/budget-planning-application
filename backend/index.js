const express = require('express');
const cors = require('cors');
const app = express();

// use express.json() to allow request body
app.use(express.json());

// add cors
app.use(cors());

const port = process.env.PORT || 4000;
app.listen(port, (error) => {
    if (error) {
        console.log(error.message);
    } else {
        console.log(`Application is running on port '${port}' and URL: '${process.env.BASE_URI}:${port}'`);
    }
});
