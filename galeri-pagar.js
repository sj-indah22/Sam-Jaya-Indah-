document.addEventListener('DOMContentLoaded', () => {
    
// --- 1. Fungsi Toggle Mobile Menu ---
const burger = document.querySelector('.burger');
const mobileNav = document.querySelector('.mobile-nav');
const mobileClose = document.querySelector('.mobile-close');
const previewBox = document.getElementById("imgPreview");
const previewImg = document.getElementById("previewImg");
const closePreview = document.querySelector(".close-preview");

document.querySelectorAll(".gallery-item img, .previewable").forEach(img => {
    img.addEventListener("click", () => {
        previewImg.src = img.src;
        previewBox.style.display = "flex";
    });
});

closePreview.addEventListener("click", () => {
    previewBox.style.display = "none";
});

// Klik area gelap = tutup
previewBox.addEventListener("click", (e) => {
    if (e.target === previewBox) {
        previewBox.style.display = "none";
    }
});

 if (burger && mobileNav) {
        burger.addEventListener('click', () => {
            mobileNav.classList.add('active');
        });

        mobileClose.addEventListener('click', () => {
            mobileNav.classList.remove('active');
        });
    }

    // --- 2. Animasi Muncul (Scroll Reveal) untuk Payment Card ---
    const revealElement = document.querySelector('.payment-card');
    
    const observerOptions = {
        threshold: 0.2 // Animasi jalan saat 20% elemen terlihat di layar
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    if (revealElement) {
        // Set style awal via JS agar tetap bisa diakses jika JS mati
        revealElement.style.opacity = '0';
        revealElement.style.transform = 'translateY(30px)';
        revealElement.style.transition = 'all 0.8s ease-out';
        
        revealObserver.observe(revealElement);
    }

});
