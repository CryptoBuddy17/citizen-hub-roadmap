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
    const rolloutItems = document.querySelectorAll('.rollout-timeline .timeline-item');

    // Gallery Navigation
    const galleryContainer = document.querySelector('.gallery-container');
    const prevButton = document.querySelector('.gallery-prev');
    const nextButton = document.querySelector('.gallery-next');

    if (galleryContainer && prevButton && nextButton) {
        const scrollAmount = 315; // Width of .gallery-item (300px) + margin-right (15px)

        prevButton.addEventListener('click', () => {
            galleryContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        nextButton.addEventListener('click', () => {
            galleryContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    }

    function checkScroll() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        const header = document.querySelector('header');
        if (scrollPosition > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    
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

        // Gallery Items (no longer needed for size change, but kept for potential future use)
        galleryItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < windowHeight * 0.8) {
                item.classList.add('active');
            }
        });

        // Rollout Timeline Items
        rolloutItems.forEach((item, index) => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < windowHeight * 0.8) {
                setTimeout(() => {
                    item.classList.add('active');
                }, index * 200); // Staggered animation: 200ms delay between each item
            }
        });
    }

    checkScroll();
    window.addEventListener('scroll', checkScroll);
});