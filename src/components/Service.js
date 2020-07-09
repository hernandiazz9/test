import React from "react";
import { MDBCard, MDBCardTitle, MDBBtn, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody } from "mdbreact";
import f1 from '../assets/img/f1.png'
import f2 from '../assets/img/f2.png'
import f3 from '../assets/img/f3.png'

const Service = () => {
  return (
    <MDBCardGroup className='cards'>
      <MDBCard>
        <MDBCardImage className='cardImg1' src={f1}   waves hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">Renovation</MDBCardTitle>
          <MDBCardText>
            High End Renovation Specialists. Where Only Quality Counts. Call For Free Quote! Certified Builders. Quality Services. Total Project Control. Architectural New Builds. Construction Advice. Your Trusted Partner. Trusted Builders. Licenced Practitioners. Call For A Quote.
          </MDBCardText>
          <MDBBtn color="primary" size="md">
            read more
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage className='cardImg2' src={f2} alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">Construction</MDBCardTitle>
          <MDBCardText>
            Specialist in Architectural New Builds & High-end Renovations. Quality Assured. Quality Services. Total Project Control. Your Trusted Partner. Licenced Practitioners. Certified Builders. Trusted Builders. Call For A Quote. Guaranteed Renovation. Construction Advice.
          </MDBCardText>
          <MDBBtn color="primary" size="md">
            read more
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage className='cardImg3' src={f3} alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">Landscaping</MDBCardTitle>
          <MDBCardText>
            Get our best landscaping ideas for your backyard and front yard, including landscaping design, garden ideas, flowers, and garden design.
          </MDBCardText>
          <MDBBtn color="primary" size="md">
            read more
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>
  );
}

export default Service;