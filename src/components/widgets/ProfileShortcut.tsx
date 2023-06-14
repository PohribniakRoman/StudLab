import React from "react"
import { PhotoInput } from "../ui-components/PhotoInput"
import { useDispatch, useSelector } from "react-redux"
import { decode } from "js-base64";
import { AiFillEdit } from "react-icons/ai";

export const ProfileShortcut:React.FC = () =>{
    const profile = useSelector((state:any)=>state.client);
    const dispatch = useDispatch();
    let url:any = "";
    if(profile.photoBytes !== null && profile.photoBytes){
      url = decode(profile.photoBytes);
      url = url.split(",");
      url.shift();
      url.join(",")
      url = "data:image;base64,"+url;
    }
    return <section className="profile">
        <h1 className="profile__title">Профіль</h1>
        <div className="profile__container">
            {profile.photoBytes === null?
            <PhotoInput withLabel={false} withLoad={false} defultAvatar={"https://cdn-icons-png.flaticon.com/256/3135/3135715.png"}/>:
            <PhotoInput withLabel={false} withLoad={false} isImg={true} source={url}/>}
            <div className="profile__data">
                <h3 className="profile__name" data-course={"1 курс"}>{profile.firstName+" "+profile.lastName}</h3>
                <p className="profile__entry">
                    <b>Місто:</b>
                    Київ
                </p>
                <p className="profile__entry">
                    <b>Факультет:</b>
                    {profile.major}
                </p>
                <p className="profile__entry">
                    <b>Місце навчання:</b>
                    <i>Київський національний університет</i>
                </p>
            </div>
            <div className="profile__edit" onClick={()=>{
                dispatch({type:"SET_EDIT",payload:true})
            }}><AiFillEdit/></div>
        </div>
    </section>
}