const burger = document.querySelector(".burger");
const mobileNav = document.querySelector(".mobile-nav");

// Toggle mobile menu
burger.addEventListener("click", () => {
    mobileNav.classList.toggle("show");
    burger.classList.toggle("active");
});

// Close menu saat link diklik (mobile)
const mobileLinks = document.querySelectorAll(".mobile-nav a");
mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileNav.classList.remove("show");
        burger.classList.remove("active");
    });
});

// Highlight active link
// Ganti bagian Highlight active link dengan ini:
const currentPage = window.location.pathname.split("/").pop() || "index.html";

const allLinks = document.querySelectorAll(".nav-links a, .mobile-nav a");
allLinks.forEach(link => {
    const href = link.getAttribute("href");
    // Cek jika href sama dengan halaman saat ini
    if (href === currentPage) {
        link.classList.add("active");
    }
});

const mobileClose = document.querySelector(".mobile-close");

mobileClose.addEventListener("click", () => {
    mobileNav.classList.remove("show");
    burger.classList.remove("active");
});

// Klik di luar mobile menu menutup menu
document.addEventListener("click", (e) => {
    if (mobileNav.classList.contains("show") &&
        !mobileNav.contains(e.target) &&
        !burger.contains(e.target)) {
        mobileNav.classList.remove("show");
        burger.classList.remove("active");
    }
});
