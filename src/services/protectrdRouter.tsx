import { useEffect, useRef, useState } from "react"
import { ENDPOINTS } from "./ENDPOINTS";
import { useNotification } from "./hooks/useNotification";
import Cookies from 'universal-cookie';
import { useDispatch } from "react-redux";
const cookies = new Cookies();

export type ProtectedRouterChildren = {
    Children:React.FC,
    Failed?:React.FC
}

export const ProtectedRouter:React.FC<ProtectedRouterChildren> = (props:ProtectedRouterChildren) => {
    const [isAuthorized,setAuthorized] = useState<null|boolean>(null);
    const dispatch = useDispatch();

    const notifications = useNotification();
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
                    setAuthorized(false )
                    throw e;
                }
                notifications.createNotification("Попередження","warning");
                notifications.createNotification("Успіх","success");
                notifications.createNotification("Інформація","info");
                notifications.createNotification("Помилка 404/etc","error");
            })();
        }
    },[])
    
    if(isAuthorized === null){
        return <section>
            Loading...
        </section>
    }

    return (<>
        {isAuthorized ? <props.Children/> : props.Failed?<props.Failed/>:""}
    </>)
}