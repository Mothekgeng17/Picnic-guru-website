/* ==========================================
   MO' THE PICNIC GURU - SCRIPT V2
========================================== */

console.log("Mo' The Picnic Guru Website Loaded Successfully");

/* ==========================================
   PAGE LOAD
========================================== */

window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

/* ==========================================
   SCROLL REVEAL
========================================== */

const sections = document.querySelectorAll("section");

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(section => {
    section.classList.add("fade-up");
    revealObserver.observe(section);
});

/* ==========================================
   BUTTON HOVER EFFECTS
========================================== */

document.querySelectorAll(".hero-btn").forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-5px) scale(1.05)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "translateY(0) scale(1)";
    });

});

/* ==========================================
   ANIMATED COUNTERS
========================================== */

const counters = document.querySelectorAll(".counter");

function animateCounter(counter) {

    const target = Number(counter.dataset.target);

    let current = 0;

    const increment = target / 80;

    const timer = setInterval(() => {

        current += increment;

        if (current >= target) {
            counter.innerText = target;
            clearInterval(timer);
        } else {
            counter.innerText = Math.floor(current);
        }

    }, 25);
}

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            animateCounter(entry.target);

            counterObserver.unobserve(entry.target);
        }

    });

});

counters.forEach(counter => {
    counterObserver.observe(counter);
});

/* ==========================================
   GALLERY FILTERS
========================================== */

const filterButtons = document.querySelectorAll(".gallery-filter");
const galleryCards = document.querySelectorAll(".gallery-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const category = button.dataset.filter;

        galleryCards.forEach(card => {

            if (
                category === "all" ||
                card.dataset.category === category
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});

/* ==========================================
   GALLERY SEARCH
========================================== */

const gallerySearch = document.getElementById("gallerySearch");

if (gallerySearch) {

    gallerySearch.addEventListener("keyup", () => {

        const search = gallerySearch.value.toLowerCase();

        galleryCards.forEach(card => {

            const text = card.innerText.toLowerCase();

            card.style.display =
                text.includes(search)
                    ? "block"
                    : "none";

        });

    });

}

/* ==========================================
   LIGHTBOX
========================================== */

const galleryImages = document.querySelectorAll(".gallery-card img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const closeLightbox = document.getElementById("closeLightbox");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        if (lightbox && lightboxImage) {

            lightbox.style.display = "flex";

            lightboxImage.src = image.src;
        }

    });

});

if (closeLightbox) {

    closeLightbox.addEventListener("click", () => {

        lightbox.style.display = "none";
    });

}

if (lightbox) {

    lightbox.addEventListener("click", () => {

        lightbox.style.display = "none";
    });

}

/* ==========================================
   CONTACT FORM PROGRESS
========================================== */

const bookingForm = document.getElementById("bookingForm");

const progressBar = document.getElementById("progressBar");

if (bookingForm && progressBar) {

    const inputs = bookingForm.querySelectorAll(
        "input, textarea, select"
    );

    inputs.forEach(input => {

        input.addEventListener("input", () => {

            let completed = 0;

            inputs.forEach(field => {

                if (field.value.trim() !== "") {
                    completed++;
                }

            });

            const percent =
                (completed / inputs.length) * 100;

            progressBar.style.width = percent + "%";

        });

    });

}

/* ==========================================
   CHARACTER COUNTER
========================================== */

const messageBox = document.getElementById("message");

const charCount = document.getElementById("charCount");

if (messageBox && charCount) {

    messageBox.addEventListener("input", () => {

        charCount.textContent =
            messageBox.value.length;

    });

}

/* ==========================================
   BUSINESS HOURS CHECKER
========================================== */

const businessStatus =
    document.getElementById("businessStatus");

if (businessStatus) {

    const currentHour = new Date().getHours();

    if (currentHour >= 8 && currentHour < 18) {

        businessStatus.innerHTML =
            "🟢 We are currently open.";

    } else {

        businessStatus.innerHTML =
            "🔴 We are currently closed.";

    }

}

/* ==========================================
   SERVICE ESTIMATOR
========================================== */

const estimateBtn =
    document.getElementById("estimateBtn");

if (estimateBtn) {

    estimateBtn.addEventListener("click", () => {

        const guests =
            Number(
                document.getElementById("guestCount")
                    .value
            );

        const result =
            document.getElementById("estimateResult");

        if (!guests || guests <= 0) {

            result.innerHTML =
                "Please enter a valid guest number.";

            return;
        }

        const estimate =
            guests * 250;

        result.innerHTML =
            "Estimated package from R" +
            estimate.toLocaleString();

    });

}

/* ==========================================
   CONTACT ESTIMATOR
========================================== */

const contactEstimateBtn =
    document.getElementById(
        "contactEstimateBtn"
    );

if (contactEstimateBtn) {

    contactEstimateBtn.addEventListener(
        "click",
        () => {

            const guests =
                Number(
                    document.getElementById(
                        "contactGuests"
                    ).value
                );

            const result =
                document.getElementById(
                    "contactEstimateResult"
                );

            if (!guests || guests <= 0) {

                result.innerHTML =
                    "Enter guest count.";

                return;
            }

            const estimate =
                guests * 250;

            result.innerHTML =
                "Estimated celebration cost: R" +
                estimate.toLocaleString();
        }
    );

}

/* ==========================================
   FAKE FORM SUCCESS
========================================== */

if (bookingForm) {

    bookingForm.addEventListener("submit", e => {

        e.preventDefault();

        const success =
            document.getElementById(
                "formSuccess"
            );

        if (success) {

            success.innerHTML =
                "Thank you! Your booking request has been prepared.";

        }

    });

}

/* ==========================================
   SCROLL TO TOP
========================================== */

const scrollTopBtn =
    document.getElementById("scrollTopBtn");

if (scrollTopBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            scrollTopBtn.style.display =
                "block";

        } else {

            scrollTopBtn.style.display =
                "none";

        }

    });

    scrollTopBtn.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}

/* ==========================================
   CURRENT YEAR
========================================== */

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}

console.log("Mo' The Picnic Guru JS V2 Loaded");
