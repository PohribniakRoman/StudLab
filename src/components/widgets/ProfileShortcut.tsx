import React from "react"
import { PhotoInput } from "../ui-components/PhotoInput"

export const ProfileShortcut:React.FC = () =>{
    return <section className="profile">
        <h1 className="profile__title">Профіль</h1>
        <div className="profile__container">
            <PhotoInput withLabel={false} withLoad={false} defultAvatar="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/1200px-President_Barack_Obama.jpg"/>
            <div className="profile__data">
                <h3 className="profile__name" data-course={"1 курс"}>Богдан Дубчак</h3>
                <p className="profile__entry">
                    <b>Місто:</b>
                    Київ
                </p>
                <p className="profile__entry">
                    <b>Факультет:</b>
                    Прикладна математика
                </p>
                <p className="profile__entry">
                    <b>Місце навчання:</b>
                    <i>Київський національний університет</i>
                </p>
            </div>
        </div>
    </section>
}