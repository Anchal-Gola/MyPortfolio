
import { achievements } from "../Data/achievements";

export default function Achievements() {
  return (
    <section
      className="achievements-section section-container"
      id="achievements"
    >
      <div className="section-heading">
        <p className="eyebrow">MY JOURNEY</p>

        <h2>
          Achievements & <span>Certifications</span>
        </h2>

        <p className="section-description">
          A record of the programs, certifications, and experiences
          contributing to my growth in technology.
        </p>
      </div>

      <div className="achievement-list achievements-list">
        {achievements.map((item) => (
          <article className="achievement-item achievement-card" key={item.id}>
            <div className="achievement-marker" aria-hidden="true">
              ✳
            </div>

            <div className="achievement-content">
              <div className="achievement-meta">
                <span>{item.type}</span>
                {item.year && <span>{item.year}</span>}
              </div>

              <h3>{item.title}</h3>

              <p className="achievement-organization">
                {item.organization}
              </p>

              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
