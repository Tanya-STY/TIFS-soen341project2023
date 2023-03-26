const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
// const jwt = require("jsonwebtoken");
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: 'jsfgfjguwrg8783wgbjs849h2fu3cnsvh8wyr8fhwfvi2g225',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true },
}));

app.use(express.json());

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

app.options('*', cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

const con = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "registrations"
})

function requireLogin(req, res, next) {
    if (req.session && req.session.isLoggedIn) {
        return next();
    } else {
        res.redirect('/login');
    }
}

app.post('/register', (req, res) => {
    const email = req.body.email;
    const fullname = req.body.fullname;
    const password = req.body.password;
    const type_of_user = req.body.type_of_user;

    con.query("SELECT * FROM accounts WHERE email = ?", [email], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Error checking email");
        }
        if (result.length > 0) {
            // email already exists in the database
            res.send({message: "EMAIL ALREADY EXISTS"});
        } else {

    con.query("INSERT INTO accounts (email, fullname, password, type_of_user) VALUES (?, ?, ?, ?)", [email, fullname, password, type_of_user],
        (err, result) => {
            if(err){
                return res.status(500).send({message: "Error inserting data into database."})
                // console.log(err);
                // res.send({message: "Error inserting data into database."})
            }else{

                const user = { email, fullname,type_of_user };
                req.session.isLoggedIn = true;
                req.session.fullname = fullname;
                res.cookie('user', user);
                console.log(type_of_user);
                res.status(200).json({ message: 'User registered successfully' });
                // if (type_of_user === 'Student') {
                //     // Redirect to student page
                //     res.redirect("/homepage");
                // } else if (type_of_user === 'Employer') {
                //     // Redirect to employer page
                //     res.redirect("/employer");
                // }
            }
        });
        }
    });
});

app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    con.query("SELECT * FROM accounts WHERE email = ? AND password = ?", [email, password],
        (err, result) => {
            if(err){
                req.setEncoding({err: err});
            }else{
                if(result.length > 0){
                    const userId = result[0].id;
                    req.session.userId = userId;
                    req.session.isLoggedIn = true;
                    req.session.fullname = req.body.fullname;
                    const user = { id: userId, email, fullname: result[0].fullname };
                    res.cookie('user', user);
                    res.status(200).json({ message: 'User logged in successfully' });
                }else{
                    res.send({message: "WRONG EMAIL OR PASSWORD!"})
                }
            }
        }
    )
})

// app.get('/login', (req, res) => {
//     res.redirect('/login');
// });

app.get('/homepage', requireLogin, (req, res) => {
    if (req.session.isLoggedIn) {
        // Render the dashboard page
        res.send(`Welcome back, ${req.session.fullname}!`);
        // res.send('Welcome to the homepage');
        console.log("reached the homepage");
    } else {
        // Redirect to the login page
        res.redirect('/login');
    }
});

app.get('/employer', (req, res) => {
    const user = req.cookies.user;
    if (user) {
        res.send(`Welcome back, ${user.fullname}!`);
    } else {
        res.redirect('/login');
    }
});


app.get('/logout', (req, res) => {
    req.session.isLoggedIn = false;
        req.session.destroy(err => {
            if (err) {
                console.error(err);
            } else {
                res.clearCookie('user');
                res.redirect('/login');
            }
        });
    });

app.listen(5000, () => {
    console.log("running backend server");
});
