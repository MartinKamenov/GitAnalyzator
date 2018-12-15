import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return ( 
        <div className="container center">
            <h1>Github Analyzator</h1>
            <div>
                <Link to="/analyze">Anlyze profile</Link> or <Link to="/compare">Compare profiles</Link>
            </div>
            <div className="navbar">
                Using Github we can analyze contributions for different users
            </div>
        </div>
    );
}
 
export default HomePage;