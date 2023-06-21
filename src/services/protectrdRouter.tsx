import { ReactNode, useEffect, useRef, useState } from "react"
import { ENDPOINTS } from "./ENDPOINTS";
import { useDispatch } from "react-redux";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export type ProtectedRouterChildren = {
    children:ReactNode,
    failed?:ReactNode
}

export const ProtectedRouter:React.FC<ProtectedRouterChildren> = (props:ProtectedRouterChildren) => {
    const [isAuthorized,setAuthorized] = useState<null|boolean>(null);
    const dispatch = useDispatch();
    const firstRender = useRef(true)

    useEffect(()=>{
        if(firstRender.current){
            firstRender.current = false;
            (async ()=>{
                try{
                const token = cookies.get("token");
                console.log(token.length,token);
                
                const resp = await (await fetch(ENDPOINTS.person,{
                mode: "cors" as RequestMode,
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`}})).json();
                if(resp){
                    if(resp[0].id){
                        dispatch({type:"LOAD_CLIENT",payload:resp[0]})
                        setAuthorized(true);
                    }else{
                        setAuthorized(false)
                    }
                }else{
                    setAuthorized(false)
                }
                }catch(e){
                    setAuthorized(false)
                    console.info(e);
                }
            })();
        }
    },[])
    
    if(isAuthorized === null){
        return <div className="wrapper">
        <div className="spinner"/>
      </div>    
    }

    return (<>
        {isAuthorized ? props.children : props.failed?props.failed:""}
    </>)
}