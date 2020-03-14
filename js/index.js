// Your code goes here
// mouseover
// keydown
// wheel
// drag / drop
// load
// focus
// resize
// scroll
// select
// dblclick

// const newCards = document.querySelector(".nav-Link");
// document.addEventListener("keydown", (event)=> {
//    if(event,key ====)
// })

// const logoHeading = document.querySelector("logo-heading)
// logoHeading.addEventListener("dblclick", e => {
//   logoHeading.classList.toggle("large");
// })
// Console.log(logoHeading);

//------> Click
const sectionNav = document.querySelector(".nav-link");
console.log(sectionNav);

document.querySelectorAll(".nav-link").forEach(el => {
  el.addEventListener("click", () => {
    el.style.transition = "color 0.5s";
    el.style.color = "#2925E9";
  });
});

// -----> scale

const letGo = document.querySelector(".img-content");
console.log(letGo);

letGo.addEventListener("mouseenter", () => {
  letGo.style.transform = "scale(1.2)";
  letGo.style.transition = "transform 1s";
});
letGo.addEventListener("mouseleave", () => {
  letGo.style.transform = "scale(1)";
});
// -----> flip
const logoHeading = document.querySelector(".logo-heading");
console.log(logoHeading);
logoHeading.addEventListener("dblclick", () => {
  if (logoHeading.textContent === "Fun Bus") {
    logoHeading.textContent = "Bus Fun";
  } else {
    logoHeading.textContent = "Fun Bus";
  }
});
// -----> click
const body = document.querySelector("body");
body.addEventListener("click", () => {
  body.style.backgroundColor = "#FFF1F9";
  console.log("me last!");
});
