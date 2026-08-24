import data from "../../data/data.json";
import WorkingExperiences from "./WorkingExperiences";

export const TechnicalWorkingExperiences = () => {
    return (
        <WorkingExperiences workingExperiences={data?.technicalWorkingExperiences}/>
    );
};

export default TechnicalWorkingExperiences;