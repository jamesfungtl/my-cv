import './App.scss';
import "./styles/main.scss";
import "./styles/responsive.scss";
import ProfileSummary from "./components/ProfileSummary";
import TechnicalWorkingExperiences from "./components/TechnicalWorkingExperiences";
import CanadaWorkingExperiences from "./components/CanadaWorkingExperiences";
import Sidebar from './components/Sidebar';
import EducationForMobile from './components/EducationForMobile';
import OnlineCertificatesForMobile from './components/OnlineCertificatesForMobile';

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
        </div>
      </div>
    </div>
  );
}

export default App;
