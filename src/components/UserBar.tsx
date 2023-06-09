import { Link } from "react-router-dom";
import { DropMenu } from "./DropMenu";
import { useState } from "react";
import { ProtectedRouter } from "../services/protectrdRouter";
import Button from "./ui-components/Button";
import { useSelector } from "react-redux";
import { decode } from "js-base64";

export const UserBar: React.FC = () => {
  return (
    <section className="userbar">
      <div className="userbar__search">
        <input
          type="text"
          className="userbar__search--input"
          placeholder="Що ви шукаєте?"
        />
      </div>
      <ProtectedRouter
        children={<Menu />}
        failed={
          <Link to="/auth">
            <Button variant="field" title="Увійти" />
          </Link>
        }
      />
    </section>
  );
};

const Menu = () => {
  const [isMenuOpened, setMenuOpened] = useState(false);
  const profile = useSelector((state: any) => state.client);

  return (
    <div className="userbar__container">
      <div className="userbar__icon">
        <div className="userbar__icon--bell notified"></div>
      </div>
      <div className="userbar__icon">
        <div className="userbar__icon--comment"></div>
      </div>
      <div
        className="userbar__avatar"
        onClick={() => setMenuOpened(!isMenuOpened)}
      >
        <div className="userbar__avatar--img">
          {profile.photoBytes !== null ? (
            <img
              src={decode(profile.photoBytes)}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          ) : (
            ""
          )}
        </div>
        <div className="userbar__avatar--icon">
          <div className="userbar__avatar--icon-more"></div>
        </div>
      </div>
      <DropMenu isActive={isMenuOpened} />
    </div>
  );
};
