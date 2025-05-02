console.log("Application is starting...");

const express = require('express');
const app = express();
const mysql = require('mysql');
const port = 3000;
const path = require('path');
const db = require('./dbconfig');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


// Set view engine
const ejs = require('ejs');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Import routes
// const homeRoutes = require('./routes/home');
// const authRoutes = require('./routes/auth');

// app.get("/", (req, res, next) => {
//     console.log("I have received a express.request");
//     //let html = ejs.render('homepage.ejs');
//     //res.send(html);
//     res.render('homepage');
// });

// app.get("/welcome", (req, res, next) => {
//     console.log("I have received a express.request");
//     res.send("<h1>Welcome to the express application</h1>");
// });


// app.get("/about", (req, res, next) => {
//     console.log("I have received a express.request");
//     res.send("<h1>About the express application</h1>");
// }

// app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`)
// });


// Use routes
// app.use('/', homeRoutes);
// app.use('/', authRoutes);

// Error handling middleware
// app.use((req, res, next) => {
//     // res.status(404).render('404', { error: 'Page not found' });
//     res.render('home');

// });


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('error', { error: 'Something broke!' });
});

app.get('/home1', (req, res) => {
    console.log('home1');
    res.render('homepage');
});
app.get('/login', (req, res) => {
    res.render('login');
})  

app.get('/register', (req, res) => {
    console.log('register');
    res.render('register');

})  


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
});

// app.post('/register', (req, res) => {
//     console.log('register');
//     const { name, email, password, phone, role } = req.body
//     let createUserQuery = `INSERT INTO Users ( Name, Email, Password, Phone, Role) VALUES ( '${name}', '${email}', '${password}', '${phone}', '${role}')`;

//     db.query(createUserQuery, (err, results) => {
//         if (err) {
//             console.error('Error fetching users: ' + err.stack);
//             return res.status(500).send('Error creating users');
//         }
//         res.send('Test User created successfully');
//     });
// })  

// Start server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });