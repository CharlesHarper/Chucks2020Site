import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBAnimation,
  
} from 'mdbreact';
import "../Styles/ParallaxIntro.scss"
import mepic from "../Images/me.jpeg"
import NavChuck from "../Components /NavChuck.jsx"



class Home extends React.Component {
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

          <NavChuck/>

          
          <Router>
          <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{ height: '100%', width: '100%', paddingTop: '4rem' }}
          >
            <MDBRow>
              <MDBCol md='12' className='mb-4 white-text text-center'>
                  
                <h1  className='display- mb-0 pt-md-1 pt-3 white-text font-weight-bold'>
                <MDBAnimation reveal type="bounceInUp"  duration="7000ms" delay=".5s">
                Charles
                
                  <span className='indigo-text font-weight-bold'> Harper</span>
                  
                  </MDBAnimation>
                </h1>
                <MDBAnimation reveal type="bounceInUp"  duration="7000ms" delay=".8s">
                <hr className='hr-light my-4' />
                </MDBAnimation>
               
                <h5 className='text-uppercase pt-md-3 pt-sm-2 pt-3 pb-md-3 pb-sm-3 pb-5 white-text font-weight-bold'>
                <MDBAnimation reveal type="bounceInUp"  duration="7000ms" delay="1s" className="pb-3">
                  Professional Web Developer
                  </MDBAnimation>
                  <MDBAnimation reveal type="bounceInUp"  duration="7000ms" delay="1.4s" className="pt-3">
                      And Entrepreneur 
                  </MDBAnimation>
                </h5>
                <MDBAnimation reveal type="bounceInUp"  duration="7000ms" delay="1.6s">
                <MDBBtn
                  className='btn-indigo'
                  size='lg'
                  href='https://github.com/CharlesHarper'
                  target='_blank'
                  
                >
                  My GitHub
                </MDBBtn>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
           
          </MDBContainer>
          </Router>
        </MDBView>
      
      </div>
      
    );
  }
}

export default Home;