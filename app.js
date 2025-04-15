console.log("Application is starting...");

const express = require('express');
const app = express();
const port = 3000;


app.get("/",(req, res, next) => {
    console.log("I have received a express.request");
        res.send("<h1>Thank your for your request</h1>");
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
});
