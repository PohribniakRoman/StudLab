import { Event } from "../components/Event";
import { EventContainer } from "../components/EventContainer";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/menu/NavBar";
import { UserBar } from "../components/UserBar";
import { useSelector } from "react-redux";

export const EventPage: React.FC = () => {
  const events = useSelector((state:any)=>state.userActivities)

    if(!events.allActivities.length){
      return <div v-if="loading" className="spinner">
      <div className="rect1"></div>
      <div className="rect2"></div>
      <div className="rect3"></div>
      <div className="rect4"></div>
      <div className="rect5"></div>
    </div>
    }
    return (
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
  );
};
