import React, { useEffect, useState } from "react";

const month = "січень, лютий, березень, квітень, травень, червень, липень, серпень, вересень, жовтень, листопад, грудень".split(", ");

const days = ["Пн","Вт","Ср","Чт","Пт","Сб","Нд"];

type CalendarInterface = {
    label:string,
    date:number,
    current:boolean,
    evented:boolean
}

export const Calendar:React.FC = () => {

    const defultState:CalendarInterface[] = [];
    for (let i = 0; i < days.length; i++) {
        defultState.push({
            label:days[new Date().getDay()-1+i > 6?new Date().getDay()-8+i: new Date().getDay()-1+i],
            date:new Date().getDate()+i,
            current:i===0,
            evented:Math.random()*100>70
        })
    } 

    const [calendarData,setCalendar] = useState<CalendarInterface[]>(defultState);

        
    const slideRightCalendar = (ind:number) => {
        setCalendar(prev=>{
            prev[ind].current = false;
            prev[ind+1>6?0:ind+1].current = true;
            return [...prev];
        })
    }
    
    const slideLeftCalendar = (ind:number) => {
        setCalendar(prev=>{
            prev[ind].current = false;
            prev[ind-1<0?6:ind-1].current = true;
            return [...prev];
        })
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
                            return [...prev];
                        })
                    }}>
                        <div className={`calendar__label--date ${el.evented?"evented":""}`}>{el.date}</div>
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