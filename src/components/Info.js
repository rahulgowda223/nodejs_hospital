import React from "react"
import ReactDOM, { render } from 'react-dom'
import '../info.css'

const Info =(props)=>{
    return(
<div class="card-header">
    <h2>Departments</h2>
    <div class="card w-100">
  <div class="card-body">
    <h5 class="card-title">Orthopaedics</h5>
    <a href="/ortho" class="btn btn-primary">Visit Department</a>
  </div>
</div>

<div class="card w-100">
  <div class="card-body">
    <h5 class="card-title">Pediatrics</h5>
    <a href="/pedia" class="btn btn-primary">Visit Department</a>
  </div>
</div>
</div>




    )
};

export default Info;