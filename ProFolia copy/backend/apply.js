// const express = require('express');
// const multer  = require('multer');
// const mysql = require('mysql');

// const app = express();
// const upload = multer({ dest: 'uploads/' });

// // Create a connection to the MySQL database
// const connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database : 'applications'
// });

// // Connect to the MySQL database
// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to the database: ' + err.stack);
//     return;
//   }
//   console.log('Connected to the database with ID: ' + connection.threadId);
// });

// // Set up the route for handling form submission
// app.post('/submit-form', upload.single('file'), (req, res) => {
//   const fullName = req.body.fullName;
//   const email = req.body.email;
//   const file = req.file;
  
//   // Insert the data into the MySQL database
//   const sql = 'INSERT INTO users (fullName, email, filename) VALUES (?, ?, ?)';
//   const values = [fullName, email, file.filename];
//   connection.query(sql, values, (err, result) => {
//     if (err) {
//       console.error('Error inserting data into the database: ' + err.stack);
//       res.status(500).send('Error submitting form');
//       return;
//     }
//     console.log('Data inserted into the database with ID: ' + result.insertId);
//     res.send('Form submitted successfully');
//   });
// });

// // Start the server
// app.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });

const express = require('express');
const multer = require('multer');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const upload = multer({ dest: 'uploads/' });

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'applications',
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

// Set up the route for handling form submission
app.post('/submit-form', upload.single('file'), (req, res) => {
  const fullName = req.body.fullName;
  const email = req.body.email;
  const file = req.file;

  // Insert the data into the MySQL database
  const sql = 'INSERT INTO users (fullName, email, filename) VALUES (?, ?, ?)';
  const values = [fullName, email, file.filename];
  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting data into the database: ' + err.stack);
      res.status(500).send('Error submitting form');
      return;
    }
    console.log('Data inserted into the database with ID: ' + result.insertId);
    res.send('Form submitted successfully');
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

