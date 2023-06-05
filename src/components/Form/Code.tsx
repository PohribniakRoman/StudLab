import { useRef } from "react";
import AuthFormInput from "../ui-components/AuthFormInput"
import Button from "../ui-components/Button"
import { ENDPOINTS } from "../../services/ENDPOINTS";
import { useNotification } from "../../services/hooks/useNotification";

type CodelInterface = {
    code:string,
    email:string
}

export const Code:React.FC<any> = ({animation,updateAnimation,email})=>{
    const nodeName = "code";
    const isAway = animation.active === nodeName || animation.animateOut === nodeName;
    const slideIn = animation.active===nodeName;
    const slideOut = animation.animateOut===nodeName;
    const formData = useRef<CodelInterface>({code:"",email});
    const notifications =useNotification();
    
    return<form className={`auth__form--container ${isAway?"":"away"} ${slideOut?"slide-out":""} ${slideIn?"slide-in":""}`} onSubmit={(e)=>{
        e.preventDefault();
        if(formData.current.code.trim()){
            formData.current.email = email;
            (async ()=>{
                const resp = await(await fetch(ENDPOINTS.verify,{method:"POST",body:JSON.stringify(formData.current), ...ENDPOINTS.params})).json();
                if(resp){
                    console.log(resp);
                    updateAnimation({animateOut:animation.active,active:"register"})
                    notifications.createNotification("Email підтверджено","success");
                }else{
                    notifications.createNotification("Не правильний код","error");
                }
            })()
        }
    }}>
        <div className="auth__form--wrapper-email">
            <h1 className="auth__form--header"> <b>На ваш email</b> <br /> було надіслано код для перевірки</h1>
            <div className="auth__form--input-container">
                <AuthFormInput xs="auth__form--input-email" name="code" collector={formData} placeholder="Ввести код"/>
            </div>
            <div className="auth__form--submit-container">
                <Button type="submit" variant="field" title="Далі"/>
            </div>
        </div>
    </form>
}