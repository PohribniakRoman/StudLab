import { Action } from "./combinedReducer"

export type NotificationAction = Action & {
    type:"ADD_NOTIFICATION" | "REMOVE_NOTIFICATION"
}

export type Notification = {
    message:string,
    type:"warning"|"error"|"info"|"success",
    id:string,
}

export const notifications = (state:Notification[] = [],action:NotificationAction) => {
    switch (action.type) {
        case "ADD_NOTIFICATION":
        
        return [...state,action.payload];
        
        case "REMOVE_NOTIFICATION":            
            const newState = state.filter(message=>message.id !== action.payload.id);
        return newState;
        default:{
            return state;
        }
    }
}