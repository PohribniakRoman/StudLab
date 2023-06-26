import { useEffect, useState } from "react"
import { Footer } from "../components/Footer"
import { NavBar } from "../components/menu/NavBar"
import { UserBar } from "../components/UserBar"
import { ENDPOINTS } from "../services/ENDPOINTS"
import { useParams } from "react-router-dom"
import { PhotoInput } from "../components/ui-components/PhotoInput"
import { decode } from "js-base64"
import { Documents } from "../components/widgets/Documents"

export const PublicPorofile:React.FC = ()=>{
    const [profile,loadProfile] = useState<any>({});
    const {username} = useParams();
    
    useEffect(()=>{(async()=>{
        const resp = await(await fetch(ENDPOINTS.getStudentByName,{method:"POST",body:JSON.stringify({firstName:username?.split("-")[0],lastName:username?.split("-")[1]}),...ENDPOINTS.params})).json();
        if(typeof resp[0] !== "string"){
            loadProfile(resp[0]);
        }
    })()},[username])

    if(!profile.id){
        return  <div className="wrapper">
            <div className="spinner"/>
        </div>    
    }
    return <section className="page">
      <NavBar />
      <div className="page__container">
      <UserBar />
      <section className="profile">
        <h1 className="profile__title">Профіль</h1>
        <div className="profile__container">
            {profile.photoBytes === null?
            <PhotoInput withLabel={false} withLoad={false} source={"https://cdn-icons-png.flaticon.com/256/3135/3135715.png"}/>:
            <PhotoInput withLabel={false} withLoad={false} source={decode(profile.photoBytes)}/>}
            <div className="profile__data">
                <h3 className="profile__name" data-course={`${profile.course} курс`}>{profile.firstName+" "+profile.lastName}</h3>
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
    <Documents isPublic={true} files={[profile.certificates,profile.resumes]}/>
      </div>
      <Footer />
    </section>
}