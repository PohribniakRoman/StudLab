import * as React from "react";
import { BiLogIn } from "react-icons/bi";
import { useState } from "react";
import { Logo } from "../components/logo";
import { Form } from "../components/ui-components/Form";
import { Registrate } from "../components/Form/Registrate";
import { Mail } from "../components/Form/Mail";
import { Code } from "../components/Form/Code";
import { Login } from "../components/Form/Login";

export const Auth: React.FC = (): React.ReactElement => {
  const [animation,setAnimation] = useState({
    active:"mail",
    animateOut:"login",
  })
  console.log(animation);
  return (
    <section className="auth">
      <div className="auth__container">
        <div className="auth__container--circle-red"></div>
        <div className="auth__container--circle-green"></div>
        <div className="auth__container--glass"></div>
        <button className="auth__btn-change" onClick={()=>{setAnimation({animateOut:animation.active,active:"login"})}}>{animation.active === "register"?"Зареєструватись":"Увійти"}<span>{animation.active === "register"?<BiLogIn />:""}</span></button>
        <div className="auth__wrapper">
          <Logo/>
          <Form>
            <Mail slideOut={animation.animateOut==="mail"} slideIn={animation.active==="mail"}/>
            {/* <Code/> */}
            {/* <Registrate/> */}
            <Login slideOut={animation.animateOut==="login"} slideIn={animation.active==="login"}/>
          </Form>
        </div>
      </div>
      <div className="auth__watermark">® All rights reserved 2023</div>
      <div className="auth__watermark" style={{left:"50px"}}>Developed by WebLab</div>
    </section>
  );
};
