
import { projects } from "../Data/projects";

export default function Projects() {
  return (
    <section className="projects-section section-container" id="projects">
      <div className="section-heading">
        <div>
          <p className="eyebrow">WHAT I'VE BEEN WORKING ON</p>
          <h2>
            My <span>Projects</span>
          </h2>
          <p className="section-description">
            Real projects built while learning, experimenting, and solving
            practical problems with technology.
          </p>
        </div>

        <a
          className="github-link button button-secondary"
          href="https://github.com/Anchal-Gola?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          View GitHub ↗
        </a>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <article className="project-item project-card" key={project.id}>
            <div className="project-preview">
              {project.video ? (
                <a
                  className="project-video-preview"
                  href={project.video}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Watch ${project.name} demo video`}
                >
                  {project.image && (
                    <img
                      src={project.image}
                      alt={`${project.name} video thumbnail`}
                      loading="lazy"
                    />
                  )}
                  <span className="video-play-button">▶</span>
                  <span className="video-preview-label">WATCH PROJECT DEMO</span>
                </a>
              ) : project.image ? (
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  loading="lazy"
                />
              ) : (
                <div className={`project-placeholder project-theme-${index % 3}`}>
                  <span className="preview-index">
                    PROJECT {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="preview-name">{project.name}</span>
                  <span className="preview-arrow">↗</span>
                </div>
              )}
            </div>

            <div className="project-details">
              <p className="project-category">{project.category}</p>
              <h3>{project.name}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-technologies project-tech">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-actions project-links">
                {project.demo && (
                  <a
                    className="button button-primary"
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo ↗
                  </a>
                )}

                {project.github && (
                  <a
                    className="button button-secondary"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source Code ↗
                  </a>
                )}
  {!project.demo && !project.github && !project.video && (
                  <span className="project-links-pending">
                    Links coming soon
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
