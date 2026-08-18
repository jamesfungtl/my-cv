import ContactItem from "../ContactItem/ContactItem";
import data from "../../data/data.json";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export const Contact = () => {
    return (
        <div className="contact-container container-block">
            <ul className="list-unstyled contact-list">
                {data?.sidebar?.email &&
                    <ContactItem
                        icon={faEnvelope}
                        link={`mailto:${data.sidebar.email}`}
                        linkText={data.sidebar.email}
                        openNewTab={false}
                    />}
                {data?.sidebar?.linkedin &&
                    <ContactItem
                        icon={faLinkedin}
                        link={`https://linkedin.com/in/${data.sidebar.linkedin}`}
                        linkText={data.sidebar.linkedin}
                    />}
                {data?.sidebar?.github &&
                    <ContactItem
                        icon={faGithub}
                        link={`https://github.com/${data.sidebar.github}`}
                        linkText={data.sidebar.github}
                    />}
                {data?.sidebar?.demo &&
                    <ContactItem
                        icon={faGlobe}
                        link={data.sidebar.demo}
                        linkText={data.sidebar.demo}
                    />}
            </ul>
        </div>
    );
};

export default Contact;
