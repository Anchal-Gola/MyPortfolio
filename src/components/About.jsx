
import { profile } from "../Data/profile";

export default function About() {
  return (
    <section className="about section-container" id="about">
      <div className="about-heading">
        <p className="eyebrow">GET TO KNOW ME</p>

        <h2>
          About <span>Me</span>
        </h2>
      </div>

      <div className="about-content">
        <h3>
          A curious mind with a builder's mindset.
        </h3>

        <p>{profile.introduction}</p>

        <p>
          I enjoy learning through hands-on projects, improving my
          development skills, and building applications that solve
          practical problems. I'm currently exploring opportunities
          where I can learn from real-world development work.
        </p>

        <p className="about-location">
          <span aria-hidden="true">⌖</span> {profile.location}
        </p>
      </div>
    </section>
  );
}
