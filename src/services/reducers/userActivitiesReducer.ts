import Cookies from "universal-cookie";
import { ENDPOINTS } from "../ENDPOINTS";
const cookies = new Cookies ();

interface ActivitieManager {
    allActivities: any[], 
    myActivities: any[], 
    today: any[], 
    date: number 
}
const defaultState = { 
    allActivities: [], 
    myActivities:[],
    today: [], 
    date: new Date().getDay() 
} as ActivitieManager;

const updateToday = (state:any) => {
    state.today = [];
    state.myActivities.forEach((activity:any)=>{
    if(activity.date === state.date){
            state.today.push(activity);
        }
    })
}

export const userActivities = (state:ActivitieManager = defaultState, action:any) => {
    switch (action.type) {
        case "REMOVE_ACTIVITY":{
            fetch(ENDPOINTS.removeActivitie + "?eventId=" + action.payload, {
                method:"DELETE",
                ...ENDPOINTS.params,
                headers: { ...ENDPOINTS.params.headers,
                  Authorization: `Bearer ${cookies.get("token")}` },
                });
            updateToday(state);
    
            const newState = state.myActivities.filter((activity: any) => activity.id !== action.payload)
            return {...state,myActivities:newState};
        }
        case "ADD_ACTIVITY":{
            fetch(ENDPOINTS.addActivitie + "?eventId=" + action.payload.id, {
                method:"POST",
                ...ENDPOINTS.params,
                headers: { ...ENDPOINTS.params.headers,
                  Authorization: `Bearer ${cookies.get("token")}` },
                });
            const newState = {...state};
            updateToday(newState);
            newState.myActivities.push(action.payload);
            return newState;
        }
        case "LOAD_ACTIVITY":{
            return action.payload
        }
        default: {
            return state;
        }
    }
}