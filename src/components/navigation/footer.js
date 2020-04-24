import React from 'react';
import Logo from '../../../static/assets/logos/logo_white.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from 'react-router-dom';

export default function(){
    return(
        <div class="footer_container">
            <div class="footer_wrapper">
                <div class="footer">
                    <div class="footer_links">
                        <NavLink exact to="/">Home</NavLink>
                        <NavLink to="/ecoraster"> Ecoraster </NavLink>
                        {/* <button>Products</button> */}
                        <NavLink to="/finished-projects">Finished Projects</NavLink>
                        <NavLink to="/about-us">About Us</NavLink>
                    </div>
                    <div class="footer_logo">
                        <img src={Logo} alt="Footer Logo"/>  
                    </div>
                    <div className="middle_footer_column">
                        <div class="social_media_links">
                            <a href="https://www.facebook.com/arkrubberpaving">
                                <FontAwesomeIcon icon={['fab', 'facebook']}/>
                            </a>
                        </div>
                        <div className="contact_footer">
                            <NavLink to='/contact-us'>Contact Us</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}