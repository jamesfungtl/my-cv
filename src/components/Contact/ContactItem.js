import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ContactItem = ({ icon, link, linkText, openNewTab = true }) => {
    return (
        <li>
            <FontAwesomeIcon icon={icon} className="fab" />
            <a href={link}
                {...(openNewTab && { target: "_blank", rel: "noopener noreferrer" })}
            >
                {linkText}
            </a>
        </li>
    );
}

export default ContactItem;
