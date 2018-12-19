import React from 'react';
import { FaFacebook, FaTwitter, FaGoogle, FaPhone } from 'react-icons/fa';

const FooterComponent = () => {
    return (
        <div className='footer-container'>
            <div className="container">
                For contacts
                <li>
                    <ul>
                        <span className="btn">
                            <FaPhone/> 0886 99 08 41
                        </span>
                    </ul>
                </li>
            </div>
            <div>
                <div class="social-btns">
                    <h3>Find us on social media</h3>
                    <a class="btn facebook" href="https://facebook.com"><FaFacebook className="fa fa-facebook"/></a>
                    <a class="btn twitter" href="https://twitter.com"><FaTwitter class="fa fa-twitter"/></a>
                    <a class="btn google" href="https://google.com"><FaGoogle class="fa fa-twitter"/></a>
                </div>
            </div>
        </div>
    );
}
 
export default FooterComponent;