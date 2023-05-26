import { Store } from "./reducers/combinedReducer";
import { useSelector } from "react-redux";

export const NotificationContainer:React.FC = () => {
    const notifications = useSelector((state:Store)=>state.notifications);
    return <section className="notification">
        {notifications.map((notification)=>{
            return <div key={notification.id} className={`notification__item ${notification.type}`}>
                Повідомлення: 
                <b> {notification.message}</b>
            </div>
        })}
    </section>
}