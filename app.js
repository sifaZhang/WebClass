console.log("Application is starting...");

const express = require('express');
const app = express();
const port = 3000;
const ejs = require('ejs');
app.set('view engine', 'ejs');
app.use(express.static('public'));



app.get("/",(req, res, next) => {
    console.log("I have received a express.request");
    //let html = ejs.render('homepage.ejs');
        //res.send(html);
        res.render('homepage');
});

app.get("/welcome",(req, res, next) => {
    console.log("I have received a express.request");
    res.send("<h1>Welcome to the express application</h1>");
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
});
