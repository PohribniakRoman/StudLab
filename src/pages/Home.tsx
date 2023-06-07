import { Event } from "../components/Event";
import { EventContainer } from "../components/EventContainer";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { Slider } from "../components/Slider";
import { UserBar } from "../components/UserBar";
import { Vacancy } from "../components/Vacancy";
import { VacancyContainer } from "../components/VacanyContainer";
import {useState,useEffect} from "react";
import { ENDPOINTS } from "../services/ENDPOINTS";

export const Home: React.FC = () => {
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
      <Slider/>
      <EventContainer>
        {events.map(event=>{
          return <Event key={event.id} data={event}/>
        })}
      </EventContainer>
      <VacancyContainer>
        <Vacancy/>
      </VacancyContainer>
      </div>
      <Footer />
    </section>
  );
};
