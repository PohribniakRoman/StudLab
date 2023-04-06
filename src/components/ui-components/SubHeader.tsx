import React, {ReactElement} from 'react';


type SubHeaderProps = Record<string, string>
const SubHeader:React.FC<SubHeaderProps> = ({title}:SubHeaderProps):ReactElement => {
    return (
        <h3 className="auth__form--title">{title}</h3>
    );
};

export default SubHeader;