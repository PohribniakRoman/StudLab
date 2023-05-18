import { Footer } from "../components/Footer"
import { NavBar } from "../components/NavBar"
import { UserBar } from "../components/UserBar"
import { Activities } from "../components/widgets/Activities"
import { Calendar } from "../components/widgets/Calendar"
import { Documents } from "../components/widgets/Documents"
import { ProfileShortcut } from "../components/widgets/ProfileShortcut"
import { SavedProposal } from "../components/widgets/SavedProposal"

export const Profile:React.FC = () => {
    return <section className="page">
      <NavBar />
      <div className="page__container">
      <UserBar />
      <div className="page__wrapper-box">
        <div className="page__wrapper-item">
          <ProfileShortcut/>
          <Documents/>
          <SavedProposal/>
        </div>
        <div className="page__wrapper-item">
          <Calendar/>
          <Activities/>
        </div>
      </div>
      </div>
      <Footer />
    </section>
}