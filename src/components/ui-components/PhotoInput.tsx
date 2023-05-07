import {useState} from "react";
import { Subtitle } from "./Subtitle";

export const PhotoInput:React.FC<any> = ({formData,withLabel = true,defultAvatar = ""}) => {
    const [avatar,setAvatar] = useState<string>(defultAvatar);
    return(
        <label className="auth__form--avatar-wrapper">
            <input type="file" className="auth__form--file-input" accept=".jpg, .jpeg, .png" onChange={(event)=>{
                const file = event.target?.files?.item(0);
                if(file!==null && file){
                    const reader = new FileReader();
                    reader.onloadend = () =>{
                        formData.current.avatar = reader.result;
                        setAvatar(reader.result as string)
                    }
                    reader.readAsDataURL(file);
                }
            }}/>
            <div className="auth__form--avatar" style={{backgroundImage:`url("${avatar}")`}}></div>
            {withLabel?<Subtitle className="auth__form--input-title" title="Фото"/>:""}
        </label>
    )
}