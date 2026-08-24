import data from "../../data/data.json";
import "./skills.scss";

export const Skills = () => {
    const skillListWithId = data?.skills?.toolset?.map((item, idx) => ({ ...item, id: idx + 1 }));

    return (
        <section className="section skills-section">
            {data?.skills?.toolset && <div>

                <h2 className="section-title">
                    {data.skills.title}
                </h2>
                <div className="skillset">
                    {skillListWithId.map(skill => (
                        <div key={skill.id} className="item">
                            <h3 className="level-title">{skill.name}</h3>
                            <div className="level-bar">
                                <div className="level-bar-inner" style={{"width": skill.level }}></div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>}
        </section>
    );
};

export default Skills;