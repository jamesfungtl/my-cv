import data from "../../data/data.json";
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './languagesForMobile.scss';

export const LanguagesForMobile = () => {
    const languageListWithId = data?.languages?.info?.map((item, idx) => ({ ...item, id: idx + 1 }));

    return (
        <section className="mobile-only section languages-section">
            {data?.languages?.info && <div className="languages-list">
                <h2 className="section-title">
                    {data.languages.title}
                </h2>
                {
                    languageListWithId?.map((lang, id) => (
                        <Accordion
                            key={lang.id}
                            sx={{
                                margin: '10px 0',
                                borderRadius: 2,
                                boxShadow: 1
                            }}>
                            <AccordionSummary
                                expandIcon={lang?.details?.[0] && <ExpandMoreIcon />}
                                aria-controls={`${id}-panel-content`}
                                id={`${id}-panel-header`}
                            >
                                <div>
                                    {lang.language}
                                    <span className="lang-desc">({lang.level})</span>
                                </div>
                            </AccordionSummary>
                            {lang?.details?.[0] && <AccordionDetails>
                                <ul className="list-unstyled languages-list">
                                    {lang.details.map((detail, idx) => (
                                        <li key={idx}>{detail}</li>
                                    ))}
                                </ul>
                            </AccordionDetails>}
                        </Accordion>
                    ))
                }
            </div>}
        </section>
    );
};

export default LanguagesForMobile;
