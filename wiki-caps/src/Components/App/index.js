import React, {Component} from 'react';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import Navbar from "../Navbar";
import Home from "../Home";
import Error404 from "../Error404";


class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>

                        <Navbar/>
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route component={Error404}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
