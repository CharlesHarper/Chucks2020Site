import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Views/HomeView';
import AboutView from './Views/AboutView';
import ContactView from './Views/ContactView';
import ProjectsView from './Views/ProjectsView';


class Layout extends Component {
  render() {
    return (
    <Router>
        <div>

          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/ContactView' component={ContactView} />
              <Route path='/AboutView' component={AboutView} />
              <Route path='/ProjectsView' component={ProjectsView} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Layout;