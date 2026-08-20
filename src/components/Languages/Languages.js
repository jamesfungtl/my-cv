import data from "../../data/data.json";

export const Languages = () => {
    const languageListWithId = data?.languages?.info?.map((item, idx) => ({ ...item, id: idx + 1 }));

    return (
        <div className="desktop-only">
            {data?.languages?.title && <div className="languages-container general-container">

                <h2 className="general-container-title">
                    {data.languages.title}
                </h2>
                <ul className="list-unstyled languages-list">
                    {
                        languageListWithId?.map(lang => (
                            <li>
                                {lang.language}
                                <span className="lang-desc">({lang.level})</span>
                            </li>
                        ))
                    }
                </ul>
            </div>}
        </div>
    );
};

export default Languages;
