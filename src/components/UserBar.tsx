import { Link } from "react-router-dom"

export const UserBar:React.FC = () => {
    return <section className="userbar">
        <div className="userbar__search">
            <input type="text" className="userbar__search--input" placeholder="Що ви шукаєте?"/>
        </div>
        <div className="userbar__container">
            <div className="userbar__icon">
                <div className="userbar__icon--bell notified"></div>
            </div>
            <div className="userbar__icon">
                <div className="userbar__icon--comment"></div>
            </div>
            {/* <Link to="/auth">
                <div className="userbar__icon">
                    <div className="userbar__icon--exit"></div>
                </div>
            </Link> */}
            <div className="userbar__avatar">
                <div className="userbar__avatar--img" style={{backgroundImage:`url()`}}/>
                <div className="userbar__avatar--icon">
                    <div className="userbar__avatar--icon-more"></div>
                </div>
            </div>
        </div>
    </section>
}