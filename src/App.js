import './App.scss';
import "./styles/main.scss";
import "./styles/responsive.scss";
import ProfileSummary from "./components/ProfileSummary/ProfileSummary";
import TechnicalWorkingExperiences from "./components/WorkingExperiences/TechnicalWorkingExperiences";
import CanadaWorkingExperiences from "./components/WorkingExperiences/CanadaWorkingExperiences";
import Sidebar from './components/Sidebar/Sidebar';
import Skills from './components/Skills/Skills';
import EducationForMobile from './components/Education/EducationForMobile';
import OnlineCertificatesForMobile from './components/OnlineCertificates/OnlineCertificatesForMobile';
import LanguagesForMobile from './components/Languages/LanguagesForMobile';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Sidebar />
        <div className="main-wrapper">
          <ProfileSummary />
          <TechnicalWorkingExperiences />
          <EducationForMobile />
          <CanadaWorkingExperiences />
          <OnlineCertificatesForMobile />
          <LanguagesForMobile />
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default App;
