import { Link } from "react-router-dom"
import { DropMenu } from "./DropMenu"
import { useState } from "react";
import { ProtectedRouter } from "../services/protectrdRouter";
import Button from "./ui-components/Button";

export const UserBar:React.FC = () => {

    return <section className="userbar">
        <div className="userbar__search">
            <input type="text" className="userbar__search--input" placeholder="Що ви шукаєте?"/>
        </div>
        <ProtectedRouter Children={Menu} Failed={linkToAuth}/>
    </section>
}

const linkToAuth:React.FC = ()=>{
    return <Link to="/auth">
        <Button variant="field" title="Увійти"/>
    </Link>
}

const Menu = ()=>{
    const [isMenuOpened,setMenuOpened] = useState(false);

return <div className="userbar__container">
        <div className="userbar__icon">
            <div className="userbar__icon--bell notified"></div>
        </div>
        <div className="userbar__icon">
            <div className="userbar__icon--comment"></div>
        </div>
        <div className="userbar__avatar"onClick={()=>setMenuOpened(!isMenuOpened)}> 
            <div className="userbar__avatar--img" style={{backgroundImage:`url()`}}/>
            <div className="userbar__avatar--icon">
                <div className="userbar__avatar--icon-more"></div> 
            </div>
        </div>
        <DropMenu isActive={isMenuOpened}/>
    </div>
}