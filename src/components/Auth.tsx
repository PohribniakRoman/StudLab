import * as React from "react";
import { BiLogIn } from "react-icons/bi";

export const Auth: React.FC = (): React.ReactElement => {
  const [isChanged, setChanged] = React.useState(false);
  const [url,setUrl] = React.useState("");
  return (
    <section className="auth">
      <input type="checkbox" checked={isChanged} className="auth__checkbox" />
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
                    <h3 className="auth__form--title">Ім'я</h3>
                    <input className="auth__form--input" required placeholder="Слава"/>
                </div>
                <div className="auth__form--input-container">
                    <h3 className="auth__form--title">Прізвище</h3>
                    <input className="auth__form--input" required placeholder="Україні"/>
                </div>
                <div className="auth__form--input-container">
                    <h3 className="auth__form--title">Створіть Пароль</h3>
                    <input className="auth__form--input-xl" required type="password" placeholder="Слава"/>
                </div>
                <div className="auth__form--input-container">
                    <h3 className="auth__form--title">Підтвердіть Пароль</h3>
                    <input className="auth__form--input-xl" required type="password" placeholder="Україні"/>
                </div>
              </div>
              <div className="auth__form--avatar-wrapper">
                <label>
                  <input type="file" className="auth__form--file-input" onChange={async (event)=>{
                    const fileToBlob = async (file:File|null) => new Blob([new Uint8Array(await file?.arrayBuffer(file))], {type: file?.type });
                    
                    if(event.target.files?.item(0)){
                      const file:File|null = event.target.files?.item(0);
                      const reader = new FileReader();
                      reader.readAsDataURL(await fileToBlob(file))
                      const result = reader.result;
                      setUrl(reader.result);
                    }
                    
                  }} accept=".jpg, .jpeg, .png" />
                  <div className="auth__form--avatar"style={{backgroundImage:`url(${url})`}}></div>
                </label>
                <h3 className="auth__form--title">Фото Профілю</h3>
              </div>
            </div>
            <div className="auth__form--submit-container">
              <button type="submit" className="auth__form--submit"><i>Готово!</i></button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
