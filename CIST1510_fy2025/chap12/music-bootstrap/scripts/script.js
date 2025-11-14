/*
    Student Name:S. Smith
    File Name: script.js
    Date: 11/13/25
*/

/* Hamburger menu function */
function hamburger () {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

//jQuery for hero image to consume the header window space
$(document).ready(function(){
    $('.hero').height($(window).height());
});