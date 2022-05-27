"use strict";

// selecting the element
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const clickableImages = document.querySelectorAll(".container_image img");
const modalImage = document.querySelector(".modal img");

// openModal
const openModal = function (src) {
  modalImage.src = src;
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// closeModal
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// onClicking the images
for (let i = 0; i < clickableImages.length; i++) {
  clickableImages[i].addEventListener("click", function () {
    openModal(this.src);
  });
}

overlay.addEventListener("click", closeModal);
