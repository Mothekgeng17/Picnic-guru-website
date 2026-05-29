```javascript id="luxuryjs001"
/* =========================
   WEBSITE LOADED MESSAGE
========================= */

console.log("Mo' The Picnic Guru Website Loaded Successfully");

/* =========================
   SMOOTH FADE-IN ANIMATION
========================= */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        const screenPosition = window.innerHeight / 1.2;

        if(sectionTop < screenPosition){

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});

/* =========================
   INITIAL SECTION STYLING
========================= */

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 1s ease";
});

/* =========================
   BUTTON HOVER EFFECT
========================= */

const buttons = document.querySelectorAll(".hero-btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.05)";
    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";
    });
});

/* =========================
   GALLERY IMAGE EFFECT
========================= */

const galleryImages = document.querySelectorAll(".gallery-card img");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        image.classList.toggle("active-image");
    });
});

/* =========================
   WELCOME ALERT
========================= */

window.onload = function(){

    console.log("Welcome to Mo' The Picnic Guru");
};
```
