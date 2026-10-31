import { profile } from "../data.js";

// Top se bottom: user jo dekhta hai -> jahan data rehta hai
const layers = [
  { name: "React", role: "What users see", cls: "react" },
  { name: "Express", role: "Routes and APIs", cls: "express" },
  { name: "Node.js", role: "Server runtime", cls: "node" },
  { name: "MongoDB", role: "Where data lives", cls: "mongo" },
];

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="hero__role">{profile.role}</p>
          <h1>{profile.name}</h1>
          <p className="hero__intro">{profile.intro}</p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="#projects">
              View my projects
            </a>
            <a className="btn btn--ghost" href="#contact">
              Contact me
            </a>
            {profile.resume && (
              <a className="btn btn--ghost" href={profile.resume} download>
                Download resume
              </a>
            )}
          </div>
        </div>

        <div className="stack" role="img" aria-label="The MERN stack as four layers: React, Express, Node.js and MongoDB">
          {layers.map((l, i) => (
            <div key={l.name} className={`layer layer--${l.cls}`} style={{ "--i": i }}>
              <span className="slab" />
              <span className="tag">
                <b>{l.name}</b>
                <small>{l.role}</small>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
