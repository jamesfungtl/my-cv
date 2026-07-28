import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import data from "../../data/data.json";

export const Contact = () => {
    return (
        <div className="contact-container container-block">
            <ul className="list-unstyled contact-list">
                {data?.sidebar?.email && <li className="email">
                    <FontAwesomeIcon icon={faEnvelope} className="fas" />
                    <a href={`mailto:${data.sidebar.email}`}>{data.sidebar.email}</a>
                </li>}
                {data?.sidebar?.linkedin && <li className="linkedin">
                    <FontAwesomeIcon icon={faLinkedin} className="fab" />
                    <a href={`https://linkedin.com/in/${data.sidebar.linkedin}`} target="_blank" rel="noopener noreferrer">
                        {data.sidebar.linkedin}
                    </a>
                </li>}
                {data?.sidebar?.github && <li className="github">
                    <FontAwesomeIcon icon={faGithub} className="fab" />
                    <a href={`https://github.com/${data.sidebar.github}`} target="_blank" rel="noopener noreferrer">
                        {data.sidebar.github}
                    </a>
                </li>}
                {data?.sidebar?.demo && <li>
                    <FontAwesomeIcon icon={faGlobe} className="fab"/>
                    <a href={data.sidebar.demo} target="_blank" rel="noopener noreferrer">
                        {data.sidebar.demo}
                    </a>
                </li>}
            </ul>
        </div>
    );
};

export default Contact;
