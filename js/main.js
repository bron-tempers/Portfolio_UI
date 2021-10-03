"use strict";

/* burger menu */
const burgerMenu = document.querySelector(".nav-menu"),
      burgerButton = document.querySelector(".menu-button"),
      burgerButtonLines = document.querySelectorAll(".menu-button__line");

if (burgerButton) {
    burgerButton.addEventListener("click", () => {
        burgerMenu.classList.toggle("nav-menu--active");
        for (let i = 0; i < burgerButtonLines.length; i++) {
            burgerButtonLines[i].classList.toggle("menu-button__line--active")
        }
        document.body.classList.toggle("body--lock");
    })
}