import { useDispatch, useSelector } from "react-redux";
import { ENDPOINTS } from "../ENDPOINTS";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export const useActivities = () =>{
    const dispatch = useDispatch();
    const currentState = useSelector((state:any)=>state.userActivities)
    
    const loadActivities = () =>{
            const defaultState = {...currentState};
            (async () => {
                const respAll = await (
                    await fetch(ENDPOINTS.events, {
                        mode: "cors" as RequestMode,
                        headers: {
                            "Content-Type": "application/json",
                        },
                    })).json();
                    defaultState.allActivities = respAll;
                    dispatch({type:"LOAD_ACTIVITY",payload:defaultState})
                    try{
                        const resp = await (
                            await fetch(ENDPOINTS.getActivities, {
                                mode: "cors" as RequestMode,
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: `Bearer ${cookies.get("token")}`,
                                },
                            })).json();
                        defaultState.myActivities = resp;
                        dispatch({type:"LOAD_ACTIVITY",payload:defaultState})
                    }catch(e){
                        throw e;
                    }
            })();
    }
    return {loadActivities}
}