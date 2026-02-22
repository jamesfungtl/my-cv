import React from "react";
import data from "../../data/data.json";

export const OnlineCertificatesForMobile = () => {
    const certListWithId = data?.onlineCertificates?.info?.map((item, idx) => ({ ...item, id: idx + 1 }));

    return (
        <section class="mobile-only section certifications-section">

            <h2 className="section-title">
                {data.onlineCertificates.title}
            </h2>
            {
                certListWithId?.map(cert => (
                    <div key={cert.id} className="item">
                        <div className="meta">
                            <div className="upper-row">
                                <h3 className="cert-title">{cert.name}</h3>
                                <div className="time">{cert.time}</div>
                            </div>
                            <div className="second-upper-row">
                                <div className="cert-org">
                                    <a href={cert.link} target="_blank" rel="noopener nofollow noreferrer">
                                        {cert.organization}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }


        </section>
    );
};

export default OnlineCertificatesForMobile;
