import React, { useState } from "react";
import AuthFormInput from "../ui-components/AuthFormInput";
import Button from "../ui-components/Button";
import { Subtitle } from "../ui-components/Subtitle";

export const Registrate:React.FC<any> = ({animation,updateAnimation})=>{
    const nodeName = "register";
    const isAway = animation.active === nodeName || animation.animateOut === nodeName;
    const slideIn = animation.active===nodeName;
    const slideOut = animation.animateOut===nodeName;
    return <form className={`auth__form--container ${isAway?"":"away"} ${slideOut?"slide-out":""} ${slideIn?"slide-in":""}`}>
    <div className="auth__form--wrapper">
    <div className="auth__form--container-register">
    <h1 className="auth__form--title">Реєстрація</h1>
    <div className="aith__form--justify">
        <div className="auth__form--input-wrapper">
            <div className="auth__form--input-container-register-xs">
                <Subtitle className="auth__form--input-title" title="Ім'я"/>
                <AuthFormInput placeholder="Слава"/>
            </div>
            <div className="auth__form--input-container-register-xs">
                <Subtitle className="auth__form--input-title" title="Прізвище"/>
                <AuthFormInput placeholder="Україні"/>
            </div>
        </div>
        <div className="auth__form--avatar-wrapper">

            </div>
        </div>
            <div className="auth__form--input-container-register-xm">
                <Subtitle className="auth__form--input-title" title="Створіть Пароль"/>
                <AuthFormInput placeholder="Слава"/>
            </div>
            <div className="auth__form--input-container-register-xm">
                <Subtitle className="auth__form--input-title" title="Підтвердіть Пароль"/>
                <AuthFormInput placeholder="Україні"/>
            </div>
            <div className="auth__form--input-container-register-lg">
                <Subtitle className="auth__form--input-title" title="Спеціальність"/>
                <AuthFormInput placeholder="Україні"/>
            </div>
    <div className="auth__form--submit-container">
        <Button type="submit" title="Готово!" variant="field"/>
    </div>
    </div>
    </div>
    </form>
}