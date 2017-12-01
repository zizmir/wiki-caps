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

            return <Caps movie={cap.movie} pathcaps={cap.pathcaps} key={index} />
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