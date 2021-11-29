import React from 'react'
import { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import { MDBCard, MDBCardImage, MDBCardBody,MDBCardOverlay, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import "../department.css"

class Ortho extends Component{
    render(){
        return(
            <div>
                <Card>
  <Card.Header>
    <Nav variant="tabs" defaultActiveKey="/otho">
      <Nav.Item>
        <Nav.Link href="/pedia">Pediatrics</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/ortho">Orthopedics</Nav.Link>
      </Nav.Item>
      
    </Nav>
  </Card.Header>
  
</Card>
<MDBCard className='mb-3'>
        <MDBCardImage position='top' src='https://images.unsplash.com/photo-1582380330092-636f9aff6aaf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b3J0aG9wZWRpY3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt='...' />
        <MDBCardBody>
          <MDBCardTitle>Orthopedic Department</MDBCardTitle>
          <MDBCardText className="text1">
            Orthopedic Department of Hospital ABC contain many experienced Physicians. 
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

    <h2>Our Doctors</h2>
    <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
        
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdG9yc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>John Gale</MDBCardTitle>
            <MDBCardText>
           Orthopedic Surgeon
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>


      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRvY3RvcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Rita Mark</MDBCardTitle>
            <MDBCardText>
              Pediatric Nutrition
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>


      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://images.unsplash.com/photo-1536064479547-7ee40b74b807?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGRvY3RvcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Manuel Delgado</MDBCardTitle>
            <MDBCardText>
              Pediatric Neurologist
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>


      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Rita Wilson</MDBCardTitle>
            <MDBCardText>
              Pediatric Care
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
            </div>
        )
    }
}

export default Ortho