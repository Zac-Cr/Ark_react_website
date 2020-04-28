import React from 'react';
import Slideshow from '../features/slideshow';
import { NavLink } from 'react-router-dom';
export default function(){
    return(
        <div className="page_container">
            <div className="middle_column">
                <h1>Ark Rubber Paving</h1>
                <div className="intro">
                    
                    {/* <!-- test video goes here --> */}
                    <div className="intro-text">
                        <p>
                            Welcome to Ark Rubber Paving! 
                            We used recycled tires to resurface and pave surfaces.
                            it is an eco-friendly, safe and durable alternative to traditional paving.
                            We install this cost effective surface over concrete, asphalt, wood or can create new surfaces.
                            this can bring new and extended life to your driveway, sidewalks, patios, decks, trailer flooring and more.
                        </p>
                    </div>
                    <div className="intro_header">
                        <h3>Benefits of Rubber Paving</h3>    
                    </div>
                    
                </div>
                <div className="finished_text">

                    <h2>Installation and Maintenance </h2>

                    <p>
                        This tried and true method of paving has been used in Canada for 20 plus years and here in Idaho for the last 6 years.
                        Rubber pavement can stretch and contract without cracking and pitting like a concrete driveway.
                        When you choose a rubber surface our installation only takes one day and 24 hours to cure.
                        Making your surface usable within just a few days of installation.
                    </p>

                    <h2>Winter Conditions</h2>
                    <p>
                        The freezing and thawing process does not affect it, as well as it is porous which makes it icce resistant.
                        Our rubber paving comes in a variety of colors and is easy to maintain a like new condition.
                        Even frozen rubber provides better slip resistant surface then your traditional cement. Helping prevent slips and falls in the most harshest of winter months.
                        Snow and ice is easily removed from rubber paving using a snowshovel or a snowblower.
                    </p>
                </div>
                <div className="contact_us_link">
                    <p>
                        If you want to know if your project could benefit from rubber pavement 
                        <NavLink to="/contact-us"> Click here</NavLink>
                    </p>
                </div>
                <div className="before_after">
                    <div className="before">
                        <h2>Before</h2>
                    </div>
                    <div className="after">
                        <h2>After</h2>
                    </div>
                </div>

                    {/* <!-- Slideshow container --> */}
                <div className="slideshow-container">
                    <Slideshow/>
                </div>
            </div>
        </div>
    );
}