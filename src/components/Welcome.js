import React from "react";
import AuthService from "../services/auth.service";
import { Link } from "react-router-dom";

const Welcome = (props) => {
  if (props.match.path === "/confirm/:confirmationCode") {
    AuthService.verifyUser(props.match.params.confirmationCode);
  }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>Account confirmed!</strong>
        </h3>
      </header>
      <a href="/login" class="btn btn-success">Login</a>
    </div>
  );
};

export default Welcome;
