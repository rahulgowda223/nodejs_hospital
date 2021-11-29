import React,{Component} from 'react'
import axios from 'axios'
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import "../department.css"
import Card from "react-bootstrap/esm/Card";
import Nav from "react-bootstrap/esm/Nav";


const Users=props=>(
    <tr>
    <td>{props.user.username}</td>
    <td>{props.user.email}</td>
    <td>
    <button className="btn btn-secondary"><Link to={"/edit/"+props.user._id} style={{color:"white"}}>Edit</Link></button> | <button className="btn btn-danger" onClick={() => {props.deleteUser(props.user._id) }}>Delete</button>
    </td>
    </tr>
)

class User1 extends Component{
    constructor(props){
        super(props);
        this.state={
            users:[]
        }
        this.deleteUser=this.deleteUser.bind(this);

    }

    componentDidMount(){
        axios.get("http://localhost:8080/api/auth/findall/").then(res=>{
            this.setState({users:res.data})
        }).catch(error=>console.log(error));

    }

    deleteUser(id){
        axios.post("http://localhost:8080/api/auth/delete/"+id).then(res=>console.log(res.data));
        this.setState({users:this.state.users.filter(el=>el._id!==id)})
        alert("User Deleted Successfully")
    }


    UsersList(){
        return this.state.users.map(currentusers=>{
            return <Users user={currentusers} deleteUser={this.deleteUser} key={currentusers._id}/>
        })
    }

    render(){
        return(
            <div>
                <Card>
                <Nav variant="tabs" defaultActiveKey="/admin/modusers">
      <Nav.Item>
        <Nav.Link href="/admin/modify1">Doctors</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/admin/modusers">Users</Nav.Link>
      </Nav.Item>
      </Nav>
                </Card>
                <h3>Users</h3>
    <table className="table">
    <thead className="thead-light">
    <tr>
    <th>Username</th>
    <th>Email</th>
    <th>Action</th>
    </tr>
    </thead>
    <tbody>
    {this.UsersList()}
    </tbody>
    </table>
            </div>
        )
    }



}

export default User1;