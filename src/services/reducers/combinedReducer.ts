import { combineReducers } from "redux";
import {client} from "./clientReducer";
import { userActivities} from "./userActivitiesReducer";
import {Notification, notifications} from "./notificationReducer";

export type Action = {
    type:string,
    payload:any,
}


export const combineReducer = combineReducers({
    client,
    userActivities,
    notifications,
})