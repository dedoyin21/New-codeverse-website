// Select the SVG icon and the dropdown menu
const menuIcon = document.getElementById("menuicon");
const dropdownMenu = document.querySelector(".dropdown-menu");

// Toggle the dropdown menu when the SVG icon is clicked
menuIcon.addEventListener("click", () => {
    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none"; // Hide the menu
    } else {
        dropdownMenu.style.display = "block"; // Show the menu
    }
});
// Close the dropdown when clicking outside of it
document.addEventListener("click", (event) => {
    if (!menuIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = "none"; // Hide the menu
    }
});
