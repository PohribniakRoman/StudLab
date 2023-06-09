import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Auth } from "../pages/Auth";
import { Rules } from "../pages/Rules";
import { Page404 } from "../pages/Page404";
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { ProtectedRouter } from "./protectrdRouter";
import { EventPage } from "../pages/EventPage";

export const Router:React.FC = () => {
    return  <BrowserRouter>
        <Routes>
            <Route path="/auth" element={<Auth/>}/>
            <Route path="/rules" element={<Rules/>}/>
            <Route path="/events" element={<EventPage/>}/>
            <Route path="/profile" element={<ProtectedRouter Children={Profile}/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<Page404/>}/>
        </Routes>
    </BrowserRouter>
}