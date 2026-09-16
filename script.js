"use strict";

const imageButtons = document.querySelectorAll(".image-button");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeButton = document.getElementById("closeButton");

function openLightbox(imageSource, imageAlt) {
    lightboxImage.src = imageSource;
    lightboxImage.alt = imageAlt;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    closeButton.focus();
}

function closeLightbox() {
    lightbox.hidden = true;
    lightboxImage.src = "";
    lightboxImage.alt = "";
    document.body.style.overflow = "";
}

imageButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const imageSource = button.dataset.image;
        const imageAlt = button.dataset.alt;

        openLightbox(imageSource, imageAlt);
    });
});

closeButton.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !lightbox.hidden) {
        closeLightbox();
    }
});