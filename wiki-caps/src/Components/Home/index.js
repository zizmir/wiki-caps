import React, {Component} from 'react';
import capsJson from '../data/caps.json';
import Caps from '../Caps';
import _ from 'lodash';


class Home extends Component {


    render() {

        let caps= _.sample(capsJson);
        return(
            <div>
                <Caps movie={caps.movie} pathcaps={caps.pathcaps}/>
            </div>
        )
    }


}

export default Home;
