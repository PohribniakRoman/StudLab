import React from 'react';

const Button:React.FC<any> = (props) => {
    return (<button className={props.variant === "field"?"submit-field":"submit"} {...props}><i>{props.title}</i></button>);
};


export default Button;