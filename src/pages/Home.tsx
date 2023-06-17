import { Event } from "../components/Event";
import { EventContainer } from "../components/EventContainer";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/menu/NavBar";
import { Slider } from "../components/Slider";
import { UserBar } from "../components/UserBar";
import { Vacancy } from "../components/Vacancy";
import { VacancyContainer } from "../components/VacanyContainer";
import { useSelector } from "react-redux";

export const Home: React.FC = () => {
  const events = useSelector((state:any)=>state.userActivities)
  return (
    <section className="page">
      <NavBar />
      <div className="page__container">
      <UserBar />
      <Slider/>
      <EventContainer>
        {events.allActivities.map((event:any)=>{
          const isInMyEvents = events.myActivities.filter((myEvent:any)=>myEvent.id === event.id);
          return <Event key={event.id} disabled={isInMyEvents.length>0} data={event}/>
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
