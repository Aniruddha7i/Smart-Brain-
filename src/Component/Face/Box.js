import React from "react";
import './FaceRecognation.css'
const Box=({box})=>{
    return <div className="bounding-box" style={{top:box.T, right:box.R, bottom:box.B, left:box.L,width:box.w, height:box.h,marginTop:'25.2rem',marginLeft:'31.8rem'}}>
        {/* {child} */}
    </div> 
}
// 437.564px 600.5px -373.2538px 556px
// 52.094px 145.5px 64.477px 136px   9 4 -6 4
export default Box;