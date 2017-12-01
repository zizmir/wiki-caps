import React, {Component} from "react";
import Caps from '../Caps';

class Gallery extends Component {


    constructor(){
        super();
        this.state ={
            caps : []
        }
    }

    componentDidMount(){
        this._fetchCaps();
    }

    render() {
        const arCaps = this.state.caps.map((cap, index) => {
            let path ="./img/"+cap.pathcaps;
            return <Caps movie={cap.movie} pathcaps={path} key={index} />
        })
        return(
            <div>{arCaps}</div>
        )

    }
    _fetchCaps(){

       let capsJson = require('../data/caps.json');

       this.setState({caps:capsJson});


    }
}

export default Gallery;