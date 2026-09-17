import { skillGroups } from "../data/portfolio";

export default function Skills() {
  return (
    <div className="skills-grid">
      {skillGroups.map((group) => (
        <article className="skill-card" key={group.title}>
          <h3>{group.title}</h3>
          <div className="chips">
            {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </article>
      ))}
    </div>
  );
}