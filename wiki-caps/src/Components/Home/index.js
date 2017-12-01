import React, {Component} from 'react';
import capsJson from './caps.json';


class Home extends Component {


    render() {
        return(
            <div>
                {capsJson.map((cap, index) => {
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
