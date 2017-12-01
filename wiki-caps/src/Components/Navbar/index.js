import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.svg';

class Navbar extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">

                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Wikicaps</h1>
                    <nav>
                        <Link to='/' >Home</Link>&nbsp; &nbsp;
                        <Link to='/gallery' >Gallery</Link>&nbsp; &nbsp;
                        <Link to='/sign-in' >Sign in</Link>&nbsp; &nbsp;
                        <Link to='/sign-up' >Sign up</Link>&nbsp; &nbsp;
                        <Link to='/profile/view' >Profile</Link>
                    </nav>

                </header>

            </div>
        );
    }
}

export default Navbar;
