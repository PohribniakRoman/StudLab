import React, { useRef, useCallback } from "react";
import AuthFormInput from "../ui-components/AuthFormInput";
import Button from "../ui-components/Button";
import { Subtitle } from "../ui-components/Subtitle";
import { PhotoInput } from "../ui-components/PhotoInput";
import { Link } from "react-router-dom";

export const Registrate:React.FC<any> = ({animation,updateAnimation})=>{
    const formData = useRef({});
    const nodeName = "register";
    const isAway = animation.active === nodeName || animation.animateOut === nodeName;
    const slideIn = animation.active===nodeName;
    const slideOut = animation.animateOut===nodeName;
    return <form className={`auth__form--container-register ${isAway?"":"away"} ${slideOut?"slide-out":""} ${slideIn?"slide-in":""}`} onSubmit={(e)=>{
        e.preventDefault();
        console.log(formData);
    }}>
    <div className="auth__form--wrapper">
    <h1 className="auth__form--title">Реєстрація</h1>
    <div className="auth__form--justify">
        <div className="auth__form--input-wrapper">
            <div className="auth__form--input-container-register-xs">
                <Subtitle className="auth__form--input-title" title="Ім'я"/>
                <AuthFormInput placeholder="Слава" name="name" collector={formData}/>
            </div>
            <div className="auth__form--input-container-register-xs">
                <Subtitle className="auth__form--input-title" title="Прізвище"/>
                <AuthFormInput placeholder="Україні" name="surname" collector={formData}/>
            </div>
        </div>
            <PhotoInput formData={formData}/>
        </div>
            <div className="auth__form--input-container-register-xm">
                <Subtitle className="auth__form--input-title" title="Створіть Пароль"/>
                <AuthFormInput placeholder="Слава" name="password" collector={formData}/>
            </div>
            <div className="auth__form--input-container-register-xm">
                <Subtitle className="auth__form--input-title" title="Підтвердіть Пароль"/>
                <AuthFormInput placeholder="Україні" name="passwordcheck" collector={formData}/>
            </div>
            <div className="auth__form--input-container-register-lg">
                <Subtitle className="auth__form--input-title" title="Спеціальність"/>
                <AuthFormInput placeholder="Україні" name="specialty" collector={formData}/>
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