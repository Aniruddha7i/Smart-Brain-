import React from "react";
import './UrlForm.css'; //https://projects.verou.me/css3patterns/#bricks
const UrlForm = ({onInput,onSubmit})=>{
    return(
        <div id="form">
            <p className="f3" style={{fontWeight:'bold'}}>{'This is magic Brain will detect face in your picture.You can try it!!'}</p>
            <div className="pa3 br3 shadow-5 w-60 mr0 ml0 center flex form">
            <input className="f4 w-80 center pa1 pl3 br-pill" type="text" placeholder="URL" style={{zIndex:'10'}} onChange={onInput} />
            <button className="f3 w-9 center pa2 mr5 grow link ph3 pv2 dib white bg-light-purple pointer" type="button" onClick={onSubmit}>Detrct</button>
            </div>
        </div>
    );
}

export default UrlForm;