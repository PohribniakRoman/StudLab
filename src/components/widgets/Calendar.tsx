import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const month = "січень, лютий, березень, квітень, травень, червень, липень, серпень, вересень, жовтень, листопад, грудень".split(", ");

const days = ["Пн","Вт","Ср","Чт","Пт","Сб","Нд"];

type CalendarInterface = {
    label:string,
    date:string,
    current:boolean,
    badge:number,
    evented:boolean
}

export const Calendar:React.FC = () => {
    const activities = useSelector((state:any)=>state.userActivities.myActivities)
    const dispatch = useDispatch();
    const [calendarData,setCalendar] = useState<CalendarInterface[]>([]);
    useEffect(()=>{
        const defultState:CalendarInterface[] = [];
        for (let i = 0; i < days.length; i++) {
            const time = new Date(new Date().getTime()+i*1000*24*3600);
            const badge = time.getDate();
            const date = time.toDateString();
            const isEvented = activities.filter((el:any)=>new Date(el.date).toDateString() === date).length > 0;
            defultState.push({
                label:days[new Date().getDay()-1+i > 6?new Date().getDay()-8+i: new Date().getDay()-1+i],
                date,
                badge,
                current:i===0,
                evented:isEvented,
            })
        } 
        setCalendar([...defultState]);
    },[activities])
        
    const changeDate = (newDate:string) =>{
        dispatch({type:"LOAD_DATE",payload:newDate})
    } 

    const slideRightCalendar = (ind:number) => {
        setCalendar(prev=>{
            prev[ind].current = false;
            prev[ind+1>6?0:ind+1].current = true;
            changeDate(prev[ind+1>6?0:ind+1].date);
            return [...prev];
        })
    }
    
    const slideLeftCalendar = (ind:number) => {
        setCalendar(prev=>{
            prev[ind].current = false;
            prev[ind-1<0?6:ind-1].current = true;
            changeDate(prev[ind-1<0?6:ind-1].date);
            return [...prev];
        })
    }
    
    if(!activities.length){
        return <>loading...</>
    }

    return <section className="calendar">
        <div className="calendar__arrow calendar__arrow--left" onClick={()=>{
            slideLeftCalendar(calendarData.findIndex(el=>el.current));
        }}></div>
        <h3 className="calendar__month">{month[new Date().getMonth()]}</h3>
            <div className="calendar__day--container">
                {calendarData.map((el,ind)=>{
                    return <div key={el.label} className={`calendar__day ${el.current?"today":""}`} onClick={()=>{
                        setCalendar(prev=>{
                            prev[calendarData.findIndex(el=>el.current)].current = false;
                            prev[ind].current = true;
                            changeDate(prev[ind].date);
                            return [...prev];
                        })
                    }}>
                        <div className={`calendar__label--date ${el.evented?"evented":""}`}>{el.badge}</div>
                        <h5 className="calendar__label--name">
                            {el.label}
                        </h5>
                    </div>
                })}
            </div>
        <div className="calendar__arrow calendar__arrow--right" onClick={()=>{
            slideRightCalendar(calendarData.findIndex(el=>el.current));
        }}></div>
    </section>
}