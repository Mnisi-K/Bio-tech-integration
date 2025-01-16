// Select elements
const hamburgerMenu = document.getElementById("hamburger-menu");
const sidePanel = document.querySelector(".side-panel");
const mainContent = document.getElementById("main-content");

// Function to toggle the side panel
function toggleSidePanel() {
    sidePanel.classList.toggle("show"); // Add or remove the 'show' class
    mainContent.classList.toggle("dim"); // Add or remove the 'dim' class
}

// Event listener for the hamburger menu
hamburgerMenu.addEventListener("click", toggleSidePanel);

// Optional: Close the panel when clicking outside (on the main content)
mainContent.addEventListener("click", () => {
    if (sidePanel.classList.contains("show")) {
        toggleSidePanel();
    }
});