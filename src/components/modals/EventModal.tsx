import { useDispatch, useSelector } from "react-redux"
import Button from "../ui-components/Button"
import { useEffect, useRef, useState } from "react"
import { decode } from "js-base64"
import { Comment } from "./Comment"
import { ReportModal } from "./ReportModal"
import {RxCross1} from "react-icons/rx";
import { ENDPOINTS } from "../../services/ENDPOINTS"
import Cookies from 'universal-cookie';
import { useActivities } from "../../services/hooks/useActivities"
import { Loader } from "../Loader"
const cookies = new Cookies();


export const EventModal = ({withLoad = true}) => {
    const dispatch = useDispatch();
    const modalRef = useRef<any>();
    const events = useSelector((state:any)=>state.userActivities)
    const student = useSelector((state:any)=>state.client)
    const activities = useActivities();
    const data = events.current;
    const [comments,loadComments] = useState<any>(null);
    const [loadedData,updateData] = useState(data);
    const [isReportOpened,setReportOpen] = useState(false);

    useEffect(()=>{
        if(withLoad){
            activities.loadActivities();
        }
    },[])

    useEffect(()=>{
        (async ()=>{
            if(data.id){
                const res = await (await fetch(ENDPOINTS.getComments+`?eventId=${data.id}`,ENDPOINTS.params)).json();
                loadComments([...res]);
            }
        })()
        updateData({...data})
    },[data])

    
    if(!loadedData.hasOwnProperty("id")){
        document.body.style.overflow = "visible"
        return <></>;
    }

    document.body.style.overflow = "hidden"
    const isInMyEvents = events.myActivities.filter((myEvent:any)=>myEvent.id === loadedData.id).length > 0;

    return <section className="modal" ref={modalRef} onClick={(e)=>{e.target === modalRef.current && dispatch({type:"LOAD_CURRENT",payload:{}});console.log(e.target);
    }}>
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
            <h1 className="modal__form--title">Коментарі</h1>
            <div className="modal__comments--wrapper">
                {comments === null?<Loader/>
                    :comments.map((e:any)=>{
                    return  <Comment key={e.id} reportToggle={setReportOpen} data={e}/>
                })}
            </div>
            <form className="modal__form" onSubmit={(event:any)=>{
                event.preventDefault()
                if(event.target.text.value.trim().length > 1){
                    fetch(ENDPOINTS.addComment+`?eventId=${data.id}`,{method:"POST",...ENDPOINTS.params,headers:{...ENDPOINTS.params.headers,"Authorization":`Bearer ${cookies.get("token")}`},body:JSON.stringify({commentText:event.target.text.value})})
                    loadComments((prev:any)=>{
                        return [...prev,{student,commentText:event.target.text.value}]
                    })
                    setTimeout(()=>{
                        event.target.text.value = "";
                    },10)}}}>
                <Button type="submit" style={{borderRadius:"20px",width:"150px"}} variant="field" title="Надіслати"/>
                <textarea name="text" className="modal__textarea" maxLength={255} required/>
            </form>
        </section>
    </section>
}