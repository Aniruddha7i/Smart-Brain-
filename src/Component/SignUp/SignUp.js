import React from "react";

const SignUp=({OnchangeRout})=>{
    return(
        <article class="br2 ba dark-gray ml0 mr0 center shadow-5 w-33">
 
        <main className="pa4 black-80">
        <form className="measure center">
        <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
        <legend className="f1 fw6 ph0 mh0">Sign Up</legend>
         <div className="mt3">
            <label className="db fw6 lh-copy f6" for="email-address">Name</label>
            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="text"  id="name"/>
        </div>
         <div className="mt3">
            <label className="db fw6 lh-copy f6" for="email-address">Email</label>
            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
        </div>
        <div className="mv3">
            <label className="db fw6 lh-copy f6" for="password">Password</label>
            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
        </div>
        <label className="pa0 ma0 lh-copy f6 pointer"><input className="pointer" type="checkbox"/> Remember me</label>
    </fieldset>
    <div className="">
      <input onClick={()=>OnchangeRout('home')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign Up"/>
    </div>
    <div class="lh-copy mt3">
      <a onClick={()=>OnchangeRout('signin')} href="#0" className="f6 link dim black db">Sign In</a>
    </div>
  </form>
    </main>
       </article>
    );
}

export default SignUp;