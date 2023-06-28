import { Event } from "../components/Event";
import { EventContainer } from "../components/EventContainer";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/menu/NavBar";
import { EventModal } from "../components/modals/EventModal";
import { UserBar } from "../components/UserBar";
import { useSelector } from "react-redux";
import { NotificationContainer } from "../services/Notification";
import { useActivities } from "../services/hooks/useActivities";

export const EventPage: React.FC = () => {
  const events = useSelector((state:any)=>state.userActivities)
  useActivities().loadActivities();

    if(!events.allActivities.length){
      return <div className="wrapper fullsize" >
      <div className="spinner"/>
  </div>
    }
    return (
      <>
      <EventModal withLoad={false}/>
      <NotificationContainer/>
      <section className="page">
        <NavBar />
        <div className="page__container">
          <UserBar />
          <EventContainer>
        {events.allActivities.map((event:any)=>{
          const isInMyEvents = events.myActivities.filter((myEvent:any)=>myEvent.id === event.id);
          return <Event key={event.id} disabled={isInMyEvents.length>0} data={event}/>
        })}
      </EventContainer>
        </div>
        <Footer />
    </section>
      </>
  );
};
