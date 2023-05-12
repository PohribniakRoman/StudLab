import * as React from "react";
import { BiLogIn } from "react-icons/bi";
import { useState } from "react";
import { Form } from "../components/ui-components/Form";
import { Registrate } from "../components/Form/Registrate";
import { Mail } from "../components/Form/Mail";
import { Code } from "../components/Form/Code";
import { Login } from "../components/Form/Login";
import { Logo } from "../components/logo";

export const Auth: React.FC = (): React.ReactElement => {
  const [animation,setAnimation] = useState({
    active:"mail",
    animateOut:"",
  })
  return (
    <section className="auth">
      <div className="auth__container">
        <div className="auth__container--circle-red"></div>
        <div className="auth__container--circle-green"></div>
        <div className="auth__container--glass"></div>
        <button className="auth__btn-change" onClick={()=>{
          if(animation.active !== "login")setAnimation({animateOut:animation.active,active:"login"})
          if(animation.active === "login")setAnimation({animateOut:animation.active,active:"mail"})
 }}>{animation.active === "login"?"Зареєструватись":"Увійти"}<span>{animation.active === "login"?"":<BiLogIn />}</span></button>
        <div className="auth__wrapper">
          <Logo variant="auth"/>
          <Form>
            <Mail animation={animation} updateAnimation={setAnimation}/>
            <Code animation={animation} updateAnimation={setAnimation}/>
            <Registrate animation={animation} updateAnimation={setAnimation}/>
            <Login animation={animation} updateAnimation={setAnimation}/>
          </Form>
        </div>
      </div>
      <div className="auth__watermark">® All rights reserved 2023</div>
      <div className="auth__watermark" style={{left:"50px"}}>Developed by WebLab</div>
    </section>
  );
};
