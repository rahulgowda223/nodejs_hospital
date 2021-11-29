import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import doctor1Service from "../services/doctor1.service";

import DoctorDataService1 from "../services/doctor1.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};



var pat1="abcdef"
var pat2=/^[0-9.*]$/
const vusername = (value) => {
  if (value.length < 4 || value.length > 20||value.match(pat2) || value.match(pat1)) {
    return (
      <div className="alert alert-danger" role="alert">
        The input fields must be between 4 and 20 characters and NOT be abcdef and numbers
      </div>
    );
  }
};

const AddDoctor = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [doctorname, setdoctorname] = useState("");
  const [department, setdepartment] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeDoctorname = (e) => {
    const doctorname = e.target.value;
    setdoctorname(doctorname);
  };

  const onChangeDepartment = (e) => {
    const department = e.target.value;
    setdepartment(department);
  };

  

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      doctor1Service.register(doctorname,department).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
              <div className="form-group">
                <label htmlFor="doctorname">Doctorname</label>
                <Input
                  type="text"
                  className="form-control"
                  name="doctorname"
                  value={doctorname}
                  onChange={onChangeDoctorname
        }
                  validations={[required, vusername]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Department</label>
                <Input
                  type="text"
                  className="form-control"
                  name="Department"
                  value={department}
                  onChange={onChangeDepartment}
                  validations={[required,vusername]}
                />
              </div>


              <div className="form-group">
                <button className="btn btn-success btn-block">ADD Doctor</button>
              </div>
            </div>
          )}

          {message && (
            <div className="form-group">
              <div
                className={
                  successful ? "alert alert-success" : "alert alert-danger"
                }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default AddDoctor;
