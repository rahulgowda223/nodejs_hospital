const config = require("../config/auth.config");
const nodemailer = require("../config/nodemailer.config");

const db = require("../models");
const User = db.user;
const Role = db.role;
const Appoint=db.appoint;
const Doctor=db.doctor;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

//////////////////////////////////////user signup
exports.signup = (req, res) => {
  const token = jwt.sign({ email: req.body.email,username:req.body.username }, config.secret);

  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    confirmationCode: token,
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (req.body.roles) {
      Role.find(
        {
          name: { $in: req.body.roles },
        },
        (err, roles) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          user.roles = roles.map((role) => role._id);
          user.save((err) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }

            res.send({
              message:
                "User was registered successfully! Please check your email",
            },
            );
            nodemailer.sendConfirmationEmail(
              user.username,
              user.email,
              user.confirmationCode
            );
            res.redirect("/");
          });
        }
      );
    } else {
      Role.findOne({ name: "user" }, (err, role) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        user.roles = [role._id];
        user.save((err) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          res.send({
            message:
              "User was registered successfully! Please check your email",
          });

          nodemailer.sendConfirmationEmail(
            user.username,
            user.email,
            user.confirmationCode
          );
        });
      });
    }
  });
};

/////////////////////////////////////////////////////get user
exports.findall=(req,res)=>{
  const username=req.query.username;
  var condition=username ?{username: new RegExp(username),$options:'i'}:{};
  User.find(condition).then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving Doctors."
    });
  });
}

////////////////////////////////////delete user
exports.delete=(req,res)=>{
  const id=req.params.id;
 User.findByIdAndDelete(id)
  .then(data=>{
      if(!data){
          res.status(404).send({
              message: `Cannot delete user with id=${id}. Maybe user was not found!`
            });
      }
      else{
          res.send({
              message: "User was deleted successfully!"
            });
      }
  }).catch(err=>{
      res.status(500).send({
          message: "Could not delete user with id=" + id
        });
  })
}

///////////////////////////////////////////////signin

exports.signin = (req, res) => {
  User.findOne({
    username: req.body.username,
  })
    .populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }
      ///////////////////////////////////////////////////////////////////////////////////////////////////////Security
      /*if (user.status != "Active") {
        return res.status(401).send({
          message: "Pending Account. Please Verify Your Email!",
        });
      }*/
///////////////////////////////////////////////////
      var token = jwt.sign({username:user.username,email:user.email}, config.secret, {
        expiresIn: 86400, // 24 hours
      });

      var authorities = [];

      for (let i = 0; i < user.roles.length; i++) {
        authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
      }
      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        roles: authorities,
        accessToken: token,
        status: user.status,
      });
    });
};


//////////////////////////////////////////////////////////////appointment
exports.appoint = (req, res) => {
  var pat=/^(?:abc)$/i
  if(req.body.doctorname.match(pat)){
    res.send({message:"abc as name not accepted"})
  }
  else{
  const appoint = new Appoint({
    username: req.body.username,
    email: req.body.email,
    doctorname:req.body.doctorname
  });

  
 
  
  
  
  appoint.save((err, appoint) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({message:"Appointment Booked You can go back to Home Page!!"});

    nodemailer.sendConfirmationAppoint(
      appoint.username,
      appoint.email
      
    );
  
    

    if (req.body.username) {
      Appoint.find(
        {
          username: { $in: req.body.username },
        },
        (err, appoint) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
        }
         
         /* appoint.save((err) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }

            res.send({
              message:
                "AppointMent was registered successfully! Please check your email",
            });
            nodemailer.sendConfirmationAppoint(
              appoint.username,
              appoint.email,
              appoint.confirmationCode
            );
            res.redirect("/");
          });*/
        
      );
    } else {
      Appoint.findOne({ username: "username" }, (err, username) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        
        appoint.save((err) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          res.send({
            message:
              "Appointment was registered successfully! Please check your email",
          });

          nodemailer.sendConfirmationAppoint(
            appoint.username,
            appoint.email
            
          );
        });
      });
    }
  });
  }
}




//////////////////////////////////////////////////////////
exports.verifyUser = (req, res, next) => {
  User.findOne({
    confirmationCode: req.params.confirmationCode,
  })
    .then((user) => {
      console.log(user);
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
      user.status = "Active";
      user.save((err) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
      });
    })
    .catch((e) => console.log("error", e));
};


exports.update=(req,res)=>{

  if(!req.body){
      res.status(400).send({message:"error updating"})
  }
  
  const id=req.params.id;

  User.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
  .then(data=>{
      if(!data){
      res.status(404).send({message:"error updating file as no id present"})
      
      }
      else{
          res.send({message:"updated successfully"})
      }
  }).catch(err=>{
      res.status(500).send({message:"error updating id"+id})
  })

}
