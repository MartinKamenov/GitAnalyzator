import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';

const HomePage = () => {
    return (
        <div className="home-wrapper">
            <img className="home-image"
                alt="home"
                src="/laptop-wallpaper.jpg"></img>
            <div className="link-content">
                <Link to="/overview">All profiles</Link>
                <Link to="/analyze">Analyze profile</Link>
            </div>
            <div className="container center">
                <div className="sidebar hidden-sm hidden-xs">
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