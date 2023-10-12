// Select the SVG icon and the dropdown menu
const menuIcon = document.getElementById("menuicon");
const menuMobile = document.querySelector(".menuMobile"); // Corrected the class name

// Toggle the dropdown menu when the SVG icon is clicked
menuIcon.addEventListener("click", () => {
    if (menuMobile.style.display === "block") {
        menuMobile.style.display = "none"; // Hide the menu
    } else {
        menuMobile.style.display = "block"; // Show the menu
    }
});

// Close the dropdown when clicking outside of it
document.addEventListener("click", (event) => {
    if (!menuIcon.contains(event.target) && !menuMobile.contains(event.target)) {
        menuMobile.style.display = "none"; // Hide the menu
    }
});

