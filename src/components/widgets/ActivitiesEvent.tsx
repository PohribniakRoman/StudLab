import { decode } from "js-base64";
import { useDispatch } from "react-redux"

export const ActivitiesEvent:React.FC<{data:any}> = ({data}:any) =>{
    const dispatch = useDispatch();
    return <div className="activities__event">
        <div className="activities__event--cover">
        <img
          src={"data:image;base64," + decode(data.eventPhoto)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "15px",
          }}
        />   
        </div>
        <div className="activities__event--content">
            <h1 className="activities__event--title">{data.nameOfEvent}</h1>
            <p className="activities__event--description">{data.description}</p>
            <div className="activities__event--additional">Місце: <b> {data.venue}</b></div>
            <div className="activities__event--additional">Час: <b>{new Date(data.date).toDateString()}</b></div>
            <div className="activities__event--controls">
                <div className="activities__event--discuss" onClick={()=>dispatch({type:"LOAD_CURRENT",payload:data})}></div>
                <div className="activities__event--delete" onClick={()=>{
                    dispatch({type:"REMOVE_ACTIVITY",payload:data.id})
                }}></div>
            </div>
        </div>
    </div>
}