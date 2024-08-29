// Select all small images
const smallImages = document.querySelectorAll(".small-image");

// Add click event listeners to each small image
smallImages.forEach((image) => {
image.addEventListener("click", function () {
    // Get the source of the clicked image
    const imgSrc = this.src;

    // Set the big image source to the clicked image source
    const bigImage = document.getElementById("bigImage");
    bigImage.src = imgSrc;
});
});

document.addEventListener("DOMContentLoaded", function () {
    const bigImage = document.getElementById("bigImage");

    function adjustImageSize() {
        if (bigImage.naturalWidth > bigImage.naturalHeight) {
        // Landscape orientation
        bigImage.classList.remove("portrait");
        bigImage.style.width = "100%";
        bigImage.style.height = "auto";
        } else {
        // Portrait orientation
        bigImage.classList.add("portrait");
        bigImage.style.height =
            "500px"; /* Match the height of landscape images */
        bigImage.style.width = "auto";
        }
    }

    // Adjust the size once the image is fully loaded
    bigImage.onload = adjustImageSize;

    // Adjust the size on window resize
    window.addEventListener("resize", adjustImageSize);
});