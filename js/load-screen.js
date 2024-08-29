window.addEventListener("load", function () {
    const loadingScreen = document.getElementById("loading-screen");
    const mainContent = document.getElementById("main-content");

    // Hide the loading screen
    loadingScreen.style.display = "none";

    // Show the main content
    mainContent.style.display = "block";

    // Add a class to fade in the content
    mainContent.classList.add("loaded");
});