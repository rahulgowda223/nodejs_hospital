import React, { Component } from 'react';
import axios from "axios";


class EditUser extends Component {
constructor(props){
super();
this.state = {
username: "",
email: "",
users: []
}
this.onChangeUsername = this.onChangeUsername.bind(this);
this.onChangeEmail = this.onChangeEmail.bind(this);
this.onSubmit = this.onSubmit.bind(this);
}
componentDidMount() {
axios.get('http://localhost:8080/api/auth/find/'+this.props.match.params.id)
.then(res => {
this.setState({
username: res.data.username,
email: res.data.email
})
})
.catch(function (error){
console.log(error);
})
axios.get('http://localhost:8080/api/auth/findall') 
.then(response => {
if(response.data.length > 0) {
this.setState({
users: response.data.map(user => user.username)
});
}
})
}
onChangeUsername(e) {
this.setState({ username: e.target.value})
}
onChangeEmail(e) {
this.setState({ email: e.target.value})
}

onSubmit(e) {
e.preventDefault();
const user = {
username: this.state.username,
email: this.state.email

}
console.log(user);
axios.post('http://localhost:8080/api/auth/update/'+this.props.match.params.id, user)
.then(res => console.log(res.data));
window.location = "/";
}
render() {
return (
<div className="container">
<h3>Edit User</h3>
<form onSubmit={this.onSubmit}>
<div className="form-group">
<label>Username </label>
<select
required
className="form-control"
value={this.state.username}
onChange={this.onChangeUsername} >
{
this.state.users.map(function(user) {
return <option key={user} value={user}>{user}</option>;
})
}
</select>
</div>
<div className="form-group">
<label>Email </label>
<input
type="text" required
className="form-control"
value={this.state.email}
onChange={this.onChangeEmail}
/>
</div>

<div className="form-group">
<input type="submit" value="Edit User" className="btn btn-primary" />
</div>
</form>
</div>
);
}
}
export default EditUser;