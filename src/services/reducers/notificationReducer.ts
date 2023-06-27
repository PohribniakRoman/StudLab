import { Action } from "./combinedReducer"

export type NotificationAction = Action & {
    type:"ADD_NOTIFICATION" | "REMOVE_NOTIFICATION"
}

export type Notification = {
    message:string,
    id:string,
}

export const notifications = (state:Notification[] = [],action:NotificationAction) => {
    switch (action.type) {
        case "ADD_NOTIFICATION":{
            const newState = state.filter(message=>message.message !== action.payload.message);
            return [...newState,action.payload];
        }
        case "REMOVE_NOTIFICATION":{
            const newState = state.filter(message=>message.id !== action.payload.id);
            return newState;
        }
        default:{
            return [];
        }
    }
}