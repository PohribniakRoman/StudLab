import AuthFormInput from "../ui-components/AuthFormInput"
import Button from "../ui-components/Button"

export const Code:React.FC<any> = ({animation,updateAnimation})=>{
    const nodeName = "code";
    const isAway = animation.active === nodeName || animation.animateOut === nodeName;
    const slideIn = animation.active===nodeName;
    const slideOut = animation.animateOut===nodeName;
    return<form className={`auth__form--container ${isAway?"":"away"} ${slideOut?"slide-out":""} ${slideIn?"slide-in":""}`}>
        <div className="auth__form--wrapper-email">
            <h1 className="auth__form--header"> <b>На ваш email</b> <br /> було надіслано код для перевірки</h1>
            <div className="auth__form--input-container">
                <AuthFormInput className="auth__form--input-email" placeholder="Ввести код"/>
            </div>
            <div className="auth__form--submit-container">
                <Button type="submit" variant="field" title="Далі" onClick={()=>{
                    updateAnimation({animateOut:animation.active,active:"register"})
                }}/>
            </div>
        </div>
    </form>
}