import { useEffect, useState } from "react";
import { ENDPOINTS } from "../../services/ENDPOINTS";
import { useNavigate } from "react-router-dom";

export const Search:React.FC = () => {
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
      return <div className="userbar__search">
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
} 