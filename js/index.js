// Your code goes here
const imgSpan = document.querySelectorAll(".modal-span img");
let img = document.querySelectorAll("img");
let modal = document.querySelector(".image-modal");
let modalImg = document.querySelector(".image-modal img");

imgSpan[0].addEventListener("click", () => {
  modal.style.display = "block";
  modalImg.src = img[3].src;
});

imgSpan[1].addEventListener("click", () => {
  modal.style.display = "block";
  modalImg.src = img[4].src;
});

imgSpan[2].addEventListener("click", () => {
  modal.style.display = "block";
  modalImg.src = img[5].src;
});

// close modal functions
// close modal on image modal span click
function modalClose() {
  document.querySelector(".image-modal span").addEventListener("click", e => {
    modal.style.display = "none";
    e.stopEventPropagation();
  });
  function modalCloseTwo() {
    modalImg.addEventListener("click", () => {
      modal.style.display = "none";
      e.stopEventPropagation();
    });
  }
  modalCloseTwo();
}

modalClose();

// close img modal on img modal click

// fade body in on load
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("body").style.animation = "fadeIn";
});

// scroll reveal animations
window.sr = ScrollReveal({ mobile: false });

sr.reveal(".logo-heading", {
  origin: "left",
  delay: 200,
  distance: "300px"
});

// prevent nav items from refreshing
const nav = document.querySelectorAll(".nav-container a");
nav.forEach(function(e) {
  e.preventDefault;
  // nav animations
  sr.reveal(e, {
    origin: "right",
    delay: 500,
    distance: "300px"
  });
});

sr.reveal(".home .intro", {
  origin: "left",
  delay: 800,
  distance: "600px"
});

const contentSection = document.querySelectorAll(".content-section");
sr.reveal(contentSection[0], {
  origin: "right",
  delay: 1200,
  distance: "600px"
});

sr.reveal(contentSection[1], {
  origin: "left",
  delay: 500,
  distance: "600px",
  viewFactor: 0.4
});

sr.reveal(".content-destination", {
  origin: "right",
  delay: 800,
  distance: "600px"
});

const destination = document.querySelectorAll(".destination");
sr.reveal(destination[0], {
  origin: "left",
  delay: 200,
  distance: "600px"
});
sr.reveal(destination[1], {
  origin: "bottom",
  delay: 400,
  distance: "600px"
});
sr.reveal(destination[2], {
  origin: "right",
  delay: 600,
  distance: "600px"
});
