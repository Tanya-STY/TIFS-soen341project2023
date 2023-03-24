// import express from "express";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import db from "./config/Database.js";
// import router from "./routes/index.js";
// dotenv.config();
// const app = express();
//
// app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
// app.use(cookieParser());
// app.use(express.json());
// app.use(router);
//
// app.listen(5000, ()=> console.log('Server running at port 5000'));
//
//

const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
// const jwt = require("jsonwebtoken");
const session = require('express-session');
const path = require("path");

const app = express();

app.use(session({
    secret: 'jsfgfjguwrg8783wgbjs849h2fu3cnsvh8wyr8fhwfvi2g225',
    resave: false,
    saveUninitialized: false
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

app.post('/register', (req, res) => {
    const email = req.body.email;
    const fullname = req.body.fullname;
    const password = req.body.password;
    // const confPassword = req.body.confPassword;

    con.query("INSERT INTO accounts (email, fullname, password) VALUES (?, ?, ?)", [email, fullname, password],
        (err, result) => {
            if(result){
                res.send(result);
                // res.redirect("/typeuser");
            }else{
                res.send({message: "ENTER CORRECT ASKED DETAILS!"})
            }
        }
    )
})

app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    con.query("SELECT * FROM accounts WHERE email = ? AND password = ?", [email, password],
        (err, result) => {
            if(err){
                req.setEncoding({err: err});
            }else{
                if(result.length > 0){
                    // const user = result[0];
                    // const userId = user.id;
                    // const fullname = user.fullname;
                    // const token = jwt.sign({userId: userId}, "jwtSecret", {expiresIn: "1h"});
                    // res.send({message: "LOGIN SUCCESSFUL"});
                    req.session.isLoggedIn = true;
                    req.session.fullname = req.body.fullname;
                    res.redirect("/homepage");
                }else{
                    res.send({message: "WRONG EMAIL OR PASSWORD!"})
                }
            }
        }
    )
})

app.get('/homepage', (req, res) => {
//     const userId = req.body.id;
//     const fullname = req.body.fullname;
//     con.query("SELECT fullname FROM accounts", (err, result) => {
//         if (err) {
//             console.error(err);
//             res.status(500).send('Error retrieving user information');
//         } else {
//             const name = result[0].fullname;
//             // Send a welcome message to the user
//             res.send(`Welcome back, ${name}!`);
//         }
//     });
// });
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

app.get('/typeuser', (req, res) => {
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

app.get('/logout', (req, res) => {
    req.session.isLoggedIn = false;
    req.session.destroy(err => {
        if (err) {
            console.error(err);
        } else {
            res.redirect('/login');
        }
    });
});

app.listen(5000, () => {
    console.log("running backend server");
})