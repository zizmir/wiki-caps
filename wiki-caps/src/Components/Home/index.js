import React, {Component} from 'react';
import capsJson from './caps.json';
import Caps from '../Caps';
import _ from 'lodash';


class Home extends Component {


    render() {
        return(
            <div>
                <Caps caps={_.sample(capsJson)}/>
            </div>
        )
    }


}

export default Home;
