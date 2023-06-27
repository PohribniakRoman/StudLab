import { useDispatch, useSelector } from "react-redux"
import { useRef,useState,useEffect } from "react";
import { PhotoInput } from "../ui-components/PhotoInput";
import Button from "../ui-components/Button";
import AuthFormInput from "../ui-components/AuthFormInput";
import { Subtitle } from "../ui-components/Subtitle";
import {RxCross1} from "react-icons/rx";
import { ENDPOINTS } from "../../services/ENDPOINTS";
import { useNotification } from "../../services/hooks/useNotification";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const EditModal:React.FC = ()=>{
    const profile = useSelector((state:any)=>state.client);
    const isEditing = profile.isEditing;
    const [isModalUpdated,setUpdated] = useState(false);
    const modalRef = useRef<any>();
    const dispatch = useDispatch();
    const dataCollector = useRef({});
    useEffect(()=>{setUpdated(isEditing)},[isEditing]);
    const notify = useNotification();
    document.body.style.overflow = "hidden"

    if(!isModalUpdated){
        document.body.style.overflow = "visible"
        return <></>
    }

    return <section className="modal" ref={modalRef} onClick={(e)=>{e.target === modalRef.current && dispatch({type:"SET_EDIT",payload:false})}}>
        <form className="modal__edit" onSubmit={(event)=>{
            event.preventDefault();
            fetch(ENDPOINTS.editProfile,{method:"PUT",...ENDPOINTS.params,headers:{...ENDPOINTS.params.headers,"Authorization":`Bearer ${cookies.get("token")}`},body:JSON.stringify({...dataCollector.current})})
            notify.createNotification("Зміни буде відображено через декілька хвилин...")
            dispatch({type:"SET_EDIT",payload:false});
        }}>
            <PhotoInput withLabel={false} formData={dataCollector}/>
            <Subtitle className="auth__form--input-title" title="Ім'я"/>
            <AuthFormInput initialdata={profile.firstName} style={{width:"50%"}} placeholder="Слава Україні" name="firstName" collector={dataCollector}/>
            <Subtitle className="auth__form--input-title" title="Прізвище"/>
            <AuthFormInput initialdata={profile.lastName} style={{width:"50%"}} placeholder="Слава Україні" name="lastName" collector={dataCollector}/>
            <Button style={{margin:"20px auto"}} type="submit" title="Підтвердити зміни" variant="field"/>
            <div className="modal__edit-close" onClick={()=>dispatch({type:"SET_EDIT",payload:false})}><RxCross1/></div>
        </form>
    </section>
}