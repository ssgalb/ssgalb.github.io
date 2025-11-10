/* Sheldon Smith */
/* script.js */
/* 10/24/2025 */

/* Hamburger menu function */

function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
    menu.classList.toggle("is-active");
}
