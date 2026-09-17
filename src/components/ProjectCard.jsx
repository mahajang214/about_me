import { useState } from "react";
import { ArrowUpRight, Code2, ChevronDown, Github } from "lucide-react";

export default function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="project-card">
      <div className="project-number">0{index + 1}</div>
      <div className="project-icon"><Code2 size={20} /></div>
      <p className="tag">{project.category}</p>
      <h3>{project.title}</h3>
      <p className="project-stack">{project.stack}</p>
      <p className="muted">{project.description}</p>

      {project.highlights?.length > 0 && (
        <button className="details-button" onClick={() => setOpen(!open)}>
          {open ? "Hide details" : "More details"} <ChevronDown className={open ? "rotate" : ""} size={14} />
        </button>
      )}

      {open && (
        <ul className="detail-list">
          {project.highlights.map((item) => <li key={item}>{item}</li>)}
        </ul>
      )}

      <div className="project-actions">
        <a className="project-link" href={project.link}>
          Live project <ArrowUpRight size={15} />
        </a>
        {project.github && project.github !== "#" && (
          <a className="project-link" href={project.github} target="_blank" rel="noreferrer">
            <Github size={14} /> GitHub
          </a>
        )}
      </div>
    </article>
  );
}