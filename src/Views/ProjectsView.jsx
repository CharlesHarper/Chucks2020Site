
import React, { Component } from 'react';
import Projects from "../Components /Projects.jsx"
import FooterChucks from "../Components /FooterChucks.jsx" 


class ProjectsView extends Component {
  render() {
    return (
        <div >
 
        <Projects/>
        <FooterChucks />
        
        </div>
    );
  }
}

export default ProjectsView;