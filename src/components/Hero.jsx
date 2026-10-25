
import { useEffect, useRef } from "react";
import { profile } from "../Data/profile";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (event) => {
      const rect = hero.getBoundingClientRect();

      hero.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
      hero.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
    };

    hero.addEventListener("mousemove", handleMouseMove);

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      className="hero section-container"
      id="home"
      ref={heroRef}
    >
      <div className="hero-content">
        <p className="hero-greeting">Hello, It's Me</p>

        <h1>{profile.name}</h1>

        <h2>
          And I'm a <span>{profile.role}</span>
        </h2>

        <p className="hero-description">{profile.introduction}</p>

        <div className="hero-socials social-icons">
          <a href={profile.github} target="_blank" rel="noreferrer"
            aria-label="GitHub" title="GitHub">
            Git
          </a>

          <a href={profile.linkedin} target="_blank" rel="noreferrer"
            aria-label="LinkedIn" title="LinkedIn">
            in
          </a>

          <a href={`mailto:${profile.email}`}
            aria-label="Email" title={`Email ${profile.email}`}>
            @
          </a>
        </div>

        <div className="hero-actions">
          <a className="button button-primary" href="#about">
            More About Me
          </a>

          <a
            className="button button-secondary"
            href={`https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(profile.email)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-photo">
          <img
            src="/images/profile.jpg"
            alt={`${profile.name} profile`}
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
          <span className="hero-initials">{profile.initials}</span>
        </div>
      </div>
    </section>
  );
}
