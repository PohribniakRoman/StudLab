import { decode } from "js-base64"
import { useEffect, useRef } from "react";

export const Event:React.FC<any> = ({data}:any) => {
    const cover = useRef<any>();
    console.log(data);
    
    useEffect(()=>{
        if(cover.current){
            cover.current.src="data:image/png;base64,"+decode(data.eventPhoto);
        }
    },[])
    return <div className="event">
        <div className="event__cover">
            <img  ref={cover} style={{width:"100%",height:"100%",borderRadius:"15px"}}/>
        </div>
        <div className="event__content">
            <h1 className="event__title">{data.nameOfEvent}</h1>
            <p className="event__description">{data.description}</p>
            <div className="event__additional">Місце: <b> {data.venue}</b></div>
            <div className="event__additional">Дата: <b>{data.date}</b></div>
            <div className="event__controls">
                <div className="event__discuss"></div>
                <div className="event__join">
                    Хочу відвідати!
                    <div className="event__join--svg"></div>
                </div>
            </div>
        </div>
    </div>
}