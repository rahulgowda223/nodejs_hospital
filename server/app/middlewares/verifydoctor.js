const db = require("../models");
const Doctor=db.doctor;



checkDuplicateDoctor = (req, res, next) => {
  // Doctorname
  Doctor.findOne({
    doctorname: req.body.doctorname
  }).exec((err, doctorname) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (doctorname==="abc") {
      res.status(400).send({ message: "Failed! Doctor already present!" });
      return;
    }

    // Email
  });
};

const verifydoctor = {
    checkDuplicateDoctor
  };
  
  module.exports = verifydoctor;