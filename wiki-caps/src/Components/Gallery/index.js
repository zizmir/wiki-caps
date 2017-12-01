import React, {Component} from "react";
import capsJson from '../../caps.json';
import Caps from '../Caps';
import _ from "lodash";

class Gallery extends Component {
    render() {
        return (
            <div>
                {capsJson.map((cap, index) => {
                    return (
                        <Caps caps={_.sample(capsJson)}/>
                    )
                })}
            </div>
        );
    }
}

export default Gallery;