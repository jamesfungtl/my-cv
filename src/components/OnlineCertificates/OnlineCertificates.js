import data from "../../data/data.json";

export const OnlineCertificates = () => {
    const certListWithId = data?.onlineCertificates?.info?.map((item, idx) => ({ ...item, id: idx + 1 }));

    return (
        <div className="desktop-only">
            {data?.onlineCertificates?.title && <div className="certificates-container general-container">

                <h2 className="general-container-title">
                    {data.onlineCertificates.title}
                </h2>
                {
                    certListWithId?.map(cert => (
                        <div key={cert.id} className="item">
                            <a href={cert.link} target="_blank" rel="noopener noreferrer">
                                {`${cert.name} - Issued by ${cert.organization}`}
                            </a>
                        </div>
                    ))
                }
            </div>}
        </div>
    );
};

export default OnlineCertificates;
