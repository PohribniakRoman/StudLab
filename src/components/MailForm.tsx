import AuthFormInput from "./ui-components/AuthFormInput"
import Button from "./ui-components/Button"

export const MailForm:React.FC = ()=>{
    return <div className="auth__form--wrapper">
        <h1 className="auth__form--header"> <b>Для реєстрації введіть</b> <br /> Ваш студентський email</h1>
        <div className="auth__form--input-container" style={{width:"65%"}}>
            <AuthFormInput style={{width:"100%",marginBottom:"50px",marginTop:"50px"}} placeholder="Україні"/>
        </div>
        <div className="auth__form--submit-container" style={{justifyContent:"center"}}>
            <Button type="submit" title="Готово!"/>
        </div>
    </div>
}