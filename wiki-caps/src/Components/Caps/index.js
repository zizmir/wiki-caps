import React, {Component} from 'react';


class Caps extends Component {

    render() {
        return (
        <div className="container">
            <h4 className="text-center">{this.props.movie}</h4>
            <img src={"./img/" + this.props.pathcaps} />
        </div>);
    }
}

export default Caps;
