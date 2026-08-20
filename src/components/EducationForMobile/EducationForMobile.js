import data from "../../data/data.json";

export const EducationForMobile = () => {
    const educationListWithId = data?.education?.info?.map((item, idx) => ({ ...item, id: idx + 1 }));

    return (
        <section className="mobile-only section educations-section">

            <h2 className="section-title">
                {data.education.title}
            </h2>
            {
                educationListWithId?.map(education => (
                    <div className="item">

                        <div className="upper-row">
                            <h3 className="degree">{education.degree}</h3>
                            <div className="time">{education.time}</div>
                        </div>

                        <div className="university">{education.university}</div>

                        {
                            education.details &&
                            <div className="details">
                                {education.details}
                            </div>
                        }

                    </div>
                ))
            }


        </section>
    );
};

export default EducationForMobile;
