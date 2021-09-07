'use strict';
// const nodemailer = require("nodemailer");
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const userRoutes = require('./routes/user-routes');
//const functions = require('firebase-functions');
// const admin = require("firebase-admin")
// admin.initializeApp()

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', userRoutes.routes);
app.listen(config.port, () => console.log('App is listening on url http://localhost:' + config.port));


//let testAccount = await nodemailer.createTestAccount();

// const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true,
//     auth: {
//         user: '201801366@pua.edu.eg',
//         pass: '#Lookatme@5.'
//     }
// });
// exports.sendEmail = functions.firestore
//     .document('users/{id}')
//     .onCreate((snap, context) => {
//         const mailOptions = {
//             from: `201801366@pua.edu.eg`,
//             to: snap.data().email,
//             subject: 'contact form message',
//             html: `<h1>Order Confirmation</h1>
//                                 <p>
//                                    <b>Email: </b>${snap.data().email}<br>
//                                 </p>`
//         };

//         console.log("Message sent: %s", info.messageId);



//         console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//         return transporter.sendMail(mailOptions, (error, data) => {
//             if (error) {
//                 console.log(error)
//                 return
//             }
//             console.log("Sent!")
//         });

//     });


//main().catch(console.error);