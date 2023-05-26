import { ENDPOINTS } from "../../services/ENDPOINTS";
import { useNotification } from "../../services/hooks/useNotification";
import AuthFormInput from "../ui-components/AuthFormInput"
import Button from "../ui-components/Button"
import { useRef } from "react";

type EmailInterface = {
    email:string,
}

export const Mail:React.FC<any> = ({animation,updateAnimation})=>{
    const nodeName = "mail";
    const isAway = animation.active === nodeName || animation.animateOut === nodeName;
    const slideIn = animation.active===nodeName;
    const slideOut = animation.animateOut===nodeName;
    const formData = useRef<EmailInterface>({email:""});
    const notification = useNotification();
    
    return <form className={`auth__form--container ${isAway?"":"away"} ${slideOut?"slide-out":""} ${slideIn?"slide-in":""}`} onSubmit={(e)=>{
        e.preventDefault();
        if(formData.current.email.trim()){
            updateAnimation({animateOut:animation.active,active:"code"})
            notification.createNotification("На ваш емейл надіслано лист з кодом","info")
            fetch(ENDPOINTS.join,{method:"POST",body:JSON.stringify(formData.current), ...ENDPOINTS.params})
        }
    }}>
        <div className="auth__form--wrapper-email">
            <h1 className="auth__form--header"> <b>Для реєстрації введіть</b> <br /> Ваш студентський email</h1>
            <div className="auth__form--input-container">
                <AuthFormInput xs="auth__form--input-email" type="email" name="email" collector={formData} placeholder="Ввести пошту"/>
            </div>
            <div className="auth__form--submit-container">
                <Button type="submit" variant="field" title="Перевірити" onClick={()=>{
                }}/>
                </div>
        </div>
    </form>
}