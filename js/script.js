/* =========================
   WEBSITE LOADED
========================= */

console.log("Mo' The Picnic Guru Website Loaded Successfully");

/* =========================
   SCROLL REVEAL (SMOOTHER + MODERN)
========================= */

const sections = document.querySelectorAll("section");

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });

}, {
    threshold: 0.15
});

/* Initial state */
sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.9s ease";

    revealObserver.observe(section);
});

/* =========================
   NAVBAR ACTIVE LINK (ON SCROLL)
========================= */

const navLinks = document.querySelectorAll(".nav-links a");

const allSections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    allSections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (pageYOffset >= sectionTop - 150) {

            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");
        }
    });
});

/* =========================
   HERO BUTTON INTERACTION (SMOOTHER)
========================= */

const buttons = document.querySelectorAll(".hero-btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-5px) scale(1.05)";
    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0) scale(1)";
    });
});

/* =========================
   GALLERY IMAGE TOGGLE (IMPROVED)
========================= */

const galleryImages = document.querySelectorAll(".gallery-card img");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        // remove active from others (clean gallery feel)
        galleryImages.forEach(img => img.classList.remove("active-image"));

        image.classList.add("active-image");
    });
});

/* =========================
   PAGE LOAD ANIMATION TRIGGER
========================= */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

    console.log("Welcome to Mo' The Picnic Guru");
});
