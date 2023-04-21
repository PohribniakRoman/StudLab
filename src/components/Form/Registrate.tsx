import React, { useState } from "react";
import AuthFormInput from "../ui-components/AuthFormInput";
import Button from "../ui-components/Button";
import { Subtitle } from "../ui-components/Subtitle";

export const Registrate:React.FC = () => {

    return <>
    <h1 className="auth__form--header">Реєстрація</h1>
    <div className="auth__form--container">
      <div className="auth__form--input-wrapper">
        <div className="auth__form--input-container">
            <Subtitle title="Ім'я"/>
            <AuthFormInput placeholder="Слава"/>
        </div>
        <div className="auth__form--input-container">
            <Subtitle title="Прізвище"/>
            <AuthFormInput placeholder="Україні"/>
        </div>
        <div className="auth__form--input-container">
            <Subtitle title="Створіть Пароль"/>
            <AuthFormInput placeholder="Слава"/>
        </div>
        <div className="auth__form--input-container">
            <Subtitle title="Підтвердіть Пароль"/>
            <AuthFormInput placeholder="Україні"/>
        </div>
      </div>
      <div className="auth__form--avatar-wrapper">

      </div>
    </div>
    <div className="auth__form--submit-container">
        <Button type="submit" title="Готово!"/>
    </div>
    </>
}