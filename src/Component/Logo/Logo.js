import React from "react";
import { Tilt } from 'react-tilt';  // web side url: https://www.npmjs.com/package/react-tilt
import 'tachyons';
import './Logo.css';
import Logopng from './Logo.png';
const defaultOptions = {
	reverse:        true,  // reverse the tilt direction
	max:            30,     // max tilt rotation (degrees)
	perspective:    9000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const Logo=()=>{
    return(
        <div className="ma3 mt0 br2">
            <Tilt className='br2 shadow-2 Tilt' options={defaultOptions} style={{max:50, perspective:100, height: 100, width: 100 }}>
                <div><img src={Logopng} alt="" srcset="" /></div>
            </Tilt>
        </div>
    );
}

export default Logo;