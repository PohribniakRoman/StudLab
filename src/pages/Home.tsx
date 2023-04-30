import { Event } from "../components/Event";
import { EventContainer } from "../components/EventContainer";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { UserBar } from "../components/UserBar";
import { Vacancy } from "../components/Vacancy";
import { VacancyContainer } from "../components/VacanyContainer";

export const Home: React.FC = () => {
  return (
    <section className="home">
      <NavBar />
      <div className="home__container">
      <UserBar />
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
