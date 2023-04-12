import React, { useState } from "react";
import emailjs from "emailjs-com";
import './InterviewForm.css'

function InterviewForm() {
  const [author, setAuthor] = useState("");
  const [toEmail, setToEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (event) => {
    event.preventDefault();
    const templateParams = {
      to_email: toEmail,
      from_name: author,
      message: message,
    };

    emailjs
      .send("gmail", "template_c7hb2h7", templateParams, "2eXoBSj7EL6tVcMse")
      .then(
        (result) => {
          alert("Email sent successfully to " + toEmail);
          setToEmail("");
          setAuthor("");
          setMessage("");
        },
        (error) => {
          console.error(error);
          alert("Failed to send email to " + toEmail);
        }
      );
  };

  return (
    <form onSubmit={sendEmail}>
      <label htmlFor="author">Author:</label>
      <input
        type="text"
        id="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <br />
      <br />

      <label htmlFor="toEmail">To email address:</label>
      <input
        type="email"
        id="toEmail"
        value={toEmail}
        onChange={(e) => setToEmail(e.target.value)}
      />
      <br />
      <br />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <br />
      <br />

      <button type="submit">Send</button>
    </form>
  );
}

export default InterviewForm;