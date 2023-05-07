import React from "react"
import { PhotoInput } from "../ui-components/PhotoInput"

export const Profie:React.FC = () =>{
    return <section className="profile">
        <h1 className="profile__title">Профіль</h1>
        <div className="profile__container">
            <PhotoInput withLabel={false} defultAvatar="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/1200px-President_Barack_Obama.jpg"/>
        </div>
    </section>
}