import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Auth } from "../pages/Auth";
import { Rules } from "../pages/Rules";

export const Router:React.FC = () => {
    return  <BrowserRouter>
        <Routes>
            <Route path="/" element={<Auth/>}/>
            <Route path="/rules" element={<Rules/>}/>
        </Routes>
    </BrowserRouter>
}