const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");
const {verifyappoint}=require("../middlewares")
const doctor=require("../controllers/doctor.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

app.post(
  "/api/auth/appoint",[verifyappoint.checkDuplicateAppoint],
  controller.appoint
)

app.post(`/api/auth/delete/:id`,controller.delete)

app.get("/api/auth/findall",controller.findall)

app.post("/api/auth/update/:id",controller.update)

  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );

  app.post("/api/auth/signin", controller.signin);

  app.get("/api/auth/confirm/:confirmationCode", controller.verifyUser)
};
