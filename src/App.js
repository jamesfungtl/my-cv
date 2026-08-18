import './App.scss';
import "./styles/main.scss";
import "./styles/responsive.scss";
import ProfileSummary from "./components/ProfileSummary/ProfileSummary";
import TechnicalWorkingExperiences from "./components/TechnicalWorkingExperiences/TechnicalWorkingExperiences";
import CanadaWorkingExperiences from "./components/CanadaWorkingExperiences/CanadaWorkingExperiences";
import Sidebar from './components/Sidebar/Sidebar';
import Skills from './components/Skills/Skills';
import EducationForMobile from './components/EducationForMobile/EducationForMobile';
import OnlineCertificatesForMobile from './components/OnlineCertificatesForMobile/OnlineCertificatesForMobile';
import LanguagesForMobile from './components/LanguagesForMobile/LanguagesForMobile';

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
