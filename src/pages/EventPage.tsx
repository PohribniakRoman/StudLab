import { Event } from "../components/Event";
import { EventContainer } from "../components/EventContainer";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { UserBar } from "../components/UserBar";
import {useState,useEffect} from "react"
import { ENDPOINTS } from "../services/ENDPOINTS";

export const EventPage: React.FC = () => {
    const [events,loadEvents] = useState<any[]>([]);

    useEffect(()=>{
      (async ()=>{
        const resp = await (await fetch(ENDPOINTS.events,{...ENDPOINTS.params})).json();
        loadEvents([...resp]);
      })()
    },[]);

    return (
      <section className="page">
        <NavBar />
        <div className="page__container">
          <UserBar />
          <EventContainer>
            {events.map((event) => {
              return <Event key={event.id} data={event} />;
            })}
          </EventContainer>
        </div>
        <Footer />
    </section>
  );
};
