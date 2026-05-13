export function initSmoothScroll() {
    const headerEl = document.getElementById('header');
    const headerH = () => headerEl?.offsetHeight ?? 68;

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (!target) return;

            // Wait for mobile menu to close and layout to settle before scrolling
            setTimeout(() => {
                const top = target.getBoundingClientRect().top + window.pageYOffset - headerH();
                window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
            }, 50);
        });
    });
}
