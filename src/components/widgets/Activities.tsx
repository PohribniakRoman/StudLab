import { ActivitiesEvent } from "./ActivitiesEvent"

export const Activities:React.FC = () =>{
    fetch("",{method:"POST",
    mode: "cors",
    headers:{"Content-Type":"application/json"}})
    return <section className="activities">
        <h1 className="activities__title">
            Мої активності
        </h1>
        <h3 className="activities__date">Сьогодні</h3>
        <div className="activities__container">
            <ActivitiesEvent/>
            <ActivitiesEvent/>
        </div>
    </section>
}       