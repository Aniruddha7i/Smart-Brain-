import React from "react";
import './FaceRecognation.css'
const FaceRecognation=({imageurl})=>{
    return(
        <div className="center mt2" width='500px' height='auto'>
            <img id="inputImage" src={imageurl} alt="img" width='500px' height='auto'/>
            {/* if we Change the width and height then manupulate the margin top and margin left of <Box/> */}
        </div>
    );
}

export default FaceRecognation;