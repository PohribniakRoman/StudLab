import { Logo } from "./logo"
import HomeIconSVG from "../../assets/HomeIcon.svg";
import CalendarIconSVG from "../../assets/CalendarIcon.svg";
import CaseIconSVG from "../../assets/CaseIcon.svg";
import RecommendationsIconSVG from "../../assets/RecommendationsIcon.svg";
import AboutUsIconSVG from "../../assets/AboutUsIcon.svg";
import { Link, useLocation } from "react-router-dom";

export const NavBar:React.FC = () => {
    const location = useLocation();
    const isOnRoute = (route:string)=>{
        return location.pathname === route?"active":"";
    }
    return <section className="navbar">
        <div className="navbar__logo">
            <Logo variant="default"/>
        </div>
        <nav className="navbar__menu">
            <Link to="/">
                <nav className={`navbar__menu--item ${isOnRoute("/")}`}>
                    <img src={HomeIconSVG} />
                    <p className="navbar__menu--item-label">Додому</p>
                </nav>
            </Link>
            <Link to="/events">
                <nav className={`navbar__menu--item ${isOnRoute("/events")}`}>
                    <img src={CalendarIconSVG} />
                    <p className="navbar__menu--item-label">Заходи</p>
                </nav>
            </Link>
            <Link to="/courses">
                <nav className={`navbar__menu--item ${isOnRoute("/courses")}`}>
                    <img src={CaseIconSVG} />
                    <p className="navbar__menu--item-label">Курси</p>
                </nav>
            </Link>
            <Link to="/recommendations">
                <nav className={`navbar__menu--item ${isOnRoute("/recommendations")}`}>
                    <img src={RecommendationsIconSVG} />
                    <p className="navbar__menu--item-label">Рекомендації</p>
                </nav>
            </Link>
            <Link to="/rules">
                <nav className="navbar__menu--item">
                    <img src={AboutUsIconSVG} />
                    <p className="navbar__menu--item-label">Про Нас</p>
                </nav>
            </Link>
        </nav>
        <div/>
        </section>
}