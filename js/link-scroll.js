 // link scroll section
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetId = this.getAttribute("href"); // Get the href attribute
        const targetElement = document.querySelector(targetId); // Select the target element

        if (targetElement) {
        let targetPosition; // Declare variable outside the blocks
        if (window.matchMedia("(orientation: landscape)").matches) {
            targetPosition =
            targetElement.getBoundingClientRect().top +
            window.pageYOffset -
            70; // Calculate position with margin for landscape orientation
        } else if (window.matchMedia("(orientation: portrait)").matches) {
            targetPosition =
            targetElement.getBoundingClientRect().top +
            window.pageYOffset -
            40; // Calculate position with margin for portrait orientation
        }
        window.scrollTo({
            top: targetPosition,
            behavior: "smooth", // Smooth scroll
        });
        }
    });
    });
});