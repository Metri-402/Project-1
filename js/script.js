/*
Student Name: Cahmetri Pryce
File Name: script.js
Date: 11/24/2026
*/

const popup = document.getElementById("imagepopup");
const popuplImg = document.getElementById("popupImg");
const closeBtn = document.querySelector(".close");

// Open popup when any image in .certif is clicked
if (popup && popupImg && closeBtn) {
    document.querySelectorAll(".certif img").forEach(img => {
        img.addEventListener("click", () => {
            popup.style.display = "flex";
            popupImg.src = img.src;
            popupImg.alt = img.alt;
        });
    });

    // Close popup when clicking the 'X' or outside the image
    closeBtn.addEventListener("click", () => popup.style.display = "none");
    popup.addEventListener("click", (e) => {
        if (e.target === popup) popup.style.display = "none";
    });
}

const hamburgerBtn = document.getElementById("hamburger-btn");
const navbar = document.getElementById("navbar");

if (hamburgerBtn && navbar) {
    hamburgerBtn.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
        if (!navbar.contains(e.target) && !hamburgerBtn.contains(e.target)) {
            navbar.classList.remove("active");
        }
    });
}






