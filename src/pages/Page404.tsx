import { Link } from "react-router-dom"
import { Footer } from "../components/Footer"

export const Page404:React.FC = () =>{
    return <section className="error">
        <h1 className="error__title">404</h1>
        <h3 className="error__subtitle">Page was not found!</h3>
        <Link className="error__link" to="/">Home</Link>
        <Footer/>
    </section>
}