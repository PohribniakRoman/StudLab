import { useDispatch, useSelector } from "react-redux"
import { Notification } from "../reducers/notificationReducer";
import { v4 } from 'uuid';

export const useNotification = () =>{
    const notifications = useSelector((state:any)=>state.notifications);
    const dispatch = useDispatch();
    const createNotification = (message:string,type:Notification["type"]) => {
        const id = v4();
        if(notifications.filter((e:any)=>e.message === message).length === 0){
            dispatch({type:"ADD_NOTIFICATION",payload:{
                message,
                type,
                id,
            }})
            setTimeout(()=>{
                dispatch({type:"REMOVE_NOTIFICATION",payload:{id}})
            },3000)
        }
    }
    return {createNotification}
}