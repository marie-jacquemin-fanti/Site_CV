window.addEventListener('load', () => {
    history.replaceState(null, '', window.location.pathname);
});

const header = document.querySelector('.header');
const barre = document.querySelector('.navigation-barre-sticky');

const observer = new IntersectionObserver(
    ([entry]) => {
        if (entry.isIntersecting) {
            barre.classList.remove('is-fixed');
        } else {
            barre.classList.add('is-fixed');
        }
    }
);

observer.observe(header);

