import * as React from "react";
import { BiLogIn } from "react-icons/bi";

export const Auth: React.FC = (): React.ReactElement => {
  const [isChanged, setChanged] = React.useState(false);
  return (
    <section className="auth">
      <input type="checkbox" checked={isChanged} className="auth__checkbox" />

      <div className="auth__container">
        <button className="auth__btn-change">Увійти<span><BiLogIn /></span></button>
      </div>
      <div className="auth__wrapper"></div>
    </section>
  );
};
