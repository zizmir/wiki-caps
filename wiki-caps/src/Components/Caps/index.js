import React, {Component} from 'react';


class Caps extends Component {
    render() {

        return (
        <div className="container" key={this.props.key}>
            <h4 className="text-center">{this.props.movie}</h4>
            <img src={this.props.pathcaps} />
        </div>);
    }
}

export default Caps;
