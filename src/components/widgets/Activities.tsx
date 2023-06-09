import { useEffect, useState } from "react";
import { ActivitiesEvent } from "./ActivitiesEvent";
import { useSelector } from "react-redux";


export const Activities: React.FC = () => {
  const activities = useSelector((state:any)=>state.userActivities.myActivities)
  
  return (
    <section className="activities">
      <h1 className="activities__title">Мої активності</h1>
      <h3 className="activities__date">Сьогодні</h3>
      <div className="activities__container">
        {activities.map((activity:any)=>{
            return <ActivitiesEvent key={activity.id} data={activity}/>
        })}
      </div>
    </section>
  );
};
