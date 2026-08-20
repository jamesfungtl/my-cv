import data from "../../data/data.json";

export const OnlineCertificatesForMobile = () => {
    const certListWithId = data?.onlineCertificates?.info?.map((item, idx) => ({ ...item, id: idx + 1 }));

    return (
        <section className="mobile-only section certificates-section">
            {data?.onlineCertificates?.info && <div>
                <h2 className="section-title">
                    {data.onlineCertificates.title}
                </h2>
                {
                    certListWithId?.map(cert => (
                        <div key={cert.id} className="item">
                            <div className="upper-row">
                                <h3 className="cert-title">
                                    <a href={cert.link} target="_blank" rel="noopener nofollow noreferrer">
                                        {`${cert.name} - Issued by ${cert.organization}`}
                                    </a>
                                </h3>
                                <div className="time">{cert.time}</div>
                            </div>
                        </div>
                    ))
                }

            </div>}
        </section>
    );
};

export default OnlineCertificatesForMobile;
