import { useEffect, useRef, useState } from "react"
import { ENDPOINTS } from "./ENDPOINTS";
import { useNotification } from "./hooks/useNotification";

export type ProtectedRouterChildren = {
    Children:React.FC,
}

export const ProtectedRouter:React.FC<ProtectedRouterChildren> = (props:ProtectedRouterChildren) => {
    const [isAuthorized,setAuthorized] = useState<null|boolean>(null);
 
    const notifications = useNotification();
    const firstRender = useRef(true)
    useEffect(()=>{
        if(firstRender.current){
            firstRender.current = false;
            (async ()=>{
                // const resp = await fetch(ENDPOINTS.authorize);
                setAuthorized(true);
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
        {isAuthorized ? <props.Children/> :""}
    </>)
}