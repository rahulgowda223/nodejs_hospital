import React from "react";
import AuthService from "../services/auth.service";
import "../profilecontent.css"

const Profile = (props) => {
  const currentUser = AuthService.getCurrentUser();

  if (props.match.path === "/confirm/:confirmationCode") {
    AuthService.verifyUser(props.match.params.confirmationCode)
  }

  return (
    <div className="user">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong>'s Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.id}<br></br>
      </p>
      <p>
      <strong>Email:</strong> {currentUser.email}
      </p>
      <p>
      <strong>Status:</strong> {currentUser.status}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
    </div>
  );
};

export default Profile;
