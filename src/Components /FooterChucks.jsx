import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterChucks = () => {
  return (
    <MDBFooter color="blue " className="font-small darken-3 pt-3">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12" className="py-5">
            <div className="mb-5 flex-center">
              <a
                href="https://www.facebook.com/Charles.Harper.Miami"
                target="_blank"
                className="fb-ic"
              >
                <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
              </a>
              <a
                href="https://twitter.com/chuck89286795"
                target="_blank"
                className="tw-ic"
              >
                <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
              </a>
              {/* <a href="https://www.facebook.com/Charles.Harper.Miami" target="_blank"  className="gplus-ic">
                <i className="fab fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a> */}
              <a
                href="https://www.linkedin.com/in/charles-harper-ghrs/"
                target="_blank"
                className="li-ic"
              >
                <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
              </a>
              <a
                href="https://www.instagram.com/charleshrp102992"
                target="_blank"
                className="ins-ic"
              >
                <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
              </a>
              {/* <a href="https://www.facebook.com/Charles.Harper.Miami"  target="_blank"className="pin-ic">
                <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
              </a> */}
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" Charles Harper"}
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterChucks;
