import { decode } from "js-base64";
import {BsFillFlagFill} from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Comment = ({reportToggle,data}:any) =>{
    const dispatch= useDispatch();
    const navigate = useNavigate();
    let url:any = "";
    if(data.student.photoBytes !== null && data.student.photoBytes){
      url = decode(data.student.photoBytes);
      url = url.split(",");
      url.shift();
      url.join(",")
      url = "data:image;base64,"+url;
    }
    const relocate = () =>{
        dispatch({type:"LOAD_CURRENT",payload:{}});
        navigate(`/profile/${data.student.firstName+"-"+data.student.lastName}`);
    }
        return <div className="modal__comments-item">
        <img className="modal__comments-avatar"  onClick={relocate} src={!url?"https://cdn-icons-png.flaticon.com/256/3135/3135715.png":url}/>
        <div className="modal__comments-content">
            <h1 className="modal__comments-title" onClick={relocate}>{data.student.firstName+" "+data.student.lastName}</h1>
            <p className="modal__comments-description">
                {data.commentText}
            </p>
            <div className="modal__comments-report" onClick={()=>reportToggle(true)}><BsFillFlagFill/></div>
        </div>
</div>
}