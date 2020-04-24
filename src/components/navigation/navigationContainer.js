import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Logo from '../../../static/assets/logos/logo_white.png';
import Leaf from '../../../static/assets/logos/leaf_white.png';
export default class NavigationContainer extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="navigation_buttons">
                <div className="left_header">
                    <img src={Logo} alt="logo"/>
                </div>
                <div className="center_header">
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="/ecoraster"> Ecoraster </NavLink>
                    {/* <button>Products</button> */}
                    <NavLink to="/finished-projects">Finished Projects</NavLink>
                    <NavLink to="/about-us">About Us</NavLink>
                </div>
                <div className="right_header">
                    <div className="slogan">
                        <div className="right_header_img">
                            <img src={Leaf} alt="Eco Friendly"/>
                        </div>
                        <div className="right_header_eco">
                            <h6>Your Eco-friendly Paving Solution</h6>
                        </div>
                    </div>
                    <div className="contact_us_button">
                        <NavLink to="/contact-us">Contact Us</NavLink>
                    </div>
                </div>
            </div>
        )
    }

}
