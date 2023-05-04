import React from "react";

const month = "січень, лютий, березень, квітень, травень, червень, липень, серпень, вересень, жовтень, листопад, грудень".split(", ");

const days = ["Пн","Вт","Ср","Чт","Пт","Сб","Нд"];

export const Calendar:React.FC = () => {

    const calendarData = [];
    for (let i = 0; i < days.length; i++) {
        calendarData.push({
            label:days[new Date().getDay()-1+i > 6?new Date().getDay()-8+i: new Date().getDay()-1+i],
            date:new Date().getDate()+i,
            current:i===0,
            evented:Math.random()*100>70
        })
    }
    return <section className="calendar">
        <div className="calendar__arrow calendar__arrow--left"></div>
        <h3 className="calendar__month">{month[new Date().getMonth()]}</h3>
            <div className="calendar__day--container">
                {calendarData.map(el=>{
                    return <div key={el.label} className={`calendar__day ${el.current?"today":""}`}>
                        <div className={`calendar__label--date ${el.evented?"evented":""}`}>{el.date}</div>
                        <h5 className="calendar__label--name">
                            {el.label}
                        </h5>
                    </div>
                })}
            </div>
        <div className="calendar__arrow calendar__arrow--right"></div>
    </section>
}