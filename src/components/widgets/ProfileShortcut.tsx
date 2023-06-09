import React from "react"
import { PhotoInput } from "../ui-components/PhotoInput"
import { useSelector } from "react-redux"
import { decode } from "js-base64";

export const ProfileShortcut:React.FC = () =>{
    const profile = useSelector((state:any)=>state.client);
    let source ="https://cdn-icons-png.flaticon.com/256/3135/3135715.png";
    if(profile.photoBytes !== null){
        source=decode(profile.photoBytes);
    }
    return <section className="profile">
        <h1 className="profile__title">Профіль</h1>
        <div className="profile__container">
            {profile.photoBytes === null?
            <PhotoInput withLabel={false} withLoad={false} defultAvatar={source}/>:
            <PhotoInput withLabel={false} withLoad={false} isImg={true} source={source}/>}
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
        </div>
    </section>
}