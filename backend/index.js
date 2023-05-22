const express = require('express');
const app = express();

app.use(express.json());

const port = process.env.PORT || 4000;
app.listen(port, (error) => {
    if (error) {
        console.log(error.message);
    } else {
        console.log(`Application is running on port '${port}' and URL: '${process.env.BASE_URI}:${port}'`);
    }
});
