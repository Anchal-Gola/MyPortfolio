
import { profile } from "../Data/profile";

const gmailLink = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(
  profile.email
)}`;

export default function Contact() {
  return (
    <footer className="contact-section" id="contact">
      <div className="contact-inner section-container">
        <div className="contact-content">
          <p className="eyebrow">LET'S CONNECT</p>

          <h2>
            Have an opportunity in mind?
            <br />
            <span>Let's talk.</span>
          </h2>

          <p className="contact-description">
            I'm looking for developer internships where I can contribute
            to real projects, learn from a team, and grow as a developer.
          </p>

          <a
            className="button button-primary"
            href={gmailLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get in Touch ↗
          </a>
        </div>

        <div className="contact-links">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>

          <a
            href={gmailLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Email Me
          </a>

          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume ↗
          </a>
        </div>
      </div>

      <div className="footer-bottom section-container">
        <a className="footer-logo" href="#home">
          {profile.initials}.
        </a>

        <p>
          Designed and built by {profile.name} · ©{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
