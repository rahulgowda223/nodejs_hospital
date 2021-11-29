const db= require("../models/")
const Doctor=db.doctor;



exports.create=(req,res)=>{
    
if(req.body.doctorname==="abc"){
   res.send({message:"abc as doctor name not accepted"})
}
else{
const doctor=new Doctor({
    id:req.body.id,
    doctorname:req.body.doctorname,
    department:req.body.department
})

doctor.save(doctor).then(data=>{
    res.send(data);
}).catch(err=>{
    res.status(500).send({message:"error saving doctor profile"})
    //alert("error saving profile")
});
res.send({
    message:
      "Doctor was  successfully! Please check your email",
  },
  );
};
}

exports.update=(req,res)=>{

    if(!req.body){
        res.status(400).send({message:"error updating"})
    }
    
    const id=req.params.id;

    Doctor.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
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


exports.delete=(req,res)=>{
    const id=req.params.id;
    Doctor.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({
                message: `Cannot delete doctor with id=${id}. Maybe Doctor was not found!`
              });
        }
        else{
            res.send({
                message: "Doctor was deleted successfully!"
              });
        }
    }).catch(err=>{
        res.status(500).send({
            message: "Could not delete Doctor with id=" + id
          });
    })
}


exports.delete1=(req,res)=>{
    const doctorname=req.params.doctorname;
    Doctor.findByIdAndRemove(doctorname)
    .then(data=>{
        if(!data){
            res.status(404).send({
                message: `Cannot delete doctor with doctorname=${doctorname}. Maybe Doctor was not found!`
              });
        }
        else{
            res.send({
                message: "Doctor was deleted successfully!"
              });
        }
    }).catch(err=>{
        res.status(500).send({
            message: "Could not delete Doctor with doctorname=" +doctorname 
          });
    })
}




exports.findAll=(req,res)=>{
    const doctorname=req.query.doctorname;
    var condition=doctorname ?{doctorname:{$regex: new RegExp(doctorname),$options:"i"}}:{};

    Doctor.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Doctors."
      });
    });

}


exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Doctor.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Doctor with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Doctor with id=" + id });
      });
  }