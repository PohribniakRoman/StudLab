import { decode } from "js-base64";
import { useDispatch, useSelector } from "react-redux";
import Button from "./ui-components/Button";
import { useEffect, useState } from "react";


export const Event: React.FC<any> = ({ data,disabled }: any) => {
  const isAuthorized = useSelector((state:any)=>state.client);
  const [authorized,setAuthorized] = useState<boolean>(false);
  useEffect(()=>{
    setAuthorized(isAuthorized.email?true:false)
  },[isAuthorized])
  
  return (
    <div className="event">
      <div className="event__cover--wrapper">
        <img src={"data:image;base64," + decode(data.eventPhoto)} className="event__cover"/>
      </div>
      <div className="event__content">
        <h1 className="event__title">{data.nameOfEvent}</h1>
        <p className="event__description">{data.description}</p>
        {authorized?<Controls data={data} disabled={disabled} />:""}
      </div>
    </div>
  );
};

export const Controls = ({ data,disabled }: any) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="event__additional">Місце: <b> {data.venue}</b></div>
      <div className="event__additional">Дата: <b>{new Date(data.date).toDateString()}</b></div>
      <div className="event__controls">
        <div className="event__discuss" onClick={()=>dispatch({type:"LOAD_CURRENT",payload:data})}></div>
        {disabled
          ?<Button title="Відмовитись від події" onClick={() =>dispatch({type:"REMOVE_ACTIVITY",payload:data.id})}/>
          :<div className="event__join" onClick={() =>dispatch({type:"ADD_ACTIVITY",payload:data})}>Хочу відвідати! <div className="event__join--svg"></div>
        </div>}
      </div>
    </>
  );
};
