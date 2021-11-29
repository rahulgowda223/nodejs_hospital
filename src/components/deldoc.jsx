import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../department.css"
import Card from "react-bootstrap/esm/Card";
import Nav from "react-bootstrap/esm/Nav";

import doctor1Service from "../services/doctor1.service";


const Doctor1=props=>(
    <tr>
    <td>{props.doctor.doctorname}</td>
    <td>{props.doctor.department}</td>
    <td>
    <button className="btn btn-secondary"><Link to={"/editdoc/"+props.doctor._id} style={{color:"white"}}>Edit</Link></button> | <button className="btn btn-danger" onClick={() => {props.deleteDoctor(props.doctor._id) }}>Delete</button>
    </td>
    </tr>
    
    )
    
    
    class Doctor2 extends Component {
    constructor(props) {
    super(props);
    this.state={
    doctors:[],
    id:""
    }
    this.deleteDoctor=this.deleteDoctor.bind(this);
    }


    componentDidMount(){
    axios.get('http://localhost:8080/api/auth/doctor1/')
    .then(res =>{
    this.setState({doctors:res.data})
    }).catch(error=>console.log(error));
    }
    
    
    
    deleteDoctor(id) {
    doctor1Service.delete1(id)
    .then(res => console.log(res.data));
    this.setState({doctors:this.state.doctors.filter(el=>el._id!==id)})
    alert("success")
  }
    
    DoctorsList() {
    return this.state.doctors.map(currentdoctors=>{
    return <Doctor1 doctor={currentdoctors} deleteDoctor={this.deleteDoctor} key={currentdoctors._id} />
    })
    }
    render() {
    return (
    <div className="container">
    <Card>
  <Card.Header>
    <Nav variant="tabs" defaultActiveKey="/admin/modify1">
      <Nav.Item>
        <Nav.Link href="/admin/modify1">Doctors</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/admin/modusers">Users</Nav.Link>
      </Nav.Item>
      
    </Nav>
  </Card.Header>
  
</Card>
    
    <h3>Doctors</h3>
    <table className="table">
    <thead className="thead-light">
    <tr>
    <th>Doctorname</th>
    <th>Department</th>
    <th>Action</th>
    </tr>
    </thead>
    <tbody>
    {this.DoctorsList()}
    </tbody>
    </table>
    <button className="btn btn-success"><Link to={'/add1/'}  style={{color:'white'}}>ADD Doctor</Link></button>
    </div>
    );
    }
    }
    export default Doctor2;


