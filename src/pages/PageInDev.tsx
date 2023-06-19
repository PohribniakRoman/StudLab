import { Link } from "react-router-dom"
import { Footer } from "../components/Footer"

export const PageInDev:React.FC = () => {
    return <section className="errorPage">
        <h1 className="errorPage__title">{"</>"}</h1>
        <div className="errorPage__container" style={{transform:"translateY(-90px)"}}>
            <h3 className="errorPage__subtitle">The page is not ready yet :(</h3>
            <Link className="errorPage__link" to="/">Home</Link>
        </div>
        <Footer/>
    </section>
}

