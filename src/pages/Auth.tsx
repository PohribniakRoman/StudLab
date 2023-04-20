import * as React from "react";
import { BiLogIn } from "react-icons/bi";
import { useState } from "react";
import { Logo } from "../components/logo";
import { Form } from "../components/Form";
import { AuthForm } from "../components/AuthFrom";
import { MailForm } from "../components/MailForm";

export const Auth: React.FC = (): React.ReactElement => {
  const [isChanged, setChanged] = useState(false);
  return (
    <section className="auth">
      <input type="checkbox" checked={isChanged} onChange={(event=>{})} className="auth__checkbox" />
      <div className="auth__container">
        <div className="auth__container--circle-red"></div>
        <div className="auth__container--circle-green"></div>
        <div className="auth__container--glass"></div>
        <button className="auth__btn-change" onClick={()=>{setChanged(!isChanged)}}>{!isChanged?"Увійти":"Зареєструватись"}<span>{!isChanged?<BiLogIn />:""}</span></button>
        <div className="auth__wrapper">
          <Logo/>
          <Form>
            <MailForm/>
          </Form>
        </div>
      </div>
      <div className="auth__watermark">® All rights reserved 2023</div>
      <div className="auth__watermark" style={{left:"50px"}}>Developed by WebLab</div>
    </section>
  );
};
