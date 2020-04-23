import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,

   MDBCard, MDBCardBody, MDBIcon, MDBInput,MDBMask 
} from 'mdbreact';
import "../Styles/ParallaxIntro.scss"
import mepic from "../Images/me.jpeg"
import NavChuck from "../Components /NavChuck.jsx"


class ContactMe extends React.Component {
  state = {
    
  };
  render() {


    return (
      <div >
       
        
        
        <MDBView
          src={mepic}
          fixed
          
        >
          <MDBMask className='rgba-white-light' />
          <NavChuck />
         <section className="my-5 pt-5" style={{ opacity: '.9' }}>
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Contact Me
      </h2>
      <Router>
      <div className="container-fluid" id='parallaxintro'>
      <MDBRow>
        <MDBCol lg="5" className="lg-0 mb-4">
          <MDBCard>
            <MDBCardBody>
              <div className="form-header blue accent-1">
                <h3 className="mt-2">
                  <MDBIcon icon="envelope" /> Ask Me A Question:
                </h3>
              </div>
              <p className="dark-grey-text">
                I"ll write rarely, but only the best content.
              </p>
              <div className="md-form">
                <MDBInput
                  icon="user"
                  label="Your name"
                  iconClass="grey-text"
                  type="text"
                  id="form-name"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="envelope"
                  label="Your email"
                  iconClass="grey-text"
                  type="text"
                  id="form-email"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="tag"
                  label="Subject"
                  iconClass="grey-text"
                  type="text"
                  id="form-subject"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="pencil-alt"
                  label="Question "
                  iconClass="grey-text"
                  type="textarea"
                  id="form-text"
                />
              </div>
              <div className="text-center">
                <MDBBtn color="light-blue">Submit</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="7">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.53925874429!2d-80.29949829252169!3d25.78239073350009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C%20FL!5e0!3m2!1sen!2sus!4v1586450767049!5m2!1sen!2sus" 
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <br />
          <div style={{ backgroundColor: "rgb(255,255,255, 0.4)" }} >   

          <MDBRow className="text-center" >
            <MDBCol md="4" >
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="map-marker-alt" />
              </MDBBtn >
              <p>Miami, Florida</p>
              <p className="mb-md-0">United States</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="phone" />
              </MDBBtn>
              <p>305-988-4842 </p>
              <p className="mb-md-0">Call Me</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="envelope" />
              </MDBBtn>
              <p>charleshrp102992@gmail.com</p>
              <p className="mb-md-0">sale@gmail.com</p>
            </MDBCol>
          </MDBRow>

          </div>
          
        </MDBCol>
        
      </MDBRow>
      </div>
      </Router>
    </section>
        </MDBView>
        
       
      </div>
    );
  }
}

export default ContactMe;




