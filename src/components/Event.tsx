import { decode } from "js-base64";
import { ProtectedRouter } from "../services/protectrdRouter";
import { useDispatch } from "react-redux";
import Button from "./ui-components/Button";


export const Event: React.FC<any> = ({ data,disabled }: any) => {
  return (
    <div className="event">
      <div className="event__cover">
        <img
          src={"data:image;base64," + decode(data.eventPhoto)}
          style={{
            minWidth: "320px",
            minHeight: "320px",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "15px",
          }}
        />
      </div>
      <div className="event__content">
        <h1 className="event__title">{data.nameOfEvent}</h1>
        <p className="event__description">{data.description}</p>
        <ProtectedRouter children={<Controls data={data} disabled={disabled} />} />
      </div>
    </div>
  );
};

export const Controls = ({ data,disabled }: any) => {
  const dispatch = useDispatch();
  return (
    <>
    <div className="event__additional">
          Місце: <b> {data.venue}</b>
        </div>
        <div className="event__additional">
          Дата: <b>{new Date(data.date).toDateString()}</b>
        </div>
    <div className="event__controls">
      <div className="event__discuss"></div>
      {disabled?<Button title="Відмовитись від події" onClick={() => {
          dispatch({type:"REMOVE_ACTIVITY",payload:data.id})
          }}/>:
      <div
        className="event__join"
        onClick={() => {
          dispatch({type:"ADD_ACTIVITY",payload:data})
          }}
          >
        Хочу відвідати!
        <div className="event__join--svg"></div>
      </div>}
    </div>
    </>
  );
};
