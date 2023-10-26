document.addEventListener("DOMContentLoaded", function () {
    const programs = document.getElementById("programs");
    const barsIcon = document.querySelector(".fa-solid.fa-bars");
    const closeIcon = document.querySelector(".fa.fa-close");

    programs.addEventListener("click", function () {
        if (closeIcon.style.display === "inline") {
            // If the close icon is visible, hide it when "Programs" is clicked
            closeIcon.style.display = "none";
            barsIcon.style.display = "inline";
        }
    });

    barsIcon.addEventListener("click", function () {
        if (closeIcon.style.display === "none") {
            // If the close icon is not visible, show it when the bars icon is clicked
            closeIcon.style.display = "inline";
            barsIcon.style.display = "none";
        }
    });

    closeIcon.addEventListener("click", function () {
        // When the close icon is clicked, switch back to the bars icon
        closeIcon.style.display = "none";
        barsIcon.style.display = "inline";
    });
});

