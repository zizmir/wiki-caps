import React, {Component} from 'react';
import capsJson from './caps.json';
import Caps from '../Caps';


class Home extends Component {


    render() {
        return(
            <div>
                {capsJson.map((cap, index) => {
                    let path ="./img/"+cap.pathcaps;
                    return(
                        <Caps movie={cap.movie} pathcaps={path} key={index} />

                )
                })}
            </div>
        )
    }


}

export default Home;
