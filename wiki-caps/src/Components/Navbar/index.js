import React, {Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';


class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <Router>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/gallery">Gallery</Link>
                            </li>
                        </ul>
                    </div>
                </Router>
            </nav>
        );
    }
}

export default Navbar;
