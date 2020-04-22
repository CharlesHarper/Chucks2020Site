import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBContainer,
MDBHamburgerToggler } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';

class NavChuck extends Component {
state = {
  collapse1: false,
  collapseID: ''
}

toggleCollapse = collapseID => () => {
  this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
}

toggleSingleCollapse = collapseId => {
  this.setState({
    ...this.state,
    [collapseId]: !this.state[collapseId]
  });
}


render() {
  
  
  const navStyle = {
    color: "white",
    backgroundColor: "rgb(63,81,181, 0.2)",
    padding: "10px",
    fontFamily: "Arial",
    marginTop: "10px",
    fontSize: "1.2em",
    
  };

  return (
  
      <MDBContainer >
        <MDBNavbar  style={navStyle} className="justify-content-center" >
          
         
           <MDBNav className=" flex-column flex-sm-row ">
<MDBNavItem>
  <MDBNavLink active to="/">Home</MDBNavLink>
</MDBNavItem>
<MDBNavItem>
  <MDBNavLink to={'/AboutView'}>About Me</MDBNavLink>
</MDBNavItem>
<MDBNavItem>
  <MDBNavLink to={'/ContactView'}>Contact Me</MDBNavLink>
</MDBNavItem>
<MDBNavItem>
  <MDBNavLink to={'/ProjectsView'}>Projects</MDBNavLink>
</MDBNavItem>
</MDBNav>
        
        </MDBNavbar>
      </MDBContainer>


  
    );
  }
}

export default NavChuck;



