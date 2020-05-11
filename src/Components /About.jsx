import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBCollapseHeader,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCollapse,
  MDBIcon,
  MDBCardTitle,
  MDBAnimation
} from "mdbreact";
import "../Styles/ParallaxIntro.scss";
import mepic from "../Images/me.jpeg";
import NavChuck from "../Components /NavChuck.jsx";


class About extends React.Component {
  state = {
    collapseID: "collapse0"
  };
  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    return (
      <div>
        <MDBView src={mepic} fixed>
          <MDBMask className="rgba-white-light" />

          <NavChuck />

          <Router>
            <MDBAnimation reveal type="bounceInUp" duration="10s">
              <h1
                className="d-flex justify-content-center text-uppercase align-items-center"
                style={{ paddingTop: "4%", color: "blue", fontWeight: "700" }}
              >
                About Me
              </h1>
            </MDBAnimation>
            <MDBAnimation
              reveal
              type="bounceInUp"
              duration="7000ms"
              delay=".5s"
            >
              <MDBContainer
                className="d-flex justify-content-center align-items-center"
                style={{ paddingTop: "1%" }}
              >
                <MDBCard className="card-image">
                  <div className="py-5 px-4">
                    <MDBRow className="d-flex justify-content-center">
                      <MDBCol md="10" xl="8">
                        <MDBContainer className="accordion md-accordion accordion-5">
                          <MDBCard className="mb-4">
                            <MDBCollapseHeader
                              onClick={this.toggleCollapse("collapse1")}
                              className="p-0 z-depth-1"
                              tag="h4"
                              tagClassName="text-uppercase white-text mb-0 d-flex justify-content-start align-items-center"
                            >
                              <div
                                className="d-flex justify-content-center align-items-center mr-4"
                                style={{
                                  backgroundColor: "#fff",
                                  minWidth: "100px"
                                }}
                              >
                                <MDBIcon
                                  icon="cloud"
                                  size="2x"
                                  className="m-3 black-text "
                                />
                              </div>
                              Past
                            </MDBCollapseHeader>

                            <MDBCollapse
                              id="collapse1"
                              isOpen={this.state.collapseID}
                            >
                              <MDBCardBody className="rgba-black-light white-text z-depth-1">
                                <p className="p-md-4 mb-0">
                                  Anim pariatur cliche reprehenderit, enim
                                  eiusmod high life accusamus terry richardson
                                  ad squid. 3 wolf moon officia aute, non
                                  cupidatat skateboard dolor brunch. Food truck
                                  quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                  moon tempor, sunt aliqua put a bird on it
                                  squid single-origin coffee nulla assumenda
                                  shoreditch et.
                                </p>
                              </MDBCardBody>
                            </MDBCollapse>
                          </MDBCard>

                          <MDBCard className="mb-4">
                            <MDBCollapseHeader
                              onClick={this.toggleCollapse("collapse2")}
                              className="p-0 z-depth-1"
                              tag="h4"
                              tagClassName="text-uppercase white-text mb-0 d-flex justify-content-start align-items-center"
                            >
                              <div
                                className="d-flex justify-content-center align-items-center mr-4"
                                style={{
                                  backgroundColor: "#fff",
                                  minWidth: "100px"
                                }}
                              >
                                <MDBIcon
                                  icon="comment-alt"
                                  size="2x"
                                  className="m-3 black-text"
                                />
                              </div>
                              Present
                            </MDBCollapseHeader>

                            <MDBCollapse
                              id="collapse2"
                              isOpen={this.state.collapseID}
                            >
                              <MDBCardBody className="rgba-black-light white-text z-depth-1">
                                <p className="p-md-4 mb-0">
                                  Anim pariatur cliche reprehenderit, enim
                                  eiusmod high life accusamus terry richardson
                                  ad squid. 3 wolf moon officia aute, non
                                  cupidatat skateboard dolor brunch. Food truck
                                  quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                  moon tempor, sunt aliqua put a bird on it
                                  squid single-origin coffee nulla assumenda
                                  shoreditch et.
                                </p>
                              </MDBCardBody>
                            </MDBCollapse>
                          </MDBCard>

                          <MDBCard className="mb-4">
                            <MDBCollapseHeader
                              onClick={this.toggleCollapse("collapse3")}
                              className="p-0 z-depth-1"
                              tag="h4"
                              tagClassName="text-uppercase white-text mb-0 d-flex justify-content-start align-items-center"
                            >
                              <div
                                className="d-flex justify-content-center align-items-center mr-4"
                                style={{
                                  backgroundColor: "#fff",
                                  minWidth: "100px"
                                }}
                              >
                                <MDBIcon
                                  icon="cogs"
                                  size="2x"
                                  className="m-3 black-text"
                                />
                              </div>
                              Future
                            </MDBCollapseHeader>

                            <MDBCollapse
                              id="collapse3"
                              isOpen={this.state.collapseID}
                            >
                              <MDBCardBody className="rgba-black-light white-text z-depth-1">
                                <p className="p-md-4 mb-0">
                                  Anim pariatur cliche reprehenderit, enim
                                  eiusmod high life accusamus terry richardson
                                  ad squid. 3 wolf moon officia aute, non
                                  cupidatat skateboard dolor brunch. Food truck
                                  quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                  moon tempor, sunt aliqua put a bird on it
                                  squid single-origin coffee nulla assumenda
                                  shoreditch et.
                                </p>
                              </MDBCardBody>
                            </MDBCollapse>
                          </MDBCard>
                        </MDBContainer>
                      </MDBCol>
                    </MDBRow>
                  </div>
                </MDBCard>
              </MDBContainer>
            </MDBAnimation>
           
          </Router>
          
        </MDBView>
      </div>
    );
  }
}

export default About;
