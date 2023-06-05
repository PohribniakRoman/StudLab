import React, { useRef } from "react";
import AuthFormInput from "../ui-components/AuthFormInput";
import Button from "../ui-components/Button";
import { Subtitle } from "../ui-components/Subtitle";
import { PhotoInput } from "../ui-components/PhotoInput";
import { Link } from "react-router-dom";
import { ENDPOINTS } from "../../services/ENDPOINTS";
import { useNotification } from "../../services/hooks/useNotification";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const Registrate:React.FC<any> = ({animation,updateAnimation,email})=>{
    const formData = useRef({});
    const nodeName = "register";
    const isAway = animation.active === nodeName || animation.animateOut === nodeName;
    const slideIn = animation.active===nodeName;
    const slideOut = animation.animateOut===nodeName;
    return <form className={`auth__form--container-register ${isAway?"":"away"} ${slideOut?"slide-out":""} ${slideIn?"slide-in":""}`} onSubmit={async (e)=>{
        e.preventDefault();
        const resp = await(await fetch(ENDPOINTS.authorize,{method:"POST",body:JSON.stringify({...formData.current,email}), ...ENDPOINTS.params})).json();
        if(resp.token){
            useNotification().createNotification(resp.message,"success");
            cookies.set("token",resp.token,{expires:new Date(new Date().getTime()+(1000*60*60*24*7))})
        }        
    }}>
    <div className="auth__form--wrapper">
    <h1 className="auth__form--title">Реєстрація</h1>
    <div className="auth__form--justify">
        <div className="auth__form--input-wrapper">
            <div className="auth__form--input-container-register-xs">
                <Subtitle className="auth__form--input-title" title="Ім'я"/>
                <AuthFormInput placeholder="Слава" name="firstName" collector={formData}/>
            </div>
            <div className="auth__form--input-container-register-xs">
                <Subtitle className="auth__form--input-title" title="Прізвище"/>
                <AuthFormInput placeholder="Україні" name="lastName" collector={formData}/>
            </div>
        </div>
            <PhotoInput formData={formData}/>
        </div>
            <div className="auth__form--input-container-register-xm">
                <Subtitle className="auth__form--input-title" title="Створіть Пароль"/>
                <AuthFormInput placeholder="Слава" type="password" name="password" collector={formData}/>
            </div>
            <div className="auth__form--input-container-register-xm">
                <Subtitle className="auth__form--input-title" title="Підтвердіть Пароль"/>
                <AuthFormInput placeholder="Україні" type="password" name="passwordcheck" collector={formData}/>
            </div>
            <div className="auth__form--input-container-register-lg">
                <Subtitle className="auth__form--input-title" title="Спеціальність"/>
                <AuthFormInput placeholder="Україні" name="major" collector={formData}/>
            </div>
            <label className="auth__form--input-container-register-rights">
                <input type="checkbox" name="rights" required/>
                Я приймаю<Link target="_blank" to="/rules">Правила користування сервісом</Link>
            </label>
        <div className="auth__form--submit-container-register">
            <Button type="submit" title="Готово!" variant="field"/>
        </div>
    </div>
    </form>
}