import { skillGroups } from "../data.js";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container split">
        <h2>Skills</h2>
        <div className="skills">
          {skillGroups.map((g) => (
            <div key={g.title} className="skills__group">
              <h3>{g.title}</h3>
              <ul className="chips">
                {g.items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
