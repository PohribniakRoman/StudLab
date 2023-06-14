import { useDispatch, useSelector } from "react-redux"
import Button from "./ui-components/Button"
import { useEffect, useRef, useState } from "react"
import { decode } from "js-base64"
import { Comment } from "./Comment"
import { ReportModal } from "./ReportModal"
import {RxCross1} from "react-icons/rx";


export const EventModal = () => {
    const events = useSelector((state:any)=>state.userActivities)
    const data = events.current;
    const [isReportOpened,setReportOpen] = useState(false);
    const dispatch = useDispatch();
    const [loadedData,updateData] = useState(data);
    const modalRef = useRef<any>();
    useEffect(()=>{
        updateData({...data})
    },[data])
    
    const isInMyEvents = events.myActivities.filter((myEvent:any)=>myEvent.id === loadedData.id).length > 0;
    if(!loadedData.hasOwnProperty("id")){
        return <></>;
    }

    return <section className="modal opened" ref={modalRef} onClick={(e)=>{e.target === modalRef.current && dispatch({type:"LOAD_CURRENT",payload:{}})}}>
        <ReportModal data={loadedData} isOpened={isReportOpened} setOpen={setReportOpen}/>
        <section className="modal__event">
            <img className="modal__event-cover" src={"data:image;base64," + decode(loadedData.eventPhoto)}/>
            <div className="modal__event-content">
                <h1 className="modal__event-title">{loadedData.nameOfEvent}</h1>
                <p className="modal__event-description">{loadedData.description}</p>
                <div className="event__additional">Місце: <b> {loadedData.venue}</b></div>
                <div className="event__additional">Дата: <b>{new Date(loadedData.date).toDateString()}</b></div>
                {isInMyEvents
                ?<Button style={{margin:"20px 0",width:"150px"}} onClick={()=>dispatch({type:"REMOVE_ACTIVITY",payload:loadedData.id})} title="Відмовитись"/>
                :<Button style={{margin:"20px 0",width:"150px"}} onClick={() =>dispatch({type:"ADD_ACTIVITY",payload:loadedData})} title="Відвідати!" variant="field"/>}
            </div>
            <div className="modal__edit-close" onClick={()=>dispatch({type:"LOAD_CURRENT",payload:{}})}><RxCross1/></div>
            
        </section>
        <section className="modal__comments">
              <Comment reportToggle={setReportOpen}/>
              <Comment reportToggle={setReportOpen}/>
              <Comment reportToggle={setReportOpen}/>
              <Comment reportToggle={setReportOpen}/>
              <Comment reportToggle={setReportOpen}/>
              <Comment reportToggle={setReportOpen}/>
        </section>
    </section>
}