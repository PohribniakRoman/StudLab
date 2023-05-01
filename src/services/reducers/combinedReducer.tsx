import { combineReducers } from "redux";
import {client} from "../reducers/clientReducer";

export const combineReducer = combineReducers({
    client,
})