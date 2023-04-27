import { Footer } from "../components/Footer"
import { Logo } from "../components/logo"

export const Rules:React.FC = () =>{
    return <section className="rules">
        <div className="rules__logo">
            <Logo variant="default"/>
        </div>
        <h1 className="rules__title">
        Правила користування сервісом <br/> StudLab
        </h1>
        <section className="rules__description">
            <h1>1.Загальні положення</h1>
            <br/>
            <h1>1.1. Ці правила користування сервісом StudLab (далі - "Правила") встановлюють умови користування сервісом, які користувачі зобов'язані дотримуватися.
            <br/>1.2. Користуючись сервісом StudLab, користувач підтверджує свою згоду з цими Правилами.</h1>
            <br/>
            <h1>2.Обов'язки користувачів</h1>
            <br/>
        </section>
        <Footer/>
    </section>
}