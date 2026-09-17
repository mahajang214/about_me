import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <header id="top" className="hero">
      <div className="container hero-content">
        <div className="availability"><span /> Available for opportunities & collaborations</div>
        <p className="eyebrow">FULL STACK • SECURITY • AI</p>
        <h1>
          I build digital products with
          <span> code, security & AI.</span>
        </h1>
        <p className="hero-copy">
          I'm <strong>{profile.name}</strong> — a Full Stack Web Developer,
          IT Security enthusiast and AI Automation builder from Madhya Pradesh.
          I like turning practical ideas into usable software and automated workflows.
        </p>

        <div className="hero-actions">
          <a className="button primary" href="#projects">Explore my work <ArrowDown size={16} /></a>
          <a className="button" href={`mailto:${profile.email}`}>Let's connect <ArrowUpRight size={16} /></a>
        </div>

        <div className="socials">
          <a href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
          <a href={profile.linkedin}><Linkedin size={16} /> LinkedIn</a>
          <a href={`mailto:${profile.email}`}><Mail size={16} /> Email</a>
        </div>
      </div>
    </header>
  );
}