import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Auth } from "../pages/Auth";
import { Rules } from "../pages/Rules";
import { Page404 } from "../pages/Page404";
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { ProtectedRouter } from "./protectrdRouter";
import { EventPage } from "../pages/EventPage";
import Cookies from "universal-cookie";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { ENDPOINTS } from "./ENDPOINTS";
const cookies = new Cookies();

export const Router:React.FC = () => {
    const dispatch = useDispatch();
    const state = useSelector((state:any)=>state.userActivities)
    React.useEffect(()=>{
        const defaultState = {...state};
        (async () => {
            const respAll = await (
                await fetch(ENDPOINTS.events, {
                    mode: "cors" as RequestMode,
                    headers: {
                        "Content-Type": "application/json",
                    },
                })).json();
                defaultState.allActivities = respAll;
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
                }catch(e){
                    throw e;
                }
                dispatch({type:"LOAD_ACTIVITY",payload:defaultState})
        })();
    },[])

return  <BrowserRouter>
        <Routes>
            <Route path="/auth" element={<Auth/>}/>
            <Route path="/rules" element={<Rules/>}/>
            <Route path="/events" element={<EventPage/>}/>
            <Route path="/profile" element={<ProtectedRouter children={<Profile/>}/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<Page404/>}/>
        </Routes>
    </BrowserRouter>
}