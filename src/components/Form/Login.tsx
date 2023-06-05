import { useNavigate } from "react-router-dom";
import { ENDPOINTS } from "../../services/ENDPOINTS";
import { useNotification } from "../../services/hooks/useNotification";
import AuthFormInput from "../ui-components/AuthFormInput"
import Button from "../ui-components/Button"
import { Subtitle } from "../ui-components/Subtitle"
import React,{useRef} from "react";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

type LoginlInterface = {
    email:string,
    password:string
}

export const Login:React.FC<any> = ({animation,updateAnimation})=>{
    const nodeName = "login";    
    const isAway = animation.active === nodeName || animation.animateOut === nodeName;
    const slideIn = animation.active===nodeName;
    const slideOut = animation.animateOut===nodeName;    
    const formData = useRef<LoginlInterface>({email:"",password:""});
    const notification = useNotification();
    const navigate = useNavigate()

    return <form className={`auth__form--container ${isAway?"":"away"} ${slideOut?"slide-out":""} ${slideIn?"slide-in":""}`} onSubmit={async (e)=>{
        e.preventDefault();
        if(formData.current.email.trim() && formData.current.password.trim()){
            const resp = await(await fetch(ENDPOINTS.login,{method:"POST",body:JSON.stringify(formData.current), ...ENDPOINTS.params})).json();
            if(resp.token){
                notification.createNotification("Wellcome back","success")
                cookies.set("token",resp.token,{expires:new Date(new Date().getTime()+(1000*60*60*24*7))})
                navigate("/");
            }else{
                notification.createNotification(resp.message,"error")
            }
        }
    }}>
            <div className="auth__form--wrapper-email">
            <div className="auth__form--input-container-login">
                <Subtitle className="auth__form--input-title" title="Пошта"/>
                <AuthFormInput xs="auth__form--input-login" name="email" collector={formData} placeholder="Ввести пошту"/>
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