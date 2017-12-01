import React, {Component} from "react";
import errorGif from './404_gif_2.gif';

class Error404 extends Component {
    render() {
        return (
            <div>
                <img className="center-block" src={errorGif}/>
            </div>
        );
    }
}

export default Error404;