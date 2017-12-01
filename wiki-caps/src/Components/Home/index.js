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
                    console.log(index)
                    let path ="./img/"+cap.pathcaps;
                    return(
                        <div className="container" key={index}>
                            <h4 className="text-center">{cap.movie}</h4>
                            <img src={path} />
                        </div>
                )
                })}
            </div>
        )
    }


}

export default Home;
