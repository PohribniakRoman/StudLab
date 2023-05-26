import { Action } from "./combinedReducer";

export type UserActivity = {
    title:string,
    description:string,
    place:string,
    time:string,
    id:string,
    day:number,
}
export type ActivitiesAction = Action & {
    type:"REMOVE_ACTIVITY" | "ADD_ACTIVITY",
}

export const userActivities = (state:UserActivity[] = [],action:ActivitiesAction) => {
    switch (action.type) {
        case "REMOVE_ACTIVITY":
            const newState = state.filter(activity=>activity.id !== action.payload.id)
        return newState;
        
        case "ADD_ACTIVITY":
        
        return [...state,action.payload];
        
        default:{
            return state;
        }
    }
}