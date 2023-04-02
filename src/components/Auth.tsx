import * as React from "react";
import { BiLogIn } from "react-icons/bi";

export const Auth: React.FC = (): React.ReactElement => {
  const [isChanged, setChanged] = React.useState(false);
  return (
    <section className="auth">
      <input type="checkbox" checked={isChanged} className="auth__checkbox" />
      <div className="auth__container">
        <div className="auth__container--circle-red"></div>
        <div className="auth__container--circle-green"></div>
        <button className="auth__btn-change" onClick={()=>{setChanged(!isChanged)}}>{!setChanged?"Увійти":"Зареєструватись"}<span><BiLogIn /></span></button>
        <div className="auth__wrapper">
          <h1 className="auth--logo">Stud<br/>Lab</h1>
        </div>
      </div>
    </section>
  );
};
