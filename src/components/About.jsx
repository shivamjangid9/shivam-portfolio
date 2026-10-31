import { profile } from "../data.js";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container split">
        <h2>About me</h2>
        <div>
          <div className="prose">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <dl className="facts">
            <div>
              <dt>Role</dt>
              <dd>{profile.role}</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>
                <a href={`tel:+91${profile.phone}`}>{profile.phoneDisplay}</a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
