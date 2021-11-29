const controller =require("../controllers/doctor.controller")
const {verifydoctor}=require("../middlewares/verifydoctor")



module.exports = function(app) {



app.post(`/api/auth/doctor1/delete/:id`,controller.delete)

app.get("/api/auth/doctor1",controller.findAll)

app.post(`/api/auth/doctor1/create`,controller.create)

app.put(`/api/auth/doctor1/update/:id`,controller.update)

app.get(`/api/auth/docto1/find/:id`,controller.findOne)

}