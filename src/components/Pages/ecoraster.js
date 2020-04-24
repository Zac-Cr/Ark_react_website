import React from 'react';
import { NavLink } from 'react-router-dom';

export default function(){
    return(
        <div class="body_wrapper">
            <div class="eco_raster_body">
                <div class="what_is_ecoraster">
                    <h1>What is Eco-Raster?</h1>
                </div>
                <div class="eco_raster_ex">
                    <p>
                        Ecoraster is a permeable paving solution that allows for natural drainage into the ground without producing harmful runoff.
                        Ecoraster is manufactured using post-consumer plastic waste and distributed throughout North America. 
                        With the ability to withstand even the harshest of climates. Applications for Ecoraster are limitless. 
                        Ecoraster can be used to stabilize the ground to secure paving methodologies, or can be used to help reduce dust and mud in barns and horse paddocks. Large-scale construction projects like roadways and parking lots are ideal use-cases for Ecoraster as the grid-system can carry loads of 35 tons per sq.ft. 
                        It is plowable in the winter, and won’t buckle and shift as seasons change.
                    </p>
                </div>
                <div class="eco_raster_app">
                    <div class="residential">
                        <div class="residential_header">
                            <h1>Residential</h1>
                        </div>
                        <div class="residential_body">
                            <div class="residential_img">
                                <img src="./assets/Pictures/ecoraster/demo/blocks.png" alt="Blox"/>
                            </div>
                            <div class="residential_text">
                                <p>
                                    Ecoraster grid systems can be installed with minimal effort under hot tub pads, sheds and pathways. 
                                    The grid and Bloxx systems can be used in conjunction with each other to design beautiful areas around your home that are easy to install. 
                                    Ecoraster and Ecoraster Bloxx can also be used for permeable driveway paving. Able to endure harsh climates and snow plowing,
                                    Ecoraster can also help reduce taxes by lowering your contribution to storm-water runoff.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="eco_raster_prod">
                    <div class="products">
                        <h1>Products</h1>
                        <div class="e50_wrapper">
                            <div class="e50">
                                <h2>E50</h2>
                            </div>
                            <div class="e50_text">
                                <p>
                                    E50 is the perfect solution for heavy-duty construction and landscaping. This permeable ground stabilization system is made from 100% recycled post-consumer plastic and is quick and easy to install. It can hold 70,000 pounds per square foot and withstand even the harshest of weather all year long. Backed by a 20 year warranty, E50 is the ideal choice for your next heavy-duty project</p>
                                    <div className="e50_list listed">
                                        <ul>
                                            <li>Commercial, Industrial and Military</li>
                                            <li>Oil and Mining</li>
                                            <li>Erosion Control</li>
                                            <li>Parking lots, Driveways</li>   
                                        </ul>
                                        <ul>
                                            <li>Emergency and Fire Access Lanes</li>
                                            <li>Outdoor Warehousing</li>
                                            <li>Road Shoulder Reinforcement</li>
                                            <li>Runway Extensions and Taxiways</li> 
                                        </ul>
                                    </div>
                            </div>
                        </div>
                        <div class="x30_header">
                            <h2>X30</h2>
                        </div>
                        <div class="x30_text">
                            <p>Ecoraster X30 is a lightweight, durable and eco-friendly solution for hardscaping or DIY projects around your home. Use it as a base under interlocking driveways and see considerable savings compared with a traditional base. The Ecoraster X30 grid system is made from 100% recycled materials and will withstand hot summers and cold winters. </p>
                            <div className="x30_list listed">
                                <ul>
                                    <li>Hardscape and Landscape Projects</li>
                                    <li>Ground Stabilization</li>
                                </ul>
                                <ul>
                                    <li>Garden Shed Floors</li>
                                    <li>Base for interlocking driveways</li>
                                </ul>
                            </div>
                            
                        </div>
                        <div class="bloxx_header">
                            <h2>Bloxx</h2>
                        </div>
                        <div class="bloxx_text">
                            <p>Ecoraster Bloxx is a patented and beautifully designed permeable paving solution with added ground reinforcement. The unique safety interlocking feature ensures a smooth surface that eliminates bumps and tripping hazards keeping safety and accessibility in mind. Ecoraster Bloxx has a high filtration rate that prevents storm-water runoff and promotes infiltration into the ground. Pavers are available in concrete and rubber allowing for creative and dynamic designs. Bloxx can be used in combination with Ecoraster grid products to further expand the usage. The Bloxx system is made from 100% recycled materials, is plowable and weather-resistant</p>
                            <div className="blox_list listed">
                                <ul>
                                    <li>Town and Village squares</li>
                                    <li>Parks and Pathways</li>
                                    <li>Driveways</li>
                                    <li>Footpaths and Cycle Lanes</li>
                                </ul>
                                <ul>
                                    <li>Parking Areas</li>
                                    <li>Emergency Access Routes</li>
                                    <li>Entrances and Exits</li>
                                    <li>Loading Areas</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="ecoraster_end">
                        <p>
                            There are more products that Ecoraster provides. To know what one will work for your project contact our specialist
                            <NavLink to='/contact-us'> Noah Spreirer</NavLink>or visit <a href="https://www.ecorastergrid.com/">Ecoraster's website</a> for more information on agricultural projects
                        </p> 
                    </div>
                </div>
            </div>
    </div>
    )
}