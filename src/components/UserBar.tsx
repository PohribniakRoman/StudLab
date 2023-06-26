import { Link } from "react-router-dom";
import { DropMenu } from "./menu/DropMenu";
import { useState } from "react";
import { ProtectedRouter } from "../services/protectrdRouter";
import Button from "./ui-components/Button";
import { useSelector } from "react-redux";
import { decode } from "js-base64";
import { BiBell, BiMessageAltDetail } from "react-icons/bi";
import { FaChevronLeft } from "react-icons/fa";
import { Search } from "./menu/Search";

export const UserBar: React.FC = () => {
  return (
    <section className="userbar">
      <Search/>
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
        <BiBell/>
      </div>
      <div className="userbar__icon">
        <BiMessageAltDetail/>
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
          <div className={`userbar__avatar--icon-more ${isMenuOpened?"rotated":""}`}>
           <FaChevronLeft/>
          </div>
        </div>
      </div>
      <DropMenu isActive={isMenuOpened} />
    </div>
  );
};
