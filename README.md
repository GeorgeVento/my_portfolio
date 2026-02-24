# George-Leonidas Ventouratos | Full Stack Developer Portfolio

---

## 🌟 Overview
This is the personal portfolio of **George-Leonidas Ventouratos**, a Computer Science student and Full Stack Web Developer.  
The website highlights his **skills, projects, certifications**, and offers a way to **get in touch**.  
It focuses on **clean, maintainable code**, **responsive design**, and **modern web development practices**.

---

## 🛠 Features
- **Hero Section**: Introduction with name, tagline, and CTA button linking to projects.
- **About Section**: Profile picture, short bio, CV download, and education/specialization in Web Development & Database Management.
- **Skills Section**: Core technologies showcased:
  - HTML5, CSS3, JavaScript, Python, SQL, PHP, C & C++
- **Certifications Section**: Professional certifications and achievements.
- **Projects Section**: Filterable GitHub projects by category (PHP, JavaScript, Database):
  - **Insurance Calculator** (PHP, HTML, CSS)
- **Contact Section**: Contact form with validation and EmailJS integration.
- **Footer**: About, quick links, and social media connections (GitHub, LinkedIn, Email).

---

## 💻 Technologies
- **Front-End**: HTML5, CSS3, JavaScript (ES Modules)
- **Back-End**: PHP, SQL, MySQL
- **Libraries & Tools**:
  - Font Awesome (Icons)
  - Google Fonts (Inter)
  - EmailJS (Contact form)
- **Responsive Design**: Fully mobile-friendly and accessible

---

## 📂 Project Structure
```text
portfolio/
├── index.html              # Main HTML containing all sections: hero, about, skills, projects, contact, footer
├── CV_ENG.pdf              # PDF version of CV for download
├── img/                    # Images used throughout the website
│   ├── profile.jpeg        # Profile picture in About section
│   └── favicon.ico         # Browser tab favicon
├── CSS/                    # Stylesheets for different sections
│   ├── base.css            # Base styles: typography, variables, general elements
│   ├── header.css          # Header section styles: logo, navigation, sticky behavior
│   ├── hero.css            # Hero section styles: intro and CTA button
│   ├── about.css           # About section layout and profile image styling
│   ├── skills.css          # Skills section grid, icons, and labels
│   ├── certifications.css  # Certifications section card styles
│   ├── projects.css        # Projects cards, filter buttons, hover effects
│   ├── contact.css         # Contact form layout, inputs, buttons, validation
│   ├── footer.css          # Footer layout, links, social media icons
│   └── navigation.css      # Hamburger menu and mobile overlay styles
└── js/                     # Modular JavaScript files
    ├── headerScroll.js       # Adds/removes 'scrolled' class on header on scroll
    ├── scrollToTop.js        # Controls scroll-to-top button visibility & smooth scroll
    ├── mobileMenu.js         # Hamburger menu toggle, overlay click, mobile nav behavior
    ├── projectFilters.js     # Filters project cards by category (PHP, JS, Database)
    ├── smoothScroll.js       # Smooth scrolling for anchor links
    ├── formValidation.js     # Real-time validation for contact form fields
    └── emailJS.js            # EmailJS integration for notifications and auto-replies
