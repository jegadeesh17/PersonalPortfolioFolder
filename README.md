# Personal Portfolio

Jegadeesh's portfolio site: projects with measured results, education, skills, certifications and a downloadable resume. Built with React and Vite.

Live site: https://jegadeesh-portfolio.vercel.app/

## Features

- **Projects:** cards with screenshots, results and links to each repository and live demo.
- **Sections:** hero, skills, education, certifications and contact.
- **Resume:** a downloadable PDF served from `public/resume.pdf`.
- **Certificates:** PDF certificates in `public/certificates/`, with `convert_certs.py` to render their first pages as images.

## Quick start

Developed with Node.js 24.

```bash
git clone https://github.com/jegadeesh17/PersonalPortfolioFolder.git
cd PersonalPortfolioFolder
npm install
npm run dev
```

## Usage

```bash
npm run build     # production build into dist/
npm run preview   # serve the production build locally
npm run lint      # Oxlint
```

Project cards are defined in `src/components/Projects.jsx`; their images live in `public/projects/`.

## Running tests

There are no automated tests. `npm run build` and `npm run lint` are the checks.

## Configuration

None. The site needs no environment variables.

## Project structure

```
public/            resume, favicon, profile photo, certificates, project images
src/components/    one component and stylesheet per section
src/               app shell and global styles
convert_certs.py   renders certificate PDFs to images (needs PyMuPDF; set the folder path at the top first)
```

## How this was built

Designed and built by jegadeesh17 with Claude Code. I reviewed and tested all code.

## License

No license granted. The content is personal.
