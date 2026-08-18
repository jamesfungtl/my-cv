import React from "react";
import data from "../../data/data.json";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import OnlineCertificates from "../OnlineCertificates/OnlineCertificates";
import Languages from "../Languages/Languages";

export const Sidebar = () => {
    return (
        <div className="sidebar-wrapper">
            <div className="profile-container">
                {data?.sidebar?.name && <h1 className="name">{data.sidebar.name}</h1>}
                {data?.sidebar?.tagline && <h3 className="tagline">{data.sidebar.tagline}</h3>}
            </div>
            <Contact />
            <Education />
            <OnlineCertificates />
            <Languages />
        </div>
    );
};

export default Sidebar;
