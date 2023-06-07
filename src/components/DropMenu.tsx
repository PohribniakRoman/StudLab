import { Link } from "react-router-dom"
import { useNotification } from "../services/hooks/useNotification"
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export type DropMenuInterface = {
    isActive:boolean,
}

export const DropMenu:React.FC<DropMenuInterface> = (props:DropMenuInterface) => {
    const notification = useNotification();
    return <section className={`dropmenu ${props.isActive?"dropactive":""}`}>
        <div className="dropmenu__wrapper">
            <Link to="/profile"><div className="dropmenu__item">Профіль</div></Link>
            <Link to="/auth"><div className="dropmenu__item" onClick={()=>{
             cookies.remove("token");
             notification.createNotification("До наступної зустрічі","info")
            }}>Вихід</div></Link>
        </div>
    </section>
}