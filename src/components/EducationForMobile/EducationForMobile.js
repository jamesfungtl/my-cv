import React from "react";
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

                        <div className="meta">

                            <div className="upper-row">
                                <h3 className="degree">{education.degree}</h3>
                                <div className="time">{education.time}</div>
                            </div>

                            <div className="university">{education.university}</div>
                        </div>

                        {
                            education.details &&
                            <div className="details" style={{ whiteSpace: "pre-line" }}>
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
