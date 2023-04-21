import AuthFormInput from "../ui-components/AuthFormInput"
import Button from "../ui-components/Button"

export const Mail:React.FC<any> = ({isAway,slideOut,slideIn})=>{
    return <div className={`auth__form--container ${isAway?"away":""} ${slideOut?"slide-out":""} ${slideIn?"slide-in":""}`}>
        <div className="auth__form--wrapper-email">
            <h1 className="auth__form--header"> <b>Для реєстрації введіть</b> <br /> Ваш студентський email</h1>
            <div className="auth__form--input-container">
                <AuthFormInput className="auth__form--input-email" placeholder="Ввести пошту"/>
            </div>
            <div className="auth__form--submit-container">
                <Button type="submit" variant="field" title="Перевірити"/>
            </div>
        </div>
    </div>
}