import AuthFormInput from "../ui-components/AuthFormInput"
import Button from "../ui-components/Button"
import { Subtitle } from "../ui-components/Subtitle"
import React,{useState} from "react";

export const Login:React.FC<any> = ({animation,updateAnimation})=>{
    const nodeName = "login";    
    const isAway = animation.active === nodeName || animation.animateOut === nodeName;
    const slideIn = animation.active===nodeName;
    const slideOut = animation.animateOut===nodeName;
    return <form className={`auth__form--container ${isAway?"":"away"} ${slideOut?"slide-out":""} ${slideIn?"slide-in":""}`}>
            <div className="auth__form--wrapper-email">
            <div className="auth__form--input-container">
                <Subtitle className="auth__form--input-title" title="Пошта"/>
                <AuthFormInput className="auth__form--input-login" placeholder="Ввести пошту"/>
            </div>
            <div className="auth__form--input-container-login">
                <Subtitle className="auth__form--input-title" title="Пароль"/>
                <AuthFormInput className="auth__form--input-login" placeholder="Ввести пароль"/>
            </div>
            <div className="auth__form--submit-container">
                <Button type="submit" variant="field" title="Увійти"/>
            </div>
        </div>
    </form>
}