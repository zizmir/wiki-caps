import React, {Component} from 'react';
import caps from './caps.json';


class Home extends Component {

    constructor(){
        super();
    }
    render() {
        return(
            <div>
                {caps.map((cap, index) => {
                    console.log(cap.pathcaps)
                    let path ="./img/"+cap.pathcaps;
                    return(
                        <div>
                            <h4>{cap.movie}</h4>
                            <img src={path} key={index}/>
                        </div>
                )
                })}
            </div>
        )
    }


}

export default Home;
