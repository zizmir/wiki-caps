import React, {Component} from 'react';
import './index.css';
import Navbar from "../Navbar";


class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                {this.props.children}
            </div>
        );
    }
}

export default App;
