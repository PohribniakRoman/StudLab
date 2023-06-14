import { Link, useNavigate } from "react-router-dom";
import { DropMenu } from "./DropMenu";
import { FormEvent, useEffect, useState } from "react";
import { ProtectedRouter } from "../services/protectrdRouter";
import Button from "./ui-components/Button";
import { useSelector } from "react-redux";
import { decode } from "js-base64";
import { ENDPOINTS } from "../services/ENDPOINTS";

export const UserBar: React.FC = () => {
  const [students,loadStudents] = useState<any[]>([]);
  const [shownData,loadShown] = useState(students);
  const navigate = useNavigate();
  useEffect(()=>{(async ()=>{
      const resp = await ( await fetch(ENDPOINTS.getStudents,{...ENDPOINTS.params})).json();
      if(resp){
        const studentStr = resp.map((e:any)=>e.firstName+" "+e.lastName);
        loadStudents(studentStr)
        loadShown(studentStr)
      }
    })()},[])
    
    const findMatches = (event:any) => {
      loadShown(students.filter((student:string)=>student.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())))
    }
  return (
    <section className="userbar">
      <div className="userbar__search">
        <input
          onInput={findMatches}
          type="text"
          className="userbar__search--input"
          placeholder="Що ви шукаєте?"
        />
        <ul className="userbar__search--helper">
          {shownData.map((e:any)=>{
            return <li key={e} className="userbar__search--helper-item" onClick={()=>navigate(`/profile/${e.split(" ").join("-")}`)}>{e}</li>
          })}
        </ul>
      </div>
      <ProtectedRouter
        children={<Menu />}
        failed={
          <Link to="/auth">
            <Button variant="field" title="Увійти" />
          </Link>
        }
      />
    </section>
  );
};

const Menu = () => {
  const [isMenuOpened, setMenuOpened] = useState(false);
  const profile = useSelector((state: any) => state.client);
  let url:any = "";
  if(profile.photoBytes !== null && profile.photoBytes){
    url = decode(profile.photoBytes);
    url = url.split(",");
    url.shift();
    url.join(",")
    url = "data:image;base64,"+url;
  }
  return (
    <div className="userbar__container">
      <div className="userbar__icon">
        <div className="userbar__icon--bell notified"></div>
      </div>
      <div className="userbar__icon">
        <div className="userbar__icon--comment"></div>
      </div>
      <div
        className="userbar__avatar"
        onClick={() => setMenuOpened(!isMenuOpened)}
      >
        <div className="userbar__avatar--img" style={{backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundImage:"url(https://cdn-icons-png.flaticon.com/256/3135/3135715.png)"}}>
          {profile.photoBytes !== null ? (
            <img
              src={url}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          ) : (
            ""
          )}
        </div>
        <div className="userbar__avatar--icon">
          <div className="userbar__avatar--icon-more"></div>
        </div>
      </div>
      <DropMenu isActive={isMenuOpened} />
    </div>
  );
};
