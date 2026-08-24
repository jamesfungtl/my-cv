import data from "../../data/data.json";
import WorkingExperiences from "./WorkingExperiences";

export const CanadaWorkingExperiences = () => {

    return (
        <WorkingExperiences workingExperiences={data?.canadaWorkingExperiences}/>
    );
};

export default CanadaWorkingExperiences;