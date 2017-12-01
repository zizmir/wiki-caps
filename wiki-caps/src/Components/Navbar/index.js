import React, {Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import logo from './logo.svg';

class Navbar extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">

                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Wikicaps</h1>
                    <nav>
                        <Link to='/' >Home</Link>&nbsp; &nbsp;

                        <Link to='/Gallery' >Gallery</Link>&nbsp; &nbsp;
                    </nav><br/><br/>

                </header>

            </div>
        );
    }
}

export default Navbar;
