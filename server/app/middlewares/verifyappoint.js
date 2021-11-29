const db = require("../models");
const Appoint=db.appoint;

checkDuplicateAppoint = (req, res, next) => {
  // Username
  Appoint.findOne({
    username: req.body.username
  }).exec((err, appoint) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (appoint) {
      res.status(400).send({ message: "Failed! Appoint already in use check Username!" });
      return;
    }

    // Email
    Appoint.findOne({
      email: req.body.email
    }).exec((err, appoint) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (appoint) {
        res.status(400).send({ message: "Failed! Appointment is already in use check email!" });
        return;
      }

      next();
    });
  });
};

const verifyappoint = {
    checkDuplicateAppoint
  };
  
  module.exports = verifyappoint;