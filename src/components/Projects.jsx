import { projects } from "../data.js";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>
        <ul className="projects">
          {projects.map((p) => (
            <li key={p.title} className="project">
              <div className="project__head">
                <h3>{p.title}</h3>
                <p className="project__type">{p.type}</p>
              </div>
              <div className="project__body">
                <p>{p.description}</p>
                <ul className="chips chips--small">
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                {(p.live || p.code) && (
                  <div className="project__links">
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer">
                        Live demo
                      </a>
                    )}
                    {p.code && (
                      <a href={p.code} target="_blank" rel="noreferrer">
                        Source code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
