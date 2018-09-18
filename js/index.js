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
  document.querySelector(".image-modal span").addEventListener("click", () => {
    modal.style.display = "none";
  });
}

modalClose();

// close img modal on img modal click
function modalCloseTwo() {
  modalImg.addEventListener("click", () => {
    modal.style.display = "none";
  });
}
modalCloseTwo();

// hide spinner on load event
window.addEventListener("load", () => {
  document.querySelector(".fullscreen-spinner").style.display = "none";
});

// mouse over img events

imgSpan[0].addEventListener("mouseover", () => {
  imgSpan[0].style.transform = "scale(1.1)";
  imgSpan[0].style.transition = "500ms ease-in-out";
});

imgSpan[0].addEventListener("mouseleave", () => {
  imgSpan[0].style.transform = "scale(1)";
});

// img two mouse over
imgSpan[1].addEventListener("mouseover", () => {
  imgSpan[1].style.transform = "scale(1.1)";
  imgSpan[1].style.transition = "500ms ease-in-out";
});

imgSpan[1].addEventListener("mouseleave", () => {
  imgSpan[1].style.transform = "scale(1)";
});

// img three mouse over

imgSpan[2].addEventListener("mouseover", () => {
  imgSpan[2].style.transform = "scale(1.1)";
  imgSpan[2].style.transition = "500ms ease-in-out";
});

imgSpan[2].addEventListener("mouseleave", () => {
  imgSpan[2].style.transform = "scale(1)";
});
