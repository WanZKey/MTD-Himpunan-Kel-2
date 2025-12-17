const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

function revealOnScroll() {
    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        const trigger = window.innerHeight - 100;
        if (top < trigger) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();