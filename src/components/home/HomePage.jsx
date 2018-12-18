import React from 'react';
import { Link } from 'react-router-dom';
import "../../index.css";

const HomePage = () => {
    return (
        <div className="home-wrapper">
            <img className="home-image"
                alt="home"
                src="https://images.pexels.com/photos/1268477/pexels-photo-1268477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
            <div className="link-content">
                <Link to="/analyze">Anlyze profile</Link>
                <Link to="/compare">Compare profiles</Link>
            </div>
            <div className="container center">
                <div className="sidebar">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                    alt="Github"
                    className="github-img"></img>
                    <div>
                        <p className="paragraph">
                            Using Github we can analyze contributions for different users
                        </p>
                    </div>
                    <a href="https://github.com">Github</a>
                </div>
            </div>
        </div>
    );
}
 
export default HomePage;