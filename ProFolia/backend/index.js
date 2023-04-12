/ import express from "express";
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

app.post('/register', async(req, res) => {
    const email = req.body.email;
    const fullname = req.body.fullname;
    const password = req.body.password;
    const type_of_user = req.body.type_of_user;

    // const encryptedPassword = await bcrypt.hash(password, 10);

    con.query("SELECT * FROM accounts WHERE email = ?", [email], async(err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Error checking email");
        }
        if (result.length > 0) {
            // email already exists in the database
            res.send({message: "EMAIL ALREADY EXISTS"});
        } else {

    con.query("INSERT INTO accounts (fullname, email, password, type_of_user) VALUES (?, ?, ?, ?)", [fullname, email, password, type_of_user],
        (err, result) => {
            if(err){
                return res.status(500).send({message: "Error inserting data into database."})
            }else{
                const user = { email, fullname,type_of_user };
                req.session.isLoggedIn = true;
                req.session.fullname = fullname;
                res.cookie('user', user);
                console.log(type_of_user);
                res.send({ status: "ok", message: 'User registered successfully' });

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

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'registrations',
});

// Connect to the MySQL database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to the database with ID: ' + connection.threadId);
});

// Enable CORS
app.use(cors());

// Post method
app.post('/jobs/:position', upload.single('file'), (req, res) => {
  const position = req.body.position;
  const fullName = req.body.fullName;
  const email = req.body.email;
  const file = req.file;
  
  // Insert the data into the MySQL database
  const sql = 'INSERT INTO users (fullName, email, filename, position) VALUES (?, ?, ?, ?)';
  const values = [fullName, email, file.filename, position];
  con.query(sql, values, (err, result) => {
      if (err) {
          console.error('Error inserting data into the database: ' + err.stack);
          res.status(500).send('Error submitting form');
          return;
      }
      console.log('Data inserted into the database with ID: ' + result.insertId);
      console.log(position);
      res.send('Form submitted successfully');
  });
  });


app.listen(5000, () => {
    console.log("running backend server");
})
