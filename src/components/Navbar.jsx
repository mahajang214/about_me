import { useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["about", "experience", "projects", "skills", "contact"];

  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <a className="logo" href="#top">GM<span>.</span></a>

        <div className={`nav-links ${open ? "open" : ""}`}>
          {links.map((link) => (
            <a key={link} href={`#${link}`} onClick={() => setOpen(false)}>
              {link}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a className="nav-resume" href={profile.resume}>Resume</a>
          <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}