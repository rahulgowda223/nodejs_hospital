import React, { Component } from 'react';
import axios from "axios";


class EditDoctor extends Component {
constructor(props){
super();
this.state = {
doctorname: "",
id:null,
department: "",
doctors: []
}
this.onChangeDoctorname = this.onChangeDoctorname.bind(this);
this.onChangeDepartment = this.onChangeDepartment.bind(this);
this.onSubmit = this.onSubmit.bind(this);
}
componentDidMount() {
axios.get('http://localhost:8080/api/doctor/'+this.props.match.params.id)
.then(res => {
this.setState({
doctorname: res.data.doctorname,
department: res.data.department
})
})
.catch(function (error){
console.log(error);
})
axios.get('http://localhost:8080/api/doctor/') 
.then(response => {
if(response.data.length > 0) {
this.setState({
doctors: response.data.map(doctor => doctor.doctorname)
});
}
})
}
onChangeDoctorname(e) {
this.setState({ doctorname: e.target.value})
}
onChangeDepartment(e) {
this.setState({ department: e.target.value})
}

onSubmit(e) {
e.preventDefault();
const doctor = {
doctorname: this.state.doctorname,
department: this.state.department

}
console.log(doctor);
axios.update('http://localhost:8080/api/doctor/'+this.props.match.params.id, doctor)
.then(res => console.log(res.data));
window.location = "/";
}
render() {
return (
<div className="container">
<h3>Edit Exercise Log</h3>
<form onSubmit={this.onSubmit}>
<div className="form-group">
<label>Doctorname: </label>
<select
required
className="form-control"
value={this.state.doctorname}
onChange={this.onChangeDoctorname} >
{
this.state.doctors.map(function(doctor) {
return <option key={doctor} value={doctor}>{doctor}</option>;
})
}
</select>
</div>
<div className="form-group">
<label>Description: </label>
<input
type="text" required
className="form-control"
value={this.state.department}
onChange={this.onChangeDepartment}
/>
</div>

<div className="form-group">
<input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
</div>
</form>
</div>
);
}
}
export default EditDoctor;