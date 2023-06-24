import { ENDPOINTS } from "../../services/ENDPOINTS";
import { useNotification } from "../../services/hooks/useNotification";
import AuthFormInput from "../ui-components/AuthFormInput"
import Button from "../ui-components/Button"
import { useRef } from "react";

type EmailInterface = {
    email:string,
}

export const Mail:React.FC<any> = ({animation,updateAnimation,emailStore})=>{
    const nodeName = "mail";
    const isAway = animation.active === nodeName || animation.animateOut === nodeName;
    const slideIn = animation.active===nodeName;
    const slideOut = animation.animateOut===nodeName;
    const formData = useRef<EmailInterface>({email:""});
    const notification = useNotification();
    
    return <form className={`auth__form--container ${isAway?"":"away"} ${slideOut?"slide-out":""} ${slideIn?"slide-in":""}`} onSubmit={(e)=>{
        e.preventDefault();
        if(formData.current.email.trim()){
            (async ()=>{
                const isVerified = await (await fetch(ENDPOINTS.isVerified,{method:"POST",body:JSON.stringify(formData.current), ...ENDPOINTS.params})).json()
                emailStore(formData.current.email);
                if(isVerified.message === "Student is verified"){
                    updateAnimation({animateOut:animation.active,active:"register"})
                    notification.createNotification(isVerified.message,"success");
                }else{
                    const resp = await (await fetch(ENDPOINTS.join,{method:"POST",body:JSON.stringify(formData.current), ...ENDPOINTS.params})).json()
                    if(resp.message && !resp.hasOwnProperty("error")){
                        updateAnimation({animateOut:animation.active,active:"code"})
                        notification.createNotification(resp.message,"info");
                    }else{
                        notification.createNotification(resp.error,"error");
                    }
                }
            })()
        }
    }}>
        <div className="auth__form--wrapper-email">
            <h1 className="auth__form--header"> <b>Для реєстрації введіть</b> <br /> Ваш студентський email</h1>
            <div className="auth__form--input-container">
                <AuthFormInput xs="auth__form--input-email" type="email" name="email" collector={formData} placeholder="Ввести пошту"/>
            </div>
            <div className="auth__form--submit-container">
                <Button type="submit" variant="field" title="Перевірити"/>
            </div>
        </div>
    </form>
}