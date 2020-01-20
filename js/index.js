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

document.querySelectorAll(".nav a").forEach(element => {
  element.addEventListener("mouseout", () => {
    element.style.color = "";
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

// event 8 = CLICK
const pressBtn = document.querySelectorAll(".btn");

pressBtn.forEach(element => {
  element.addEventListener("click", () => {
    element.textContent = "Pack My Bags!";
    element.style.border = "4px dotted orange";
    element.style.transition = "all 2s";
  });
});

// event 9 & 10 MOUSEENTER & MOUSELEAVE
const newPointer = document.querySelectorAll("h4");

newPointer.forEach(element => {
  element.addEventListener("mouseenter", () => {
    element.style.cursor =
      "url('https://img.icons8.com/metro/26/000000/sun-glasses.png'), auto";
    element.style.backgroundColor = "#fce420";
  });
});

newPointer.forEach(element => {
  element.addEventListener("mouseleave", () => {
    element.style.background = "";
  });
});

const contentImg = document.querySelectorAll(".img-content");

contentImg.forEach(element => {
  element.addEventListener("mouseenter", () => {
    element.style.transform = "scale(1.1)";
    element.style.transition = "all 0.3s";
  });
});

contentImg.forEach(element => {
  element.addEventListener("mouseleave", () => {
    element.style.transform = "scale(1)";
    element.style.transition = "all 0.3s";
  });
});

// propagation
/*const destination = document.querySelector(".destination");
const btn = document.querySelector("bnt");

destination.forEach(element => {
  element.addEventListener("click", () => {
    element.style.backgroundColor = "red";
    // event.stopPropagation();
  });
});

btn.addEventListener("click", () => {
  console.log("The paragraph was pressed!");
});
*/

// // stop refresh

const stop = document.querySelectorAll(".nav a");
stop.forEach(event => {
  event.addEventListener("click", event => {
    event.preventDefault();
  });
});
