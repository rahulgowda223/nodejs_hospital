import React from "react"
import DoctorDataService from "../services/doctor.service"
import {Link} from 'react-router-dom'
import { Component } from "react"

export default class DoctorsList extends Component{
    constructor(props){
        super(props);
        this.onChangeSearchdoctorname=this.onChangeSearchdoctorname.bind(this);
        this.searchDoctor=this.searchDoctor.bind(this);
        this.retrieveDoctors=this.retrieveDoctors.bind(this);
        this.setActiveDoctor=this.setActiveDoctor.bind(this);
        this.deleteDoctor=this.deleteDoctor.bind(this);

        this.state={
        doctors:[],
        searchDoctor:"",
        currentIndex:-1,
        currentDoctor:null,
        currrentDepartment:null

    };
    }

    componentDidMount(){
        this.retrieveDoctors();
    }

    onChangeSearchdoctorname(e){
        const searchDoctor=e.target.value;
        this.setState({
            searchDoctor:searchDoctor
        });
    }


        setActiveDoctor(doctorname,department,index){
            this.setState({
                currrentDepartment:department,
                currentDoctor:doctorname,
                currentIndex:index
            });
        }


        retrieveDoctors(){
            DoctorDataService.getAll().then(response=>{
                this.setState({
                    doctors:response.data
                });
                console.log(response.data);
            }).catch(e=>{
                console.log("error retrieving Doctors"+e);
            })
        }

        deleteDoctor(doctorname){
            DoctorDataService.deletebyDoctor().then(response=>{
                this.setState({
                    currentDoctor:doctorname
                })
            })
        }

        searchDoctor(){
            DoctorDataService.findByDoctor(this.state.searchDoctor)
            .then(response=>{
                this.setState({
                    doctors:response.data
                });
                console.log(response.data);
            }).catch(e=>{
                console.log(e)
            })
        }





        render(){
            const{searchDoctor,doctors,currentIndex}=this.state;
            return(
                <div className="list row">
                    <div className="col-md-8">
                        <div className="input-group mb-3">
                           
                           
                            <input type="text"
                            className="form-control"
                            value={searchDoctor}
                            onChange={this.onChangeSearchdoctorname}
                            />
                          
                          
                          <div className="input-group-append">
                            <button
                            className="btn btn-success"
                            type="button"
                            onClick={this.searchDoctor}
                            >Search</button>
                          </div>


                        </div>
                    </div>

                    <div className="col-md-6">
                        <h4>Doctor's List</h4>
                        <ul className="list-group">
                            {doctors && doctors.map((doctorname,department,index)=>(
                                <li
                                className={
                                    "list-group-item"+(index==currentIndex? "active":"")
                                }
                                onClick={()=>this.setActiveDoctor(doctorname,department,index)}
                                key={index}
                                >
                                {doctorname.doctorname}
                                </li>
                                ))

                            }
                            </ul>
                    </div>
                
                </div>
            )
        }

    }