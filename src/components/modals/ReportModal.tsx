import { useRef } from "react"
import Button from "../ui-components/Button";

export const ReportModal = ({data,isOpened,setOpen}:any) =>{
    const reportRef = useRef<any>();

    if(!isOpened)return(<></>)
    return <section className="report" ref={reportRef} onClick={(e)=>{
        if(e.target === reportRef.current){setOpen(false)}
    }}>
        <form className="report__content">
            <h1>Оберіть причину:</h1>
            <label className="report__content-select">
                <input type="radio" name="report"/>
                <p>Контент 18+</p>
            </label>
            <label className="report__content-select">
                <input type="radio" name="report"/>
                <p>Образливі висловлення</p>
            </label>
            <label className="report__content-select">
                <input type="radio" name="report"/>
                <p>Приватні данні</p>
            </label>
            <label className="report__content-select">
                <input type="radio" name="report"/>
                <p>Пропоганда тероризму</p>
            </label>
            <label className="report__content-select">
                <input type="radio" name="report"/>
                <p>Реклама</p>
            </label>
            <label className="report__content-select">
                <input type="radio" name="report"/>
                <p>Спам</p>
            </label>
            <div className="report__content-controls">
                <Button title="Назад" onClick={()=>{setOpen(false)}}/>
                <Button type="submit" style={{width:"150px",height:"40px",borderRadius:"20px"}} onClick={()=>{setOpen(false)}} variant="field" title="Відправити" />
            </div>
        </form>
    </section>
}