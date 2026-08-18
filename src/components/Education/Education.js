import React from "react";
import data from "../../data/data.json";

export const Education = () => {
    const educationListWithId = data?.education?.info?.map((item, idx) => ({ ...item, id: idx + 1 }));

    return (
        <div className="desktop-only">
            {data?.education?.title && <div className="education-container container-block">

                <h2 className="container-block-title">
                    {data.education.title}
                </h2>
                {
                    educationListWithId?.map(education => (
                        <div key={education.id} className="item">
                            <h4 className="degree">{education.degree}</h4>
                            <div className="time">{education.university}</div>
                            <div className="time">{education.time}</div>
                            <h5 className="meta" style={{ whiteSpace: "pre-line" }}>{education.details}</h5>
                        </div>
                    ))
                }
            </div>}
        </div>
    );
};

export default Education;
