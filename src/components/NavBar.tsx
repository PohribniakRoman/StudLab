import { Logo } from "./logo"
import HomeIconSVG from "../assets/HomeIcon.svg";
import CalendarIconSVG from "../assets/CalendarIcon.svg";
import CaseIconSVG from "../assets/CaseIcon.svg";
import RecommendationsIconSVG from "../assets/RecommendationsIcon.svg";
import AboutUsIconSVG from "../assets/AboutUsIcon.svg";
import { useRef } from "react";
import { Link } from "react-router-dom";

export const NavBar:React.FC = () => {
    const galassRef = useRef<any>();
    return <>
    <div className="navbar__glass" ref={galassRef}/>
    <section className="navbar" onMouseOver={()=>{
        galassRef.current.classList.remove("glass-hide");
        galassRef.current.classList.add("glass-show");
    }} 
    onMouseOut={()=>{
        galassRef.current.classList.remove("glass-show");
        galassRef.current.classList.add("glass-hide");
    }}>
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
            <Link to="/rules">
                <nav className="navbar__menu--item">
                    <img src={AboutUsIconSVG} />
                    <p className="navbar__menu--item-label">Про Нас</p>
                </nav>
            </Link>
        </nav>
        <div/>
        </section>
    </> 
}