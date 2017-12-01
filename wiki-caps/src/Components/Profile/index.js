import React, {Component} from 'react';
import './profile.css';


class Profile extends Component {
    render() {
        return (
            <div className="card">
                <img src="img.jpg" alt="John" />
                    <h1>M'bark</h1>
                    <p className="title">Developpeur web</p>
                    <p>Groupe Efrei</p>
                    <a href="#"><i className="fa fa-dribbble"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <p>
                        <button>Contact</button>
                    </p>
            </div>
        );
    }
}

export default Profile;
