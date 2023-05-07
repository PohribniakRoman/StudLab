import { Event } from "../components/Event";
import { EventContainer } from "../components/EventContainer";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { Slider } from "../components/Slider";
import { UserBar } from "../components/UserBar";
import { Vacancy } from "../components/Vacancy";
import { VacancyContainer } from "../components/VacanyContainer";
import { Calendar } from "../components/widgets/Calendar";
import { Profie } from "../components/widgets/Profile";

export const Home: React.FC = () => {
  return (
    <section className="home">
      <NavBar />
      <div className="home__container">
      <UserBar />
      <Slider/>
      <Calendar/>
      <Profie/>
      <EventContainer>
        <Event/>
        <Event/>
        <Event/>
      </EventContainer>
      <VacancyContainer>
        <Vacancy/>
      </VacancyContainer>
      </div>
      <Footer />
    </section>
  );
};
