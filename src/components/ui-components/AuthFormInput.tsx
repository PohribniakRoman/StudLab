import React, {ReactElement,useState} from 'react';

const AuthFormInput:React.FC<any> = (props):ReactElement => {
    const [inputData,setInputData] = useState<string>("");
    return (<input className={`form-input ${props.xs}`} value={inputData} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
        props.collector.current = {...props.collector.current,[props.name]:e.target.value}
        setInputData(e.target.value);
    }} required {...props}/>);
};

export default AuthFormInput;