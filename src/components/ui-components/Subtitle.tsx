import React, {ReactElement} from 'react';


export const Subtitle:React.FC<any> = ({title,className}) => {
    return (
        <h3 className={`subtitle ${className}`}>{title}</h3>
    );
};
