/*
  ============================================================
  PORTFOLIO CONTENT FILE
  ============================================================
  You normally only need to edit THIS FILE.

  Add / remove entries from:
    - profile
    - experience
    - projects
    - skillGroups
    - education
    - certifications
    - achievements

  The React UI will automatically render the new entries.
*/

export const profile = {
  name: "Gaurav Mahajan",
  roles: ["Full Stack Developer", "IT Security", "AI Automation", "Tally Accountant"],
  email: "nayanmahajan91@gmail.com",
  phone: "+91 9179233131",
  location: "Dist. Burhanpur, Madhya Pradesh, India",
  github: "https://github.com/mahajang214",
  linkedin: "www.linkedin.com/in/gaurav-mahajan-6069b42b7",
  resume: `${import.meta.env.BASE_URL}resume.pdf`,
  // Add more social links here whenever you want:
  socials: [
    { label: "GitHub", url: "https://github.com/mahajang214" },
    { label: "LinkedIn", url: "www.linkedin.com/in/gaurav-mahajan-6069b42b7" },
    { label:"Blue Team Labs CTF", url: "https://blueteamlabs.online/public/user/405b21a39516d3ab181d68" },
    // { label: "X", url: "https://x.com/..." },
    // { label: "Instagram", url: "https://instagram.com/..." },
  ],
};

/*
  EXPERIENCE
  ------------------------------------------------------------
  Add another job by copying one object.

  Optional fields:
    period, company, role, location, description, highlights
*/
export const experience = [
  {
    period: "APR 2026 — PRESENT",
    company: "Patanjali Mega Mart",
    role: "Tally Accountant",
    location: "Burhanpur, MP",
    description:
      "Manage accounting and cashier operations, while providing business strategy consultancy through monthly business-data reports.",
    highlights: [
      "Prepare monthly business-data reports.",
      "Analyze top-selling products and average customer amount.",
      "Support business strategy through data-driven observations.",
      "Manage accounting and cashier responsibilities.",
    ],
  },
  {
    period: "SEP 2025 — MAY 2026",
    company: "S-Mart",
    role: "Accountant",
    location: "Burhanpur, MP",
    description:
      "Managed accounting responsibilities while learning and analyzing consumer behaviour.",
    highlights: [
      "Managed accounting activities.",
      "Worked with business and customer-related data.",
      "Studied consumer behaviour.",
    ],
  },

  // EXAMPLE — uncomment and customize:
  /*
  {
    period: "JAN 2024 — AUG 2025",
    company: "Your Company",
    role: "Full Stack Developer",
    location: "Remote",
    description: "Short description of your role.",
    highlights: [
      "Built React applications.",
      "Created Node.js APIs.",
      "Improved application performance.",
    ],
  },
  */
];

/*
  PROJECTS
  ------------------------------------------------------------
  Add a project by copying one object.

  Optional fields:
    title, category, stack, description, highlights, link, github, featured
*/
export const projects = [
  {
    title: "Aura Mind",
    category: "PRODUCTIVITY",
    stack: "React.js • Node.js • MongoDB • Google Auth • Chart.js",
    description:
      "Responsive productivity tracking website for daily, monthly and yearly habits.",
    highlights: [
      "Daily, monthly and yearly habit tracking.",
      "Google authentication.",
      "Interactive Chart.js data visualization.",
      "Responsive interface.",
    ],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    title: "DevLab",
    category: "REAL-TIME IDE • AI",
    stack: "React.js • Node.js • Socket.io • Tailwind CSS • Llama 3",
    description:
      "Real-time collaborative IDE supporting 20+ programming languages with AI assistance.",
    highlights: [
      "Real-time collaboration using Socket.io.",
      "20+ programming languages.",
      "Built-in multilanguage executor.",
      "AI assistant powered by Llama 3.",
    ],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    title: "CyberShield Tool",
    category: "SECURITY • CLI",
    stack: "Bash • OpenSSL • AES-256-CBC",
    description:
      "Linux command-line utility for encrypting and decrypting files and folders.",
    highlights: [
      "File and folder encryption.",
      "AES256CBC workflow.",
      "Linux command-line interface.",
    ],
    link: "#",
    github: "#",
    featured: false,
  },
  {
    title: "Zipzilla Tool",
    category: "LINUX • CLI",
    stack: "Bash • Linux CLI • Cross-platform",
    description:
      "Cross-platform command-line tool for compression and decompression.",
    highlights: [
      "Automated extraction.",
      "Compression and decompression.",
      "Video-compression workflows.",
    ],
    link: "#",
    github: "#",
    featured: false,
  },
  {
    title: "Drap Tool",
    category: "PACKAGE MANAGEMENT",
    stack: "Bash • Linux CLI",
    description:
      "Global package manager for Linux distributions with smart detection and fallback support.",
    highlights: [
      "Smart package detection.",
      "Fallback support.",
      "Simplified installation and updates.",
    ],
    link: "#",
    github: "#",
    featured: false,
  },
  {
    title: "AI Workflow Lab",
    category: "AI • AUTOMATION",
    stack: "Gemini • GPT • Claude • n8n • AI Agents",
    description:
      "Experiments around AI-assisted development, generative media and automation.",
    highlights: [
      "LLM-assisted development.",
      "AI image and video workflows.",
      "n8n automation experiments.",
      "AI agent workflows.",
    ],
    link: "#skills",
    github: "#",
    featured: false,
  },

  // EXAMPLE:
  /*
  {
    title: "My New Project",
    category: "WEB APP",
    stack: "React • Node.js • MongoDB",
    description: "What the project does in 1–2 sentences.",
    highlights: [
      "Important feature 1.",
      "Important feature 2.",
      "Interesting technical challenge.",
    ],
    link: "https://your-live-demo.com",
    github: "https://github.com/yourusername/project",
    featured: true,
  },
  */
];

/*
  SKILLS
  ------------------------------------------------------------
  Add a new category or add skills inside an existing category.
*/
export const skillGroups = [
  {
    title: "Development",
    skills: ["JavaScript", "Python", "Bash", "Windows CMD", "Windows Powershell", "React", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "Bootstrap", "Socket.io"],
  },
  {
    title: "Creative Web",
    skills: ["GSAP", "Framer Motion", "Anime.js", "Three.js", "React Three Fiber", "React Router", "Zustand"],
  },
  {
    title: "AI & LLM",
    skills: ["Gemini", "GPT", "Claude", "Llama", "AI-assisted coding", "Prompt Engineering", "AI Agents"],
  },
  {
    title: "AI Creative",
    skills: ["Veo 3", "Flow", "AI Image Creation", "AI Video Creation", "Generative Media", "Creative Prompting"],
  },
  {
    title: "AI Automation",
    skills: ["n8n", "AI Automation", "Workflow Automation", "API Workflows", "AI Agents"],
  },
  {
    title: "Security",
    skills: ["Nmap", "Wazuh", "Metasploit", "Burp Suite", "Wireshark", "OpenSSL", "Linux CLI"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "Mongoose", "Appwrite"],
  },
  {
    title: "Developer Tools",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Cursor", "Linux CLI", "Vercel", "Render"],
  },
  {
    title: "Business & Accounting",
    skills: ["Tally Prime", "Accounting", "Business Reports", "Data Analysis", "Consumer Behaviour"],
  },

  // EXAMPLE:
  /*
  {
    title: "Cloud",
    skills: ["AWS", "Docker", "Cloudflare"],
  },
  */
];

/*
  EDUCATION
*/
export const education = [
  {
    title: "12th — Math & Science",
    detail: "Gyandeep English Medium School, Burhanpur, MP • June 2021 — June 2023 • 60%",
  },
  {
    title: "10th",
    detail: "Gyandeep English Medium School, Burhanpur, MP • June 2018 — June 2019 • 75%",
  },

  // Example:
  // { title: "B.Tech / Course", detail: "College • Year • Details" },
];

/*
  CERTIFICATIONS
  ------------------------------------------------------------
  Add a certification by copying one object.
*/
export const certifications = [
  {
    name: "MERN Full Stack Web Development",
    issuer: "Sheriyans Coding School",
    year: "",
    credential: "",
  },
  {
    name: "JavaScript",
    issuer: "Great Learning",
    year: "",
    credential: "",
  },
  {
    name: "HTML",
    issuer: "Great Learning",
    year: "",
    credential: "",
  },
  {
    name: "CSS",
    issuer: "Great Learning",
    year: "",
    credential: "",
  },
  {
    name: "Bootstrap",
    issuer: "Great Learning",
    year: "",
    credential: "",
  },
  {
    name: "Tally Prime",
    issuer: "MCCE",
    year: "",
    credential: "",
  },
  {
    name: "Basic Computer Course",
    issuer: "Matoshree Academy",
    year: "",
    credential: "",
  },
  {
    name: "Data Analytics",
    issuer: "Deloitte",
    year: "",
    credential: "",
  },

  // EXAMPLE:
  /*
  {
    name: "Google Cybersecurity Certificate",
    issuer: "Google",
    year: "2026",
    credential: "https://...",
  },
  */
];

/*
  ACHIEVEMENTS / EXTRA DETAILS
  ------------------------------------------------------------
  This is a new flexible section for anything you want to add
  later: awards, hackathons, freelance work, volunteering,
  achievements, publications, events, etc.
*/
export const achievements = [
  // Example:
  /*
  {
    title: "Hackathon Finalist",
    organization: "XYZ Hackathon",
    year: "2026",
    description: "Built an AI-powered automation platform.",
    link: "https://...",
  },
  */


  {
    title: "55+ Typing Speed ",
    organization: "Typing.com",
    year: "2026",
    description: "Maintained a typing speed of 55+ words per minute through consistent practice.",
  },
  {
    title: "621 Rank in India in Blue Team Labs CTF",
    organization: "Blue Team Labs CTF",
    year: "2026",
    description: "Secured 621st rank in India in the Blue Team Labs CTF competition, demonstrating strong cybersecurity skills and problem-solving abilities.",
    link: "  https://blueteamlabs.online/public/user/405b21a39516d3ab181d68",
  }

];
