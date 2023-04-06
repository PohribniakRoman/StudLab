import React, {ReactElement} from 'react';

type ButtonProps = Record<string, string>
const Button:React.FC<ButtonProps> = (props):ReactElement => {
    const title = props.title;
    const myProps = JSON.parse(JSON.stringify(props));
    delete myProps.title;
    return (<button className="auth__form--submit" {...myProps}><i>{title}</i></button>);
};


export default Button;