export function initScrollToTop() {
    const scrollBtn = document.getElementById('scrollToTopBtn');
    const footer = document.querySelector('.modern-footer');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });

    if (footer) {
        const obs = new IntersectionObserver(
            ([entry]) => scrollBtn.classList.toggle('above-footer', entry.isIntersecting),
            { threshold: 0 }
        );
        obs.observe(footer);
    }

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}