import { Link } from "react-router-dom"

export type DropMenuInterface = {
    isActive:boolean,
}

export const DropMenu:React.FC<DropMenuInterface> = (props:DropMenuInterface) => {
    return <section className={`dropmenu ${props.isActive?"dropactive":""}`}>
        <div className="dropmenu__wrapper">
            <Link to="/profile"><div className="dropmenu__item">Профіль</div></Link>
            <Link to="/auth"><div className="dropmenu__item">Вихід</div></Link>
        </div>
    </section>
}