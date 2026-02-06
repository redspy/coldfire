document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        revealElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    // Initial check
    revealOnScroll();

    // Sticky Header Effect
    const header = document.querySelector('.site-header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            header.style.background = 'rgba(10, 10, 10, 0.8)';
            return;
        }

        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            // Scroll Down
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
            header.style.transform = 'translateY(-100%)';
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            // Scroll Up
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
            header.style.transform = 'translateY(0)';
            header.style.background = 'rgba(10, 10, 10, 0.95)';
        }
        lastScroll = currentScroll;
    });

    // Mobile Menu Toggle (Basic implementation)
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('.main-nav');

    menuIcon.addEventListener('click', () => {
        // Toggle logic for mobile menu
        // For now, we'll just toggle a class to show/hide
        // Note: CSS for .active state needs to be added for full mobile menu support
        if (nav.style.display === 'block') {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'block';
            nav.style.position = 'absolute';
            nav.style.top = '80px';
            nav.style.left = '0';
            nav.style.width = '100%';
            nav.style.background = '#000';
            nav.style.padding = '20px';
        }
    });
});
