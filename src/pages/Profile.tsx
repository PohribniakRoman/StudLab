import { useSelector } from "react-redux";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/menu/NavBar";
import { UserBar } from "../components/UserBar";
import { Activities } from "../components/widgets/Activities";
import { Calendar } from "../components/widgets/Calendar";
import { Documents } from "../components/widgets/Documents";
import { ProfileShortcut } from "../components/widgets/ProfileShortcut";
import { SavedProposal } from "../components/widgets/SavedProposal";
import { EditModal } from "../components/modals/EditModal";
import { EventModal } from "../components/modals/EventModal";
import { NotificationContainer } from "../services/Notification";

export const Profile: React.FC = () => {
  return (
    <>
      <NotificationContainer/>
      <EventModal/>
      <EditModal />
      <section className="page">
        <NavBar />
        <div className="page__container">
          <UserBar />
          <div className="page__wrapper-box">
            <div className="page__wrapper-item">
              <ProfileShortcut />
              <Documents/>
              <SavedProposal />
            </div>
            <div className="page__wrapper-item">
              <Calendar />
              <Activities />
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};
