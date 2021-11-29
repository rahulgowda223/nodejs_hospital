import React, { useState, useEffect } from "react";
import axios from 'axios'
import UserService from "../services/user.service";
import DoctorService from "../services/doctor.service";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Icon from '@material-ui/core/Icon';
import "../department.css"
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';
//import users  from "C:/Users/GM/Desktop/desktop/desk/bootcamp/email/server/app/models/user.model"
import "./Doctor"
import { MDBBtn } from 'mdb-react-ui-kit';

const BoardAdmin = () => {
  const [content, setContent] = useState("");
  


/*<div class="card text-center">
  <div class="card-body">
    <h5 class="card-title">Doctor Management</h5>
    <a href="/modify" class="btn btn-primary">NEXT</a>
    </div>
   </div>*/

/*sdf

import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
      {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */
    /*  <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
      >
        Send
      </Button>
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
      >
        Upload
      </Button>
      <Button
        variant="contained"
        disabled
        color="secondary"
        className={classes.button}
        startIcon={<KeyboardVoiceIcon />}
      >
        Talk
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
    </div>
  );
} }*/



  return (
   <div>

    <MDBRow className='mb-3'>     
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://images.unsplash.com/photo-1599949104055-2d04026aee1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw0NTM2MTIyfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>ADMINISTRATOR
            <MDBBtn rounded className='mx-2' color='info'><Link to={"/admin/modify1"} style={{color:"white"}}>
        GO</Link>
      </MDBBtn>
            </MDBCardTitle>
            <MDBCardText className="text1">
             Admin is useful in managing users and doctors.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );

   {/* <div class="card text-center">
  <div class="card-header">
   ADMINISTRATOR
  </div>
  <div class="card-body">
    <h5 class="card-title">Admin Management</h5>
    <a href="/admin/modify1" class="btn btn-primary">GO</a>
    </div>
   </div>


   <div class="card text-center">
  <div class="card-body">
    <h5 class="card-title">Search Doctor</h5>
    <a href="/show" class="btn btn-primary">NEXT</a>
    </div>
   </div>
  */ }

   </div>
    
     
  );
};

export default BoardAdmin;
