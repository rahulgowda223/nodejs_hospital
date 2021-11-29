import React, { Component } from 'react';
import axios from "axios";


class CreateDoctor extends Component {
    constructor(props){
super();
    this.state = {
    doctorname: "",
    department:"" }


    this.onChangeDoctorname = this.onChangeDoctorname.bind(this);
    this.onChangedepartment=this.onChangedepartment.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    }
        onChangeDoctorname(e) {
        this.setState({ doctorname: e.target.value})
    }

        onChangedepartment(e) {
        this.setState({ department: e.target.value})
        }



onSubmit(e) {
e.preventDefault();
const doctor = {
doctorname: this.state.doctorname,
department:this.state.department
}
console.log(doctor);
axios.post('http://localhost:8080/api/auth/doctor1/create/', doctor)
.then(res => console.log(res.data));
this.setState({
doctorname: '',
department:""
})
alert("Doctor added successfully")
}



render() {
return (
<div className="container">
<h3>Create Doctor</h3>
<form onSubmit={this.onSubmit}>
<div className="form-group">
<label>Doctorname: </label>
<input
type="text" required
className="form-control"
value={this.state.doctorname}
onChange={this.onChangeDoctorname}
/>
</div>
<div className="form-group">
<label>Department: </label>
<input
type="text" required
className="form-control"
value={this.state.department}
onChange={this.onChangedepartment}
/>
</div>
<div className="form-group">
<input type="submit" value="Create Doctor" className="btn btn-success" />
</div>
</form>
</div>
);
}
}
export default CreateDoctor;