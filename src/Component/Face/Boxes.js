import React from "react";
import Box from './Box';
import './FaceRecognation.css'
const Boxes=({boxes})=>{
    const BoxCaomonents=boxes.map((box,i)=>{
        return <Box box={box}/>;
    });
    return(
        <div className="Boxes">
            {BoxCaomonents}
        </div>
    );
}
export default Boxes;