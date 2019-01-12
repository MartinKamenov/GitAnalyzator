import React from 'react';
import { FaFacebook, FaTwitter, FaGoogle, FaPhone } from 'react-icons/fa';

const FooterComponent = () => {
    return (
        <div className='footer-container'>
            <nav className="contacts">
                For contacts
                <div>
                    <span>
                        <FaPhone/> +359 886 990 841
                    </span>
                </div>
            </nav>
            <nav className='social-btn-container'>
                <div className="social-btns">
                    <h3>Find us on social media</h3>
                    <a className="btn facebook" href="https://facebook.com"><FaFacebook className="fa fa-facebook"/></a>
                    <a className="btn twitter" href="https://twitter.com"><FaTwitter className="fa fa-twitter"/></a>
                    <a className="btn google" href="https://google.com"><FaGoogle className="fa fa-twitter"/></a>
                </div>
            </nav>
            <nav class="bottom-info">
                2018 Github Analyzator
            </nav>
        </div>
    );
}
 
export default FooterComponent;