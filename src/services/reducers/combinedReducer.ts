import { combineReducers } from "redux";
import {client} from "./clientReducer";
import {UserActivity, userActivities} from "./userActivitiesReducer";
import {Notification, notifications} from "./notificationReducer";

export type Action = {
    type:string,
    payload:any,
}

export type Store = {
    userActivities:UserActivity[],
    notifications:Notification[],
}

export const combineReducer = combineReducers({
    client,
    userActivities,
    notifications,
})