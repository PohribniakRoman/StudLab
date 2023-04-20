import { useState } from "react";
import AuthFormInput from "./ui-components/AuthFormInput";
import Button from "./ui-components/Button";
import SubHeader from "./ui-components/SubHeader";

export const AuthForm = () => {
      const [url,setUrl] = useState<string | ArrayBuffer | null>();

    return <>
    <h1 className="auth__form--header">Реєстрація</h1>
    <div className="auth__form--container">
      <div className="auth__form--input-wrapper">
        <div className="auth__form--input-container">
            <SubHeader title="Ім'я"/>
            <AuthFormInput placeholder="Слава"/>
        </div>
        <div className="auth__form--input-container">
            <SubHeader title="Прізвище"/>
            <AuthFormInput placeholder="Україні"/>
        </div>
        <div className="auth__form--input-container">
            <SubHeader title="Створіть Пароль"/>
            <AuthFormInput placeholder="Слава"/>
        </div>
        <div className="auth__form--input-container">
            <SubHeader title="Підтвердіть Пароль"/>
            <AuthFormInput placeholder="Україні"/>
        </div>
      </div>
      <div className="auth__form--avatar-wrapper">
        <label>
          <input type="file" className="auth__form--file-input" accept=".jpg, .jpeg, .png" onChange={(event)=>{
              const file = event.target?.files?.item(0);
              if(file!==null && file){
                  const reader = new FileReader();
                  reader.onloadend = () =>{
                      setUrl(reader.result);
                  }
                  reader.readAsDataURL(file);
              }
          }}/>
          <div className="auth__form--avatar"style={{backgroundImage:`url(${url})`}}></div>
        </label>
          <SubHeader title="Фото Профілю"/>
      </div>
    </div>
    <div className="auth__form--submit-container">
        <Button type="submit" title="Готово!"/>
    </div>
    </>
}