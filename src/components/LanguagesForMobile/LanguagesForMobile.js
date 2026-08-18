import data from "../../data/data.json";

export const LanguagesForMobile = () => {
    const languageListWithId = data?.languages?.info?.map((item, idx) => ({ ...item, id: idx + 1 }));

    return (
        <section className="mobile-only section languages-section">
            {data?.languages?.info && <div className="languages-list">
                <h2 className="section-title">
                    {data.languages.title}
                </h2>
                {
                    languageListWithId?.map(lang => (
                        <div key={lang.id} className="item">
                            {lang.language}
                            <span className="lang-desc">({lang.level})</span>
                        </div>
                    ))
                }
            </div>}
        </section>
    );
};

export default LanguagesForMobile;
