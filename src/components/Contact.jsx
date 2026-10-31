import { useState } from "react";
import { profile } from "../data.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", message: "" });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Backend ki zaroorat nahi: ye user ke email app me ready mail khol deta hai.
  const send = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n- ${form.name}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section">
      <div className="container split">
        <div>
          <h2>Let's work together</h2>
          <p className="contact__lead">
            Have a project, a job opening or just a question? Write to me and I will reply soon.
          </p>
          <ul className="contact__list">
            <li>
              <span>Email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <span>Phone</span>
              <a href={`tel:+91${profile.phone}`}>{profile.phoneDisplay}</a>
            </li>
            {profile.github && (
              <li>
                <span>GitHub</span>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  {profile.github.replace("https://", "")}
                </a>
              </li>
            )}
            {profile.linkedin && (
              <li>
                <span>LinkedIn</span>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  {profile.linkedin.replace("https://", "")}
                </a>
              </li>
            )}
          </ul>
        </div>

        <form className="form" onSubmit={send}>
          <label>
            Your name
            <input name="name" value={form.name} onChange={update} required autoComplete="name" />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" value={form.message} onChange={update} required />
          </label>
          <button className="btn btn--primary" type="submit">
            Send email
          </button>
        </form>
      </div>
    </section>
  );
}
