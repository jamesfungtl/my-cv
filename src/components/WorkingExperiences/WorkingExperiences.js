
export const WorkingExperiences = ({workingExperiences}) => {
    let experiencesWithId = workingExperiences?.info?.map((item, idx) => ({ ...item, id: idx + 1 }));

    return (
        <section className="section experiences-section">
            {workingExperiences && <div>
                <h2 className="section-title">
                    {workingExperiences.title}
                </h2>

                {experiencesWithId?.map(job => (
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

export default WorkingExperiences;