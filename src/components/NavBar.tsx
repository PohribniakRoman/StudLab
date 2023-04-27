import { Logo } from "./logo"
import HomeIconSVG from "../assets/HomeIcon.svg";
import CalendarIconSVG from "../assets/CalendarIcon.svg";
import CaseIconSVG from "../assets/CaseIcon.svg";
import RecommendationsIconSVG from "../assets/RecommendationsIcon.svg";

export const NavBar:React.FC = () => {
    return  <section className="navbar">
        <div className="navbar__logo">
            <Logo variant="default"/>
        </div>
        <nav className="navbar__menu">
            <nav className="navbar__menu--item active">
                <img src={HomeIconSVG} />
                <p className="navbar__menu--item-label">Додому</p>
            </nav>
            <nav className="navbar__menu--item">
                <img src={CalendarIconSVG} />
                <p className="navbar__menu--item-label">Заходи</p>
            </nav>
            <nav className="navbar__menu--item">
                <img src={CaseIconSVG} />
                <p className="navbar__menu--item-label">Робота</p>
            </nav>
            <nav className="navbar__menu--item">
                <img src={RecommendationsIconSVG} />
                <p className="navbar__menu--item-label">Рекомендації</p>
            </nav>
        </nav>
        <div></div>
    </section>
}