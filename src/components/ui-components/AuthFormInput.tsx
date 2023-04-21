import React, {ReactElement} from 'react';


const AuthFormInput:React.FC<any> = ({placeholder,className}):ReactElement => {
    return (<input className={`form-input ${className}`} placeholder={placeholder} required/>);
};

export default AuthFormInput;