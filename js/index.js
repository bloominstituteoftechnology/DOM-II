// Your code goes here

// event 1 & 2 = KEYDOWN & KEYUP
const newText = document.querySelector(".logo-heading");

window.addEventListener("keydown", () => {
  newText.textContent = "Come Join Us!";
  newText.style.color = "#c7624c";
  newText.style.fontSize = "5rem";
});

window.addEventListener("keyup", () => {
  newText.textContent = "Fun Bus";
  newText.style.color = "#212529";
  newText.style.fontSize = "4rem";
});

//  event 3 & 4 = MOUSEOVER & MOUSEOUT
document.querySelectorAll(".nav a").forEach(element => {
  element.addEventListener("mouseover", () => {
    element.style.color = "#17a2b8";
  });
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("mouseout", () => {
    link.style.color = "";
  });
});

// event 5 = DBLCLICK
const changeImage = document.querySelector(".intro img");
// console.log(changeImage);

changeImage.addEventListener("dblclick", () => {
  changeImage.src = "img/volkswagen.jpg";
});

// event 6 = SCROLL
document.addEventListener("scroll", () => {
  document.querySelectorAll("h2").forEach(item => {
    item.style.color = "#5cae70";
  });
});

document.addEventListener("scroll", () => {
  document.querySelectorAll("h4").forEach(item => {
    item.style.color = "#ec113b";
  });
});

// event 7 = RESIZE
window.addEventListener("resize", () => {
  const cityBus = document.querySelector(".intro img");
  const resizeBody = document.querySelector("body");
  const resizeHeader = document.querySelector("header");

  cityBus.src = "img/fun-bus-city.jpg";
  resizeBody.style.backgroundColor = "#daf3f5";
  resizeHeader.style.backgroundColor = "#fcf2a4";
});

// event 8 = CLICK (ROTATE ISN'T WORKING)
const pressBtn = document.querySelectorAll(".btn");

pressBtn.forEach(element => {
  element.addEventListener("click", () => {
    element.textContent = "Pack My Bags!";
    // element.style.transform = "rotate (360deg)";
    element.style.transition = "all 2s";
  });
});

// SELECT

// // // MOUSEENTER & MOUSELEAVE (NOT WORKING)
// const newH4 = document.querySelectorAll(".destination h4");

// newH4.addEventListener("mouseenter", element => {
//   element.style.transform = "rotate (360deg)";
//   element.style.transition = "all 3s";
// });

// propagation

// stop refresh
document.getElementsByClassName(".nav-link");
addEventListener("mouseover", event => {
  event.preventDefault();
});
