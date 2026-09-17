# Gaurav Mahajan — Portfolio

A modern React + Vite developer portfolio.

## Stack

- React
- Vite
- CSS
- Lucide React

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## GitHub Pages

Build the project and deploy the generated `dist` folder, or connect the repository to GitHub Pages through GitHub Actions.

Before publishing, replace placeholder project/social links in `src/data/portfolio.js`.

## Personal data

The portfolio content is based on the supplied resume. AI skills such as Gemini, GPT, Claude, Veo 3 and n8n are included as the user's requested additions.


## Easy content editing

You do NOT need to edit the React components for normal portfolio updates.

Open:

```text
src/data/portfolio.js
```

### Add a new experience

Copy an object inside `experience`:

```js
{
  period: "2027 — PRESENT",
  company: "Company Name",
  role: "Your Role",
  location: "Remote",
  description: "Short description.",
  highlights: [
    "Responsibility or achievement 1.",
    "Responsibility or achievement 2.",
  ],
},
```

### Add a new skill category

```js
{
  title: "Cloud",
  skills: ["AWS", "Docker", "Cloudflare"],
},
```

### Add a certification

```js
{
  name: "Certificate Name",
  issuer: "Organization",
  year: "2026",
  credential: "https://certificate-link.com",
},
```

### Add a project

```js
{
  title: "Project Name",
  category: "WEB APP",
  stack: "React • Node.js • MongoDB",
  description: "Short description.",
  highlights: [
    "Feature 1",
    "Feature 2",
  ],
  link: "https://live-demo.com",
  github: "https://github.com/username/repository",
  featured: true,
},
```

### Add anything else

Use the `achievements` array for:
- hackathons
- awards
- freelance work
- open-source contributions
- internships
- workshops
- publications
- speaking/events
- other achievements

The website will automatically create the section/card from the data.
