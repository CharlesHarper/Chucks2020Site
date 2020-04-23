
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBMask,
  MDBCard,
  MDBIcon
   
} from 'mdbreact';
import "../Styles/ParallaxIntro.scss"
import mepic from "../Images/me.jpeg"
import NavChuck from "../Components /NavChuck.jsx"


class Projects extends React.Component {
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
   
      <Router>
      <div className="container-fluid " id='parallaxintro' >
      <section className='text-center my-5'>
      <h2 className='h1-responsive font-weight-bold my-5'>Projects</h2>
      <p className='grey-text w-responsive mx-auto mb-5'>
       This is where I would put a bit about myself
      </p>

      <MDBRow>
        <MDBCol md='12' className='mb-4'>
          <MDBCard
            className='card-image'
            style={{
              backgroundImage:
                'url(https://mdbootstrap.com/img/Photos/Others/img%20%2832%29.jpg)'
            }}
          >
            <div className='text-white text-center d-flex flex-column align-items-center rgba-black-strong py-5 px-4 rounded'>
              <h6 className='purple-text'>
                <MDBIcon icon='plane' />
                <strong> Web  Developing </strong>
              </h6>
              <h3 className='py-3 font-weight-bold'>
                <strong>My Websites</strong>
              </h3>
              <p className='pb-3'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellat fugiat, laboriosam, voluptatem, optio vero odio nam sit
                officia accusamus minus error nisi architecto nulla ipsum
                dignissimos. Odit sed qui, dolorum!
              </p>
              <MDBBtn color='secondary' rounded size='md'>
                <MDBIcon far icon='clone' className='left' /> Click to see project
              </MDBBtn>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol md='6' className='md-0 mb-4'>
          <MDBCard
            className='card-image'
            style={{
              backgroundImage:
                'url(https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20%2873%29.jpg)'
            }}
          >
            <div className='text-white text-center  d-flex align-items-center rgba-black-strong py-5 px-4 rounded'>
              <div>
                <h6 className='pink-text'>
                  <MDBIcon icon='chart-pie' />
                  <strong> Marketing</strong>
                </h6>
                <h3 className='py-3 font-weight-bold'>
                  <strong>This is card title</strong>
                </h3>
                <p className='pb-3'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellat fugiat, laboriosam, voluptatem, optio vero odio nam
                  sit officia accusamus minus error nisi architecto nulla ipsum
                  dignissimos. Odit sed qui, dolorum!
                </p>
                <MDBBtn color='pink' rounded size='md'>
                  <MDBIcon far icon='clone' className='left' /> Click to see project
                </MDBBtn>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol md='6' className='md-0 mb-4'>
          <MDBCard
            className='card-image'
            style={{
              backgroundImage:
                'url(https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20%2873%29.jpg)'
            }}
          >
            <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded'>
              <div>
                <h6 className='green-text'>
                  <MDBIcon icon='eye' />
                  <strong> Entertainment</strong>
                </h6>
                <h3 className='py-3 font-weight-bold'>
                  <strong>This is card title</strong>
                </h3>
                <p className='pb-3'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellat fugiat, laboriosam, voluptatem, optio vero odio nam
                  sit officia accusamus minus error nisi architecto nulla ipsum
                  dignissimos. Odit sed qui, dolorum!
                </p>
                <MDBBtn color='success' rounded size='md'>
                  <MDBIcon far icon='clone' className='left' /> Click to see project
                </MDBBtn>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
    </div>
      </Router>
        </MDBView>
        
       
      </div>
    );
  }
}

export default Projects;




