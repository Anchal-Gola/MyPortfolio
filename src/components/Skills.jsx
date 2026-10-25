
import { skillGroups } from "../Data/skills";

export default function Skills() {
  return (
    <section className="skills-section section-container" id="skills">
      <div className="section-heading">
        <p className="eyebrow">MY TECH STACK</p>

        <h2>
          Skills & <span>Technologies</span>
        </h2>

        <p className="section-description">
          Technologies I'm learning and using to build practical
          web applications.
        </p>
      </div>

      <div className="skills-list skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-group skill-card" key={group.title}>
            <h3>{group.title}</h3>

            <div className="skill-tags skill-list">
              {group.skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
