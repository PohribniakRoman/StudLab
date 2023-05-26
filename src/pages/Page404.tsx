import { Link } from "react-router-dom"
import { Footer } from "../components/Footer"

export const Page404:React.FC = () =>{
    return <section className="errorPage">
        <h1 className="errorPage__title">404</h1>
        <div className="errorPage__container">
            <h3 className="errorPage__subtitle">Page was not found!</h3>
            <Link className="errorPage__link" to="/">Home</Link>
        </div>
        <Footer/>
    </section>
}