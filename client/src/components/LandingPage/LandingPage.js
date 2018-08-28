import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

import './Lp.css';

class LandingPage extends Component {
  render() {
    return (
      <Router basename="/">
        <div className="Appa">
          <div className="App__Aside"></div>
          <div className="App__Form">

            <div className="PageSwitcher">
              <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
              <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
            </div>

            <div className="FormTitle">
              <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
            </div>

            <Route exact path="/" render={() => <SignUp signUp={this.props.signUp} />}>
            </Route>
            <Route path="/sign-in" render={ () => <SignIn signIn={this.props.signIn} />}>
            </Route>
          </div>

        </div>
      </Router>
    );
  }
}

export default LandingPage;