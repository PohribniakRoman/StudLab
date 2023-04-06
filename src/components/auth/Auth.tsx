import * as React from "react";
import { BiLogIn } from "react-icons/bi";
import { useState } from "react";
import Button from "../ui-components/Button";
import SubHeader from "../ui-components/SubHeader";
import AuthFormInput from "../ui-components/AuthFormInput";

export const Auth: React.FC = (): React.ReactElement => {
  const [isChanged, setChanged] = useState(false);
  const [url,setUrl] = useState<string | ArrayBuffer | null>();
  return (
    <section className="auth">
      <input type="checkbox" checked={isChanged} onChange={(event=>{})} className="auth__checkbox" />
      <div className="auth__container">
        <div className="auth__container--circle-red"></div>
        <div className="auth__container--circle-green"></div>
        <button className="auth__btn-change" onClick={()=>{setChanged(!isChanged)}}>{!isChanged?"Увійти":"Зареєструватись"}<span><BiLogIn /></span></button>
        <div className="auth__wrapper">
          <h1 className="auth--logo">Stud<br/>Lab</h1>
          <form className="auth__form">
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
          </form>
        </div>
      </div>
    </section>
  );
};
