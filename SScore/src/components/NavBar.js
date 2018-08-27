import React, { Component } from 'react';
import mainlogo from './logo.png';

//If Links have to be used:
import { Link } from 'react-router-dom';

class NavBar extends Component {

    render() {
       return(
            <div>
                <nav className="grey darken-3" >
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo"><img src={mainlogo} alt="log"></img></a>
                        <a href="home.html" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><Link to="/charts"><i className="material-icons">pie_chart</i>Charts</Link></li>
                            <li><Link to="/whatif"><i className="material-icons">live_help</i>What-If</Link></li>
                            <li><Link to="/learn"><i className="material-icons">wb_incandescent</i>Learn</Link></li>
                            <li><Link to="/logout"><i className="material-icons">offline_pin</i>Logout</Link></li>
                        </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo">
                    <li><Link to="/charts"><i className="material-icons">pie_chart</i></Link></li>
                    <li><Link to="/whatif"><i className="material-icons">live_help</i></Link></li>
                    <li><Link to="/learn"><i className="material-icons">wb_incandescent</i></Link></li>
                    <li><Link to="/logout"><i className="material-icons">offline_pin</i></Link></li>

                </ul>
            </div>
        );
    }

}

export default NavBar;