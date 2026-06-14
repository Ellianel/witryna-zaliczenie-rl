// Podstawowy skrypt portalu Runo Leśne
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portal Runo Leśne zainicjalizowany.');
    
    // Automatyczny rok w stopce
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }



     // Dark Mode Toggle (Zadanie #9)
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-bs-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-bs-theme', newTheme);
            themeToggle.querySelector('i').classList.toggle('bi-sun-fill');
            themeToggle.querySelector('i').classList.toggle('bi-moon-stars-fill');

            const carousel = document.getElementById('carouselAuthors');
            if (carousel) {
                if (newTheme === 'dark') {
                    carousel.classList.remove('carousel-dark');
                } else {
                    carousel.classList.add('carousel-dark');
                }
            }

            const hero = document.getElementById('hero');
            if (hero) {
                if (newTheme === 'dark') {
                    hero.classList.remove('bg-primary');
                    hero.classList.add('bg-dark');
                } else {
                    hero.classList.remove('bg-dark');
                    hero.classList.add('bg-primary');
                }
            }
        });
    }
    
});
