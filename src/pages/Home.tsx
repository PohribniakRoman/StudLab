import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { UserBar } from "../components/UserBar";

export const Home: React.FC = () => {
  return (
    <section className="home">
      <NavBar />
      <UserBar />
      <Footer />
    </section>
  );
};
