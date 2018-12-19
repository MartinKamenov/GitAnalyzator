import React from 'react';
import { FaFacebook, FaTwitter, FaGoogle, FaPhone } from 'react-icons/fa';

const FooterComponent = () => {
    return (
        <div className='footer-container'>
            <div className="contacts">
                For contacts
                <ul>
                    <li className="unstyled">
                        <span>
                            <FaPhone/> 0886 99 08 41
                        </span>
                    </li>
                </ul>
            </div>
            <div>
                <div className="social-btns">
                    <h3>Find us on social media</h3>
                    <a className="btn facebook" href="https://facebook.com"><FaFacebook className="fa fa-facebook"/></a>
                    <a className="btn twitter" href="https://twitter.com"><FaTwitter className="fa fa-twitter"/></a>
                    <a className="btn google" href="https://google.com"><FaGoogle className="fa fa-twitter"/></a>
                </div>
            </div>
        </div>
    );
}
 
export default FooterComponent;