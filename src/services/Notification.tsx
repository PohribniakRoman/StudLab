import { useSelector } from "react-redux";
import { useEffect,useState } from "react";

export const NotificationContainer:React.FC = () => {
    const notifications = useSelector((state:any)=>state.notifications);
    const [loadedNotification,loadNotification] = useState<any[]>([]);
    useEffect(()=>{
        loadNotification([...notifications]);
    },[notifications])
    
    return <section className="notification">
        {loadedNotification.map((notification:any)=>{
            return <div key={notification.id} className="notification__item">
                Повідомлення: 
                <b> {notification.message}</b>
            </div>
        })}
    </section>
}