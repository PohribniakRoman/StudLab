import { useDispatch, useSelector } from "react-redux"
import { v4 } from 'uuid';

export const useNotification = () =>{
    const dispatch = useDispatch();
    const createNotification = (message:string) => {
        const id = v4();
            dispatch({type:"ADD_NOTIFICATION",payload:{
                message,
                id,
            }})
            
            setTimeout(()=>{
                dispatch({type:"REMOVE_NOTIFICATION",payload:{id}})
            },3000)
    }
    return {createNotification}
}