import React from 'react';
import Trailer from '../features/trailer_slideshow';
import Walway from '../features/walkway_slideshow';

export default function(){
    return(
        <div class="body_container">
            <div class="middle_column">
                <h1>Finished Projects</h1>
                <div class="trailer_proj">
                    <div class="trailer_heading">
                        <h4>Trailer Resurfacing</h4>
                    </div>
                    <div class="trailer_descrip">
                        <p>
                                This trailer was used for equipment moving. The floor was getting ripped apart by the weight and edges of the equipment.
                                The floor was paved to withstand all the abuse that comes with a heavy worker. No more cuts and liquids on the floor.
                                The ramp was also done to give more traction when the ramp would be a little slippery when loading something wet.Tie down strips were install after the pavement was finished.
                        </p>
                    </div>
                    <Trailer className='finished'/>
                </div>
                <div class="walkway_proj">
                    <div class="walkway_heading">
                        <h4>Walway Resurface/New Pavement</h4>
                    </div>
                    <div class="walkway_descrip">
                        <p>
                            This walkway was done to prevent cracks from showing and to make a lounge area over a flower bed.
                            The stairs were also done to help prevent water pooling.
                        </p>
                    </div>
                    <Walway className='finished'/>
                </div>
                <div class="shed_proj">
                    
                </div>
                <div class="facebook_link">
                    <p>
                        If you would like to see more completed projects look at our 
                         <a href="https://www.facebook.com/arkrubberpaving/?ref=br_rs"> Facebook Page</a>
                    </p>
                </div>
                
            </div>
        </div>
    )
};