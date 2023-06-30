import { decode } from "js-base64";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import {BsFillFlagFill} from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Comment = ({reportToggle,data}:any) =>{
    const dispatch= useDispatch();
    const navigate = useNavigate();
    const [liked,setLiked] = useState<boolean>(false);
    const relocate = () =>{
        dispatch({type:"LOAD_CURRENT",payload:{}});
        navigate(`/profile/${data.student.firstName+"-"+data.student.lastName}`);
    }
        return <div className="modal__comments-item">
        <img className="modal__comments-avatar"  onClick={relocate} src={!data.student.photoBytes?"https://cdn-icons-png.flaticon.com/256/3135/3135715.png":decode(data.student.photoBytes)}/>
        <div className="modal__comments-content">
            <h1 className="modal__comments-title" onClick={relocate}>{data.student.firstName+" "+data.student.lastName}</h1>
            <p className="modal__comments-description">
                {data.commentText}
            </p>
            <div className="modal__comments-report" onClick={()=>reportToggle(true)}><BsFillFlagFill/></div>
            <div className={`modal__comments-like ${liked?"liked":""}`} onClick={()=>setLiked(!liked)}>{liked?<AiFillHeart/>:<AiOutlineHeart/>}</div>
        </div>
</div>
}