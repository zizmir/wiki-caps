import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import Navbar from "../Navbar";
import Home from "../Home";


class App extends Component {
    render() {
        return (
            <div>

                <Router>

                    <div>
                        <Navbar/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
