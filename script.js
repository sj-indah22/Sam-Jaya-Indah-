document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Mobile Navigation Toggle ---
    const burger = document.querySelector('.burger');
    const mobileNav = document.querySelector('.mobile-nav');
    const closeNav = document.querySelector('.mobile-close');
    const mobileLinks = document.querySelectorAll('.mobile-nav a');

    burger.addEventListener('click', () => {
        mobileNav.classList.add('active');
    });

    closeNav.addEventListener('click', () => {
        mobileNav.classList.remove('active');
    });

    // Tutup nav saat link diklik
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
        });
    });

    // --- 2. Scroll Animation (Reveal on Scroll) ---
    const reveal = () => {
        const reveals = document.querySelectorAll('.card, .tentang-box, .section-header');
        
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 100;

            if (elementTop < windowHeight - elementVisible) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state untuk animasi
    const initAnimation = () => {
        const elementsToAnimate = document.querySelectorAll('.card, .tentang-box, .section-header');
        elementsToAnimate.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease-out';
        });
    };

    initAnimation();
    window.addEventListener('scroll', reveal);
    reveal(); // Jalankan sekali saat load

    // --- 3. Navbar Background Change on Scroll ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 5%';
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            navbar.style.padding = '15px 5%';
            navbar.style.background = '#ffffff';
        }
    });

});