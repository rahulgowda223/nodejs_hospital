require("dotenv").config();
const nodemailer = require("nodemailer");
const config = require("../config/auth.config");

const user = config.user;
const pass = config.pass;
const username=config.user;

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: user,
    pass: pass,
  },
});

const transport1 = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: username,
    pass: pass,
  },
});

module.exports.sendConfirmationAppoint = (username, email) => {
  transport1.sendMail({
    from: username,
    to: email,
    subject: "Confirmation of Appointment",
    html: `<h1>Appointment Confirmation</h1>
        <h2>Hello ${username} this is from Hospital Blue Cross Shield</h2>
        <img src =https://images.unsplash.com/photo-1624969862293-b749659ccc4e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXBwb2ludG1lbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60 />
        <p>Thank you for using our service. Your Appointment has been booked</p>
        </div>`,
  }).catch(err => console.log(err));
};


module.exports.sendConfirmationEmail = (name, email, confirmationCode) => {
  transport.sendMail({
    from: user,
    to: email,
    subject: "Please confirm your account",
    html: `<h1>Email Confirmation</h1>
        <h2>Hello ${name}</h2> from Blue Cross Hospital.
        <img src=https://images.unsplash.com/photo-1523154410-31a6b052652b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80/>
        <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
        <a href=http://localhost:8081/confirm/${confirmationCode}> Click here</a>
        </div>`,
  }).catch(err => console.log(err));
};
