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
                const resp = await (await fetch(ENDPOINTS.person,{
                mode: "cors" as RequestMode,
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${cookies.get("token")}`}})).json();
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
        return <div v-if="loading" className="spinner">
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
      </div>
    }

    return (<>
        {isAuthorized ? props.children : props.failed?props.failed:""}
    </>)
}