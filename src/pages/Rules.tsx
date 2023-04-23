import { Logo } from "../components/logo"

export const Rules:React.FC = () =>{
    return <section className="rules">
        <div className="rules__logo">
            <Logo variant="default"/>
        </div>
        <h1 className="rules__title">
        Правила користування сервісом <br/> StudLab
        </h1>
    </section>
}