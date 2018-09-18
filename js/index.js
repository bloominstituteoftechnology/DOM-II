// Your code goes here
const imgSpan = document.querySelectorAll(".modal-span img");
let img = document.querySelectorAll("img");
let modal = document.querySelector(".image-modal");
let modalImg = document.querySelector(".image-modal img");

function modalClickOne() {
  imgSpan[0].addEventListener("click", () => {
    modal.style.display = "block";
    // fade modal in
    // $(".image-modal").fadeIn();
    // set image src
    modalImg.src = img[2].src;
  });
}

modalClickOne();

// close modal
function modalClose() {
  document.querySelector(".image-modal span").addEventListener("click", () => {
    modal.style.display = "none";
  });
}

modalClose();

function modalCloseTwo() {
  modalImg.addEventListener("click", () => {
    modal.style.display = "none";
  });
}
modalCloseTwo();

function modalClickTwo() {
  imgSpan[1].addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img[3].src;
  });
}
modalClickTwo();

function modalClickThree() {
  imgSpan[2].addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img[4].src;
  });
}
modalClickThree();
