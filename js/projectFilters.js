export function initProjectFilters() {
    const filterBtns   = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach((card, i) => {
                const categories = card.getAttribute('data-category').split(' ');
                const matches = filter === 'all' || categories.includes(filter);

                if (matches) {
                    card.classList.remove('hidden');
                    // Reset then re-trigger smooth entrance with stagger
                    card.classList.remove('in-view');
                    card.style.transitionDelay = '';
                    // Force reflow so transition replays
                    void card.offsetHeight;
                    card.style.transitionDelay = (i * 80) + 'ms';
                    requestAnimationFrame(() => card.classList.add('in-view'));
                } else {
                    card.style.transitionDelay = '';
                    card.classList.add('hidden');
                }
            });
        });
    });
}
