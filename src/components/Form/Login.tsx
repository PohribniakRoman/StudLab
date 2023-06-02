import { useNavigate } from "react-router-dom";
import { ENDPOINTS } from "../../services/ENDPOINTS";
import { useNotification } from "../../services/hooks/useNotification";
import AuthFormInput from "../ui-components/AuthFormInput"
import Button from "../ui-components/Button"
import { Subtitle } from "../ui-components/Subtitle"
import React,{useRef} from "react";

type LoginlInterface = {
    login:string,
    password:string
}

export const Login:React.FC<any> = ({animation,updateAnimation})=>{
    const nodeName = "login";    
    const isAway = animation.active === nodeName || animation.animateOut === nodeName;
    const slideIn = animation.active===nodeName;
    const slideOut = animation.animateOut===nodeName;    
    const formData = useRef<LoginlInterface>({login:"",password:""});
    const notification = useNotification();
    const navigate = useNavigate()

    return <form className={`auth__form--container ${isAway?"":"away"} ${slideOut?"slide-out":""} ${slideIn?"slide-in":""}`} onSubmit={(e)=>{
        e.preventDefault();
        if(formData.current.login.trim() && formData.current.password.trim()){
            notification.createNotification("Wellcome back","success")
            navigate("/");
            fetch(ENDPOINTS.login,{method:"POST",body:JSON.stringify(formData.current), ...ENDPOINTS.params})
        }
    }}>
            <div className="auth__form--wrapper-email">
            <div className="auth__form--input-container-login">
                <Subtitle className="auth__form--input-title" title="Пошта"/>
                <AuthFormInput xs="auth__form--input-login" name="login" collector={formData} placeholder="Ввести пошту"/>
            </div>
            <div className="auth__form--input-container-login">
                <Subtitle className="auth__form--input-title" title="Пароль"/>
                <AuthFormInput xs="auth__form--input-login" name="password" collector={formData} placeholder="Ввести пароль"/>
            </div>
            <div className="auth__form--submit-container">
                <Button type="submit" variant="field" title="Увійти"/>
            </div>
        </div>
    </form>
}