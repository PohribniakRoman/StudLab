import {BsFillFlagFill} from "react-icons/bs";

export const Comment = ({reportToggle}:any) =>{
    return <div className="modal__comments-item">
        <img className="modal__comments-avatar" src="https://cdn-icons-png.flaticon.com/256/3135/3135715.png"/>
        <div className="modal__comments-content">
            <h1 className="modal__comments-title">Lorem Ipsum.</h1>
            <p className="modal__comments-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia qui saepe exercitationem cupiditate dicta asperiores ab eius voluptates nesciunt enim.
            </p>
            <div className="modal__comments-report" onClick={()=>reportToggle(true)}><BsFillFlagFill/></div>
        </div>
</div>
}