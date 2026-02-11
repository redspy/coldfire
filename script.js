document.addEventListener('DOMContentLoaded', () => {
    // 1. Overlay Menu Injection & Logic
    const initOverlayMenu = () => {
        // Inject Menu HTML
        const menuHTML = `
            <div class="overlay-menu">
                <nav>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="glasses.html">Glasses</a></li>
                        <li><a href="about.html">About</a></li>
                    </ul>
                </nav>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', menuHTML);

        // Toggle Logic
        const menuIcon = document.querySelector('.menu-icon');
        const overlayMenu = document.querySelector('.overlay-menu');
        const menuLinks = document.querySelectorAll('.overlay-menu a');

        if (menuIcon && overlayMenu) {
            menuIcon.addEventListener('click', () => {
                menuIcon.classList.toggle('active');
                overlayMenu.classList.toggle('active');
            });

            // Close menu when a link is clicked
            menuLinks.forEach(link => {
                link.addEventListener('click', () => {
                    menuIcon.classList.remove('active');
                    overlayMenu.classList.remove('active');
                });
            });
        }
    };

    initOverlayMenu();


    // 2. Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.scroll-reveal, .fade-in-up');

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
    revealOnScroll(); // Initial check


    // 3. Sticky Header Effect
    const header = document.querySelector('.site-header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll <= 0) {
            header.classList.remove('scroll-up', 'scroll-down');
            header.style.background = 'rgba(10, 10, 10, 0.8)';
            header.style.transform = 'translateY(0)';
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

    // 4. Image Lightbox (Preview)
    const initLightbox = () => {
        // Inject Lightbox HTML
        const lightboxHTML = `
            <div class="lightbox">
                <span class="lightbox-close">&times;</span>
                <img class="lightbox-content" src="" alt="Preview">
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', lightboxHTML);

        const lightbox = document.querySelector('.lightbox');
        const lightboxImg = document.querySelector('.lightbox-content');
        const closeBtn = document.querySelector('.lightbox-close');
        const projectImages = document.querySelectorAll('.project-img img');

        // Open Lightbox (Click & Touch)
        projectImages.forEach(img => {
            const openModal = (e) => {
                e.preventDefault(); // Prevent phantom clicks on touch
                e.stopPropagation();
                lightbox.classList.add('active');
                lightboxImg.src = img.src;
                document.body.style.overflow = 'hidden';
            };

            img.addEventListener('click', openModal);
            img.addEventListener('touchend', openModal);
        });

        // Close Lightbox (Click & Touch)
        const closeLightbox = (e) => {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        };

        closeBtn.addEventListener('click', closeLightbox);
        closeBtn.addEventListener('touchend', closeLightbox);

        // Close on click outside image
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox(e);
            }
        });

        lightbox.addEventListener('touchend', (e) => {
            if (e.target === lightbox) {
                closeLightbox(e);
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                closeLightbox();
            }
        });
    };

    initLightbox();
});
