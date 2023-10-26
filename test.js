// Select the SVG icon and the dropdown menu
const flist = document.getElementById("f-lists");
const menutoggle = document.getElementById()

// Toggle the dropdown menu when the SVG icon is clicked
flist.addEventListener("click", () => {
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

