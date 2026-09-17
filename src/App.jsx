import { ArrowUpRight, BriefcaseBusiness, GraduationCap, Mail, MapPin, Phone } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionTitle from "./components/SectionTitle";
import ProjectCard from "./components/ProjectCard";
import Skills from "./components/Skills";
import { achievements, certifications, education, experience, profile, projects } from "./data/portfolio";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section id="about" className="section">
          <div className="container">
            <SectionTitle number="01" eyebrow="About" title="Building useful things across code, security & business." />
            <div className="about-grid">
              <div>
                <p className="lead">My technical foundation is in JavaScript, Python and Bash, with hands-on work across React, Next.js, Node.js, Express.js, MongoDB and modern UI/animation libraries.</p>
                <p className="muted">I also work with developer and security tooling such as Git, GitHub, Postman, Nmap, Wazuh, Metasploit, Burp Suite and Wireshark. Alongside development, I work in accounting and business-data analysis.</p>
              </div>
              <div className="about-stats">
                <div><strong>20+</strong><span>languages supported in DevLab</span></div>
                <div><strong>3</strong><span>core directions: Web • Security • AI</span></div>
                <div><strong>∞</strong><span>ideas to turn into products</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section alt">
          <div className="container">
            <SectionTitle number="02" eyebrow="Experience" title="Professional experience." />
            <div className="timeline">
              {experience.map((job) => (
                <article className="timeline-item" key={`${job.company}-${job.period}`}>
                  <div className="timeline-date">{job.period}</div>
                  <div>
                    <div className="role-heading"><BriefcaseBusiness size={18} /><h3>{job.company}</h3><span>{job.role}</span></div>
                    <p className="muted">{job.description}</p>
                    {job.highlights?.length > 0 && (
                      <ul className="detail-list experience-list">
                        {job.highlights.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <SectionTitle number="03" eyebrow="Projects / Open Source" title="Things I've built." />
            <div className="projects-grid">
              {projects.map((project, i) => <ProjectCard key={project.title} project={project} index={i} />)}
            </div>
          </div>
        </section>

        <section id="skills" className="section alt">
          <div className="container">
            <SectionTitle number="04" eyebrow="Skills" title="My toolkit is bigger than a framework.">
              <p className="muted">From full-stack engineering and cybersecurity to generative media and n8n automation.</p>
            </SectionTitle>
            <Skills />
          </div>
        </section>

        <section id="education" className="section">
          <div className="container">
            <SectionTitle number="05" eyebrow="Education & Certifications" title="Learning through fundamentals and practice." />
            <div className="education-grid">
              <div className="education-list">
                {education.map((item) => (
                  <article className="education-card" key={item.title}>
                    <GraduationCap size={20} />
                    <div><h3>{item.title}</h3><p>{item.detail}</p></div>
                  </article>
                ))}
              </div>
              <div className="cert-list">
                {certifications.map((cert) => (
                  <div key={`${cert.name}-${cert.issuer}`}>
                    <strong>{cert.name}</strong>
                    <span>{cert.issuer}{cert.year ? ` • ${cert.year}` : ""}</span>
                    {cert.credential && <a href={cert.credential}>View credential ↗</a>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="achievements" className="section alt">
          <div className="container">
            <SectionTitle number="06" eyebrow="Extra Details" title="More things I've done." />
            <div className="extra-grid">
              {achievements.length === 0 ? (
                <div className="empty-extra">
                  Add achievements, hackathons, freelance work, awards or other details in
                  <code>src/data/portfolio.js</code>.
                </div>
              ) : achievements.map((item) => (
                <article className="education-card" key={`${item.title}-${item.organization}`}>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.organization} {item.year ? `• ${item.year}` : ""}</p>
                    <p>{item.description}</p>
                    {item.link && <a className="project-link" href={item.link}>View details ↗</a>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow">06 — Contact</p>
              <h2>Let's build something <span>useful.</span></h2>
              <p className="lead">Open to development opportunities, collaborations, AI automation projects and security-focused work.</p>
              <a className="button primary" href={`mailto:${profile.email}`}>Start a conversation <ArrowUpRight size={16} /></a>
            </div>
            <div className="contact-card">
              <div><Mail /><span>{profile.email}</span></div>
              <div><Phone /><span>{profile.phone}</span></div>
              <div><MapPin /><span>{profile.location}</span></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© 2026 Gaurav Mahajan</span>
          <span>Full Stack • Security • AI • Automation</span>
        </div>
      </footer>
    </>
  );
}