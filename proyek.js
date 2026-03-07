/* --- element refs --- */
const burger = document.querySelector(".burger");
const mobileNav = document.querySelector(".mobile-nav");
const mobileClose = document.querySelector(".mobile-close");
const slider = document.querySelector('.features-slider');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');


/* safety */
if (burger && mobileNav) {

  /* toggle function */
  function openMobile() {
    mobileNav.classList.add("show");
    burger.classList.add("active");
    mobileNav.setAttribute("aria-hidden","false");
  }
  function closeMobile() {
    mobileNav.classList.remove("show");
    burger.classList.remove("active");
    mobileNav.setAttribute("aria-hidden","true");
  }

  /* click burger */
  burger.addEventListener("click", (e) => {
    e.stopPropagation(); // penting! jangan biarkan event jatuh ke document
    mobileNav.classList.toggle("show");
    burger.classList.toggle("active");
  });

  /* keyboard accessibility: Enter / Space */
  burger.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      burger.click();
    }
  });

  /* close button inside mobile */
  if (mobileClose) {
    mobileClose.addEventListener("click", (e) => {
      e.stopPropagation();
      closeMobile();
    });
  }

  /* close when a mobile link clicked */
  document.querySelectorAll(".mobile-nav a").forEach(a => {
    a.addEventListener("click", () => {
      closeMobile();
    });
  });

  /* click outside mobile menu -> close */
  document.addEventListener("click", (e) => {
    if (mobileNav.classList.contains("show") &&
        !mobileNav.contains(e.target) &&
        !burger.contains(e.target)) {
      closeMobile();
    }
  });

  /* ESC to close */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileNav.classList.contains("show")) {
      closeMobile();
    }
  });
}

/* --- active link highlighting (robust) --- */
(function markActive(){
  let path = window.location.pathname.split("/").pop().split("?")[0].split("#")[0];
  if (!path) path = "index.html";

  document.querySelectorAll(".nav-links a, .mobile-nav a").forEach(link=>{
    const href = (link.getAttribute("href") || "").split("?")[0].split("#")[0];
    if (href === path) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
})();

let counter = 0;

nextBtn.addEventListener('click', () => {
    if (counter < 2) { // Sesuaikan jumlah slide
        counter++;
        slider.style.transform = `translateX(${-counter * 220}px)`;
    }
});

prevBtn.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
        slider.style.transform = `translateX(${-counter * 220}px)`;
    }
});
