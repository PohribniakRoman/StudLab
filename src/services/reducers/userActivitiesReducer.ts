import Cookies from "universal-cookie";
import { ENDPOINTS } from "../ENDPOINTS";
const cookies = new Cookies ();

interface ActivitieManager {
    allActivities: any[], 
    myActivities: any[], 
    today: any[], 
    date: string,
    current:any
}

const defaultState = { 
    allActivities: [], 
    myActivities:[],
    today: [], 
    current:{},
    date: new Date().toDateString(),
} as ActivitieManager;

const updateToday = (state:any) => {
    state.today = [];
    state.myActivities.forEach((activity:any)=>{
    if(new Date(activity.date).toDateString() === state.date){
            state.today.push(activity);
        }
    })
    return state;
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
                
            const newState = state.myActivities.filter((activity: any) => activity.id !== action.payload);
            const loadState = {...state,myActivities:newState}; 
            return updateToday(loadState);
        }
        case "ADD_ACTIVITY":{
            fetch(ENDPOINTS.addActivitie + "?eventId=" + action.payload.id, {
                method:"POST",
                ...ENDPOINTS.params,
                headers: { ...ENDPOINTS.params.headers,
                  Authorization: `Bearer ${cookies.get("token")}` },
                });
            const newState = JSON.parse(JSON.stringify(state));
            newState.myActivities.push(action.payload);
            return updateToday(newState);
        }
        case "LOAD_DATE":{
            const newState = {...state};
            newState.date = action.payload;
            return updateToday(newState);
        }
        case "LOAD_ACTIVITY":{
            return updateToday(action.payload)
        }
        case "LOAD_CURRENT":{
            return {...state,current:action.payload}
        }
        default: {
            return updateToday({...state});
        }
    }
}