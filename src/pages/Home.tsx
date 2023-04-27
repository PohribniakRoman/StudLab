import { Footer } from "../components/Footer"
import { NavBar } from "../components/NavBar"

export const Home:React.FC = () =>{
    return <section className="home">
        <NavBar/>
        <Footer/>
    </section>
}