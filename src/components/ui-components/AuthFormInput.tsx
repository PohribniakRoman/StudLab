import React, {ReactElement} from 'react';


type AuthFormInputProps = Record<string, string>

const AuthFormInput:React.FC<AuthFormInputProps> = (props:AuthFormInputProps):ReactElement => {
    return (<input className="auth__form--input" required {...props}/>);
};

export default AuthFormInput;