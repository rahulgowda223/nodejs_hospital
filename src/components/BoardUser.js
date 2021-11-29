import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";

import "../usercontent.css";
import './Appoint'
import "./Info"

const BoardUser = () => {
  //const [content, setContent] = useState("");

  /*useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);*/

  return (
    <div class="row">
      <h3>Check Our Online Services</h3>
  <div class="col-sm-5">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Appointment</h5>
        <p class="card-text">To create an Appointment</p>
        <a href="/Appoint" class="btn btn-primary">Submit</a>
      </div>
    </div>
  </div>
  <div class="col-sm-5">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Departments</h5>
        <p class="card-text">Visit Departments</p>
        <a href="/Info" class="btn btn-primary">Go</a>
      </div>
    </div>
  </div>
</div>
        
     
   
  );
};

export default BoardUser;
