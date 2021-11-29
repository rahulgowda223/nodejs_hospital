module.exports = app => {
  const doctor = require("../controllers/doctor.controller.js");
  const Verifydoctor=require("../middlewares/verifydoctor")

  var router = require("express").Router();

  
  router.post("/",[Verifydoctor.checkDuplicateDoctor],doctor.create);

  
  router.get("/:id", doctor.findOne);

  router.get("/", doctor.findAll);

 
  router.put("/:id", doctor.update);

  
  router.delete("/:id", doctor.delete);

  app.use('/api/doctor', router);
};
