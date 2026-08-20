/* ==========================================
   CAMPUS LEADERSHIP JAVASCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* ==========================================
       SMOOTH SCROLLING
    ========================================== */

    const navigationLinks =
        document.querySelectorAll("nav a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetID =
                this.getAttribute("href");

            if (targetID.startsWith("#")) {

                const target =
                    document.querySelector(targetID);

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        });

    });


    /* ==========================================
       ACTIVE NAVIGATION
    ========================================== */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    window.addEventListener("scroll", function () {

        let currentSection = "top";


        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 150;

            if (
                window.scrollY >= sectionTop
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navigationLinks.forEach(function (link) {

            link.classList.remove("active");


            const linkTarget =
                link.getAttribute("href");


            if (
                linkTarget === "#" + currentSection
            ) {

                link.classList.add("active");

            }

        });

    });


    /* ==========================================
       CARD SCROLL ANIMATION
    ========================================== */

    const cards =
        document.querySelectorAll(
            ".official-card"
        );


    cards.forEach(function (card) {

        card.style.opacity = "0";

        card.style.transform =
            "translateY(30px)";

    });


    const cardObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        entry.target.style.transition =
                            "opacity 0.6s ease, transform 0.6s ease";

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    cards.forEach(function (card) {

        cardObserver.observe(card);

    });


    /* ==========================================
       IMAGE ERROR HANDLING
    ========================================== */

    const images =
        document.querySelectorAll(
            ".official-card img"
        );


    images.forEach(function (image) {

        image.addEventListener(
            "error",
            function () {

                const errorMessage =
                    document.createElement("div");

                errorMessage.className =
                    "image-error";

                errorMessage.textContent =
                    "Image not available";

                this.replaceWith(
                    errorMessage
                );

            }
        );

    });


    /* ==========================================
       IMAGE LOADING
    ========================================== */

    images.forEach(function (image) {

        image.addEventListener(
            "load",
            function () {

                this.classList.add(
                    "loaded"
                );

            }
        );

    });


    /* ==========================================
       CURRENT YEAR
    ========================================== */

    const copyright =
        document.querySelector(
            ".copyright"
        );


    if (copyright) {

        const year =
            new Date().getFullYear();

        copyright.innerHTML =
            "© " +
            year +
            " ISUFST - San Enrique Campus";

    }


    /* ==========================================
       WELCOME MESSAGE
    ========================================== */

    console.log(
        "ISUFST San Enrique Campus Leadership Website Loaded Successfully."
    );

});