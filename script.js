// Smooth Scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Scroll Interactions
document.addEventListener("DOMContentLoaded", function () {
    let videoFrame = document.querySelector("#hero iframe");
    if (videoFrame) {
        let videoID = "UUhxiIrQqLY";
        videoFrame.src = `https://www.youtube.com/embed/${videoID}`;
    }

    const hero = document.getElementById('hero');
    const pairs = document.querySelectorAll('.scroll-pair');
    const progressBar = document.getElementById('progress-bar');
    const serviceItems = document.querySelectorAll('.service-item');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const engagementCards = document.querySelectorAll('.engagement-card');

    function checkScroll() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // Progress Bar
        const scrollPercent = (scrollPosition / (documentHeight - windowHeight)) * 100;
        progressBar.style.width = `${scrollPercent}%`;

        // Hero Section
        const heroTop = hero.getBoundingClientRect().top;
        if (heroTop < windowHeight * 0.8) {
            hero.classList.add('active');
        } else {
            hero.classList.remove('active');
        }

        // Scroll Pairs
        pairs.forEach(pair => {
            const pairTop = pair.getBoundingClientRect().top;
            const pairBottom = pair.getBoundingClientRect().bottom;
            if (pairTop < windowHeight * 0.8 && pairBottom > 0) {
                pair.classList.add('active');
            } else {
                pair.classList.remove('active');
            }
        });

        // Service Items
        serviceItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < windowHeight * 0.8) {
                setTimeout(() => {
                    item.classList.add('active');
                }, item.getAttribute('data-delay'));
            }
        });

        // Gallery Items
        galleryItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < windowHeight * 0.8) {
                item.classList.add('active');
            }
        });

        // Engagement Cards
        engagementCards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < windowHeight * 0.8) {
                setTimeout(() => {
                    card.classList.add('active');
                }, index * 100);
            }
        });
    }

    checkScroll();
    window.addEventListener('scroll', checkScroll);
});