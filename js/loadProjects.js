const BADGE_HTML = {
    founder:  `<span class="badge badge-founder"><i class="fas fa-crown"></i> Founder &amp; Lead Dev</span>`,
    featured: `<span class="badge badge-featured">Featured</span>`,
    soon:     `<span class="badge badge-soon">Coming Soon</span>`
};

function buildCard(p) {
    const badges = (p.badges || []).map(b => BADGE_HTML[b] || '').join('');
    const badgesHtml = badges ? `<div class="card-badges">${badges}</div>` : '';

    const tags = (p.tags || [])
        .map(t => `<span class="tech-tag">${t}</span>`)
        .join('');

    let links = '';
    if (p.comingSoon) {
        links = `<span class="project-link-soon"><i class="fas fa-clock"></i> Coming Soon</span>`;
    } else {
        if (p.demo)   links += `<a href="${p.demo}"   target="_blank" rel="noopener" class="project-link project-link-demo"><i class="fas fa-external-link-alt"></i> Live Demo</a>`;
        if (p.github) links += `<a href="${p.github}" target="_blank" rel="noopener" class="project-link project-link-github"><i class="fab fa-github"></i> GitHub</a>`;
    }

    return `
        <div class="project-card${p.featured ? ' featured' : ''}" data-category="${p.category}">
            <div class="card-header">
                <span class="card-icon">${p.icon}</span>
                ${badgesHtml}
            </div>
            <h3>${p.title}</h3>
            <div class="tech-tags-container">${tags}</div>
            <p>${p.description}</p>
            <div class="project-links">${links}</div>
        </div>`;
}

function observeCards() {
    const obs = new IntersectionObserver(
        (entries) => {
            entries.forEach((e, i) => {
                if (e.isIntersecting) {
                    setTimeout(() => e.target.classList.add('in-view'), i * 100);
                    obs.unobserve(e.target);
                }
            });
        },
        { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );
    document.querySelectorAll('.project-card').forEach(el => obs.observe(el));
}

function showSkeletons(grid, count) {
    grid.innerHTML = Array(count).fill('<div class="project-skeleton"></div>').join('');
}

function showError(grid) {
    grid.innerHTML = `
        <div class="projects-error">
            <i class="fas fa-exclamation-circle"></i>
            <p>Could not load projects. Please refresh the page.</p>
        </div>`;
}

export async function loadProjects() {
    const grid = document.getElementById('project-grid');
    if (!grid) return;

    showSkeletons(grid, 4);

    try {
        const res = await fetch('./data/projects.json');
        if (!res.ok) throw new Error('fetch failed');
        const projects = await res.json();
        grid.innerHTML = projects.map(buildCard).join('');
        observeCards();
    } catch {
        showError(grid);
    }
}
