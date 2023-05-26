import { combineReducers } from "redux";
import {Client, client} from "./clientReducer";
import {UserActivity, userActivities} from "./userActivitiesReducer";
import {Notification, notifications} from "./notificationReducer";

export type Action = {
    type:string,
    payload:any,
}

export type Store = {
    client:Client,
    userActivities:UserActivity[],
    notifications:Notification[],
}

export const combineReducer = combineReducers({
    client,
    userActivities,
    notifications,
})