import React from "react";
import { MDBCard, MDBCardTitle, MDBBtn, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody } from "mdbreact";
import f1 from '../assets/img/f1.png'
import f2 from '../assets/img/Construction.jpg'
import f3 from '../assets/img/Landscaping.jpg'

const Service = () => {

  return (
    <>
      
      <MDBCardGroup className='cards'>
        <MDBCard style={{ width: "26rem", heigh:'54rem' }}>
          <MDBCardImage className='img-fluid ' src={f3}   waves hover
            overlay="white-slight" />
          <MDBCardBody >
            <MDBCardTitle tag="h5">Renovations</MDBCardTitle>
            <MDBCardText>
              Large or small, let Nevis Group manage and complete your renovation.  Nevis has relationships with interior designers, kitchen and bathroom suppliers, joinery manufacturers, the list goes on.  Tell Nevis what you want to achieve and leave the rest to us.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>

        <MDBCard style={{ width: "26rem", heigh:'54rem' }}>
          <MDBCardImage className='img-fluid' src={f2} alt="MDBCard image cap" top hover
            overlay="white-slight" />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Commercial Builds and Shop Fit-outs</MDBCardTitle>
            <MDBCardText>
              Nevis' crew has built a number of Queenstown's commercial spaces.  Examples include the Avis/Budget depot, Party Plus warehouse and Limousine South offices and yard.  Shop fitouts include Gibbston Valley Wine's Arrowtown premises and The Meat Preachers restuarant.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>

        <MDBCard style={{ width: "26rem", heigh:'54rem' }}>
          <MDBCardImage className='img-fluid' src={f3} alt="MDBCard image cap" top hover
            overlay="white-slight" />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Landscaping and Exterior Builds</MDBCardTitle>
            <MDBCardText>
              Get our best landscaping ideas for your backyard and front yard, including landscaping design, garden ideas, flowers, and garden design.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        <MDBCard style={{ width: "26rem", heigh:'54rem' }}>
          <MDBCardImage className='img-fluid' src={f2}   waves hover
            overlay="white-slight" />
          <MDBCardBody>
            <MDBCardTitle tag="h5">New Residential Builds</MDBCardTitle>
            <MDBCardText>
              Fancy a spa pool canti-levered over the Shotover River?  No problem.  Or perhaps a deck for entertaining?  Retaining walls, schist, the Nevis crew love working outside.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
    </>  
  );
}

export default Service;