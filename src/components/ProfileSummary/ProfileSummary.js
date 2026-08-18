import React from "react";
import data from "../../data/data.json";

export const ProfileSummary = () => {
    return (
        <section className="section summary-section">

            <h2 className="section-title">
                {data.profileSummary.title}
            </h2>

            <div className="summary">
                {data.profileSummary.summary}
            </div>

        </section>
    );
};

export default ProfileSummary;