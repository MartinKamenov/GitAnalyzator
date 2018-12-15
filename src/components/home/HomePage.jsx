import React from 'react';
import { Link } from 'react-router-dom';
import "../../index.css";

const HomePage = () => {
    return ( 
        <div className="container center">
            <h1>Github Analyzator</h1>
            <div>
                <Link to="/analyze">Anlyze profile</Link> or <Link to="/compare">Compare profiles</Link>
            </div>
            <div className="sidebar">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                alt="Github"
                className="github-img"></img>
                <div>
                    <p>
                        Using Github we can analyze contributions for different users
                    </p>
                </div>
                <a href="https://github.com">Github</a>
            </div>
        </div>
    );
}
 
export default HomePage;