import React, { Component } from 'react';
import ContactMe from "../Components /ContactMe.jsx"
import FooterChucks from "../Components /FooterChucks.jsx" 

class ContactView extends Component {
  render() {
    return (
        <div>
         <ContactMe/>
         <FooterChucks />
        </div>
    );
  }
}

export default ContactView;