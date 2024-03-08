import React from "react";

const Navigation =({OnchangeRout,signin})=>{
    if(!signin){
        return(
        <nav style={{display:'flex', justifyContent:'flex-end'}}>
            <p  onClick={()=>OnchangeRout('signin')} className="f3 link dim pointer black underline ma2">Sign In</p>
            <p  onClick={()=>OnchangeRout('signup')} className="f3 link dim pointer black underline ma2">Sign Up</p>
        </nav>

        )
    }
    else{
        return(
            <nav style={{display:'flex', justifyContent:'flex-end'}}>
                <p onClick={()=>OnchangeRout('signin')} className="f3 link dim pointer black underline ma2">Sign out</p>
            </nav>
        );
    }
}

export default Navigation;