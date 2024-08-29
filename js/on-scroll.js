 // Function to check if an element is near or in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) * 0.9 // Trigger when the section is within 75% of the viewport height
    );
}

// Function to reveal elements when they enter the viewport
function revealOnScroll() {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
        if (isInViewport(section)) {
        section.classList.add("visible");
        }
    });
}

// Listen for scroll events
window.addEventListener("scroll", revealOnScroll);

// Run the function once on page load
revealOnScroll();