// const express = require("express");
// const app = express();
// const path = require("path");
// const mime = require('mime');
// const mysql = require("mysql");
// const session = require("express-session");
// const MySQLStore = require("express-mysql-session")(session);
// const Router = require("./Router");
//
// app.use(express.static(path.join(__dirname, "build")));
// app.use(express.json());
// app.use(express.static(path.join(__dirname, 'src'), {
//     'Content-Type': 'text/javascript'
// }));
// //Database
// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "login_career"
// });
//
// db.connect(function(err) {
//     if (err) {
//         console.log("DB error");
//         throw err;
//         return false;
//     }
//
// });
//
// const sessionStore = new MySQLStore({
//     expiration: (1825 * 86400 * 1000),
//     endConnectionOnClose: false
// }, db);
//
// app.use(session({
//     key:"gjfdgjfjgdfjhbjgithjthjt",
//     secret: "nkhgjkhgjmkfgbfggjhkghjjh",
//     store: sessionStore,
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         maxAge: (1825 * 86400 * 1000),
//         httpOnly: false
//     }
// }));
// new Router(app, db);
//
// app.get("/", function(req, res) {
//     // res.setHeader("Content-Type", "text/javascript");
//     res.sendFile(path.join(__dirname, "build", "index.html"));
// });
//
// // app.get('/app.js', function(req, res) {
// //     const filePath = path.join(__dirname, 'src', 'App.js');
// //     const mimeType = mime.getType(filePath);
// //     res.setHeader('Content-Type', mimeType);
// //     res.sendFile(filePath);
// // });
//
//
// app.listen(3000, function() {
//     console.log('Server listening on port 3000');
// });