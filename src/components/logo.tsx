import { Link } from "react-router-dom"

export type Logo = {
    variant:"auth"|"default"
}

export const Logo:React.FC<Logo> = ({variant}:Logo) =>{
    return  <Link to="/"><h1 className={variant==="auth"?"auth--logo":"logo"}>Stud<br/>Lab.</h1></Link>
}