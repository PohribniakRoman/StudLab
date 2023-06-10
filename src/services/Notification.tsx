import { useSelector } from "react-redux";

export const NotificationContainer:React.FC = () => {
    const notifications = useSelector((state:any)=>state.notifications);
    return <section className="notification">
        {notifications.map((notification:any)=>{
            return <div key={notification.id} className={`notification__item ${notification.type}`}>
                Повідомлення: 
                <b> {notification.message}</b>
            </div>
        })}
    </section>
}