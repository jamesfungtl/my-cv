import React from "react";
import data from "../../data/data.json";

export const CanadaWorkingExperiences = () => {
    const canadaWorkingExperienceListWithId = data?.canadaWorkingExperiences?.info?.map((item, idx) => ({ ...item, id: idx + 1 }));

    return (
        <section className="section experiences-section">
            {data?.canadaWorkingExperiences && <div>

                <h2 className="section-title">
                    {data?.canadaWorkingExperiences?.title}
                </h2>

                {canadaWorkingExperienceListWithId.map(job => (
                    <div key={job.id} className="item">

                        <div className="meta">

                            <div className="upper-row">
                                <h3 className="job-title">{job.role}</h3>
                                <div className="time">{job.time}</div>
                            </div>

                            <div className="company">{job.company}</div>

                        </div>
                        <div className="details">
                            <ul>
                                {job.details.map((detail, idx) => (
                                    <li key={idx}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>}
        </section>
    );
};

export default CanadaWorkingExperiences;