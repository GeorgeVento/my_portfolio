# George-Leonidas Ventouratos | Junior Developer Portfolio

---

## Overview
Personal portfolio of **George-Leonidas Ventouratos**, a final-year Open Software Systems student at SAEK Aigaleo, looking for a junior developer role.  
Built from scratch with vanilla HTML, CSS, and JavaScript — no frameworks, no CMS.

Live at: [georgevento.github.io/my_portfolio](https://georgevento.github.io/my_portfolio)

---

## Features
- **Hero Section** — Typing animation, available-for-hire badge, CV download
- **About Section** — Bio, info pills, socials, CV download
- **Tech Stack Section** — 8 skills with brand colors on hover
- **Projects Section** — Data-driven cards loaded from `data/projects.json`, filter buttons (All / Web / App), skeleton loader while fetching
- **Contact Section** — Form with real-time validation and EmailJS integration (notification + auto-reply)
- **Footer** — Quick links, social media

---

## Technologies
- **Front-End**: HTML5, CSS3, JavaScript (ES Modules, top-level await)
- **Libraries**: Font Awesome, Google Fonts (Inter), EmailJS
- **Responsive**: Mobile-first, tested across breakpoints (360px → 1200px+)
- **Accessibility**: Skip link, aria-labels, `prefers-reduced-motion` support

---

## Adding a New Project
Edit `data/projects.json` and add an entry — no HTML or JS changes needed:

```json
{
  "id": "unique-id",
  "title": "Project Title",
  "icon": "🎯",
  "featured": false,
  "badges": [],
  "tags": ["HTML", "CSS", "JavaScript"],
  "description": "Short description of what this does.",
  "category": "web",
  "demo": "https://...",
  "github": "https://github.com/GeorgeVento/..."
}
```

Fields `demo` and `github` are optional — omit either if not available.  
For a new filter category, add a `<button class="filter-btn" data-filter="category">` in `index.html`.

---

## Project Structure
```
my_portfolio/
├── index.html              # Main page (all sections)
├── success.html            # Contact form success page
├── CV_ENG.pdf              # Downloadable CV
├── data/
│   └── projects.json       # Project data — edit this to add/update projects
├── img/
│   ├── profile.jpeg
│   └── favicon.ico
├── CSS/
│   ├── base.css            # CSS variables, typography, animations, utilities
│   ├── header.css          # Sticky header, nav, hamburger menu
│   ├── hero.css            # Hero section, typing animation, orb effects
│   ├── about.css           # About layout, profile image, pills
│   ├── skills.css          # Skills grid, icon colors
│   ├── projects.css        # Project cards, filter buttons, skeleton loader
│   ├── contact.css         # Contact form, validation states
│   ├── footer.css          # Footer layout, socials
│   └── navigation.css      # Scroll-to-top, skip link, reduced-motion
└── js/
    ├── loadProjects.js     # Fetches projects.json and renders cards dynamically
    ├── projectFilters.js   # Filter buttons logic (All / Web / App)
    ├── headerScroll.js     # Scrolled class on header
    ├── scrollToTop.js      # Scroll-to-top button
    ├── mobileMenu.js       # Hamburger menu, overlay, keyboard close
    ├── smoothScroll.js     # Smooth anchor scrolling
    ├── formValidation.js   # Real-time input validation
    └── emailJS.js          # EmailJS send + auto-reply
```
