import React, { Component } from "react";
import DoctorDataService from "../services/doctor.service";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";




/*
export default class Doctor1 extends Component {
  constructor(props) {
    super(props);
    this.onChangedoctorname1 = this.onChangedoctorname1.bind(this);
    this.onChangedepartment1 = this.onChangedepartment1.bind(this);
    this.delDoc=this.delDoc.bind(this);
    this.getDoctor = this.getDoctor.bind(this);
    this.updateDoctor = this.updateDoctor.bind(this);
    this.deleteDoctor = this.deleteDoctor.bind(this);
    this.deleteStudent=this.deleteStudent.bind(this);
    /*this.state = {
      currentDoctor: {
        id: null,
        doctorname: "",
        department: ""
      },
      message: ""
    };*/
 
    /*this.state={
      doctorname:"",
      department:""
    }
  }

 

  componentDidMount() {
    this.getDoctor(this.props.match.params.id);
  }

  onChangedoctorname(e) {
    const doctorname = e.target.value;

    this.setState(function(prevState) {
      return {
        currentDoctor: {
          ...prevState.currentDoctor,
          doctorname: doctorname
        }
      };
    });
  }

  deleteStudent() {
    axios.delete('http://localhost:8080/api/doctor' + this.props.obj._id)
        .then((res) => {
            console.log('Student successfully deleted!')
        }).catch((error) => {
            console.log(error)
        })
      }

  delDoc(){
    var data={

      doctorname:this.state.doctorname,
    department:this.state.department
    };
    if(data){
      DoctorDataService.delete1(data).then(response=>{
        this.setState({
          id:response.data.id,
          doctorname:response.data.doctorname,
          department:response.data.department
        });
        alert("doc deleted")
        }).catch(e=>{
          console.log(e);
        })
    }
    else{
      alert("check")
    }

  }

  onChangedepartment1(e){
    this.setState({
        department:e.target.value
    })
}

onChangedoctorname1(e){
  this.setState({
      doctorname:e.target.value
  });
}


  onChangedepartment(e) {
    const department = e.target.value;
    
    this.setState(prevState => ({
      currentDoctor: {
        ...prevState.currentDoctor,
        department: department
      }
    }));
  }

  getDoctor(id) {
    DoctorDataService.get(id)
      .then(response => {
        this.setState({
          currentDoctor: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }


  updateDoctor() {
    DoctorDataService.update(
      this.state.currentDoctor.id,
      this.state.currentDoctor
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The doctor was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteDoctor() {    
    DoctorDataService.delete(this.state.currentDoctor.id)
      .then(response => {


        console.log(response.data);
        this.props.history.push('/show')
        alert("entering")
      })
      .catch(e => {
        console.log(e);
      });
  }

  newDoctor(){
    this.setState({
        id:null,
        doctorname:"",
        department:''
    });
}

  render() {
    return(
    <div>
      <tr>
                <td>{this.props.obj.doctorname}</td>
                <td>{this.props.obj.department}</td>
               
                <td>
                    <Link className="edit-link" to={"/edit-student/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteStudent} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
    </div>
      )
     
  }
}*/

const Doctor = props => (
<tr>
<td>{props.doctor.doctorname}</td>
<td>{props.doctor.department}</td>
<td>
<button className="btn btn-secondary"><Link to={"/edit/"+props.doctor._id} style={{color:"white"}}>Edit</Link></button> | <button className="btn btn-danger" onClick={() => {props.deleteDoctor(props.doctor._id) }}>Delete</button>
</td>
</tr>
)


class Doctor1 extends Component {
constructor(props) {
super(props);
this.state = {
doctors: []
}
this.deleteDoctor = this.deleteDoctor.bind(this);
}
componentDidMount() {
axios.get('http://localhost:8080/api/doctor')
.then(res => {
this.setState({ doctors: res.data })
})
.catch(error => console.log(error));
}



deleteDoctor(id) {
axios.delete('http://localhost:8080/api/doctor/'+id)
.then(res => console.log(res.data));
this.setState({ doctors: this.state.doctors.filter(el => el._id !== id)})
}

DoctorsList() {
return this.state.doctors.map(currentdoctors => {
return <Doctor doctor={currentdoctors} deleteDoctor={this.deleteDoctor} key={currentdoctors._id} />
})
}
render() {
return (
<div className="container">
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
</div>
);
}
}
export default Doctor1;
