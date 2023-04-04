const express = require('express');
const app = express();

app.use(express.json());

app.listen(4000, (error) => {
    if (error) {
        console.log(error.message);
    } else {
        console.log(`Application is running on port 4000`);
    }
});
