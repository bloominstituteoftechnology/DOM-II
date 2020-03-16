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

//------> 1- Click

const sectionNav = document.querySelector(".nav-link");
console.log(sectionNav);
document.querySelectorAll(".nav-link").forEach(el => {
  el.addEventListener("click", () => {
    el.style.transition = "color 0.5s";
    el.style.color = "#2925E9";
  });
});

// -----> 2- scale

const letGo = document.querySelector(".img-content");
console.log(letGo);

letGo.addEventListener("mouseenter", () => {
  letGo.style.transform = "scale(1.2)";
  letGo.style.transition = "transform 1s";
});
letGo.addEventListener("mouseleave", () => {
  letGo.style.transform = "scale(1)";
});
// -----> 3- dblclick

const logoHeading = document.querySelector(".logo-heading");
console.log(logoHeading);
logoHeading.addEventListener("dblclick", () => {
  if (logoHeading.textContent === "Fun Bus") {
    logoHeading.textContent = "Bus Fun";
  } else {
    logoHeading.textContent = "Fun Bus";
  }
});

// -----> 4- click
const body = document.querySelector("body");
body.addEventListener("click", () => {
  body.style.backgroundColor = "#FFF1F9";
  console.log("me last!");
});

// ------> 5- click event on multiple elements
const secctionContent = document.querySelector("h2");
console.log(secctionContent);
document.querySelectorAll("h2").forEach(el => {
  el.addEventListener("click", () => {
    el.style.transition = "color 0.5s";
    el.style.color = "#1A1E71";
  });
});

// ------> 6- click event on multiple elements
const textContent = document.querySelector("p");
console.log(textContent);
document.querySelectorAll("p").forEach(el => {
  el.addEventListener("click", () => {
    el.style.transition = "color 0.5s";
    el.style.color = "#FF166A";
  });
});

// ------> 7- click event on multiple elements
const anotherText = document.querySelector("h4");
console.log(anotherText);
document.querySelectorAll("h4").forEach(el => {
  el.addEventListener("click", () => {
    el.style.transition = "color 0.5s";
    el.style.color = "#651A71";
  });
});

// ------> 8- scale
const signMe = document.querySelector(".btn");
console.log(signMe);

signMe.addEventListener("mouseenter", () => {
  signMe.style.transform = "scale(1.2)";
  signMe.style.transition = "transform 1s";
});
signMe.addEventListener("mouseleave", () => {
  signMe.style.transform = "scale(1)";
});

// -----> 9- dblclick
document.querySelector(".footer").addEventListener("dblclick", () => {
  event.target.style.transform = "scale(4)";
  event.target.style.transition = "all 0.2s";
  event.target.textContent = "We can do it!";
});

const backChange = document.querySelector("html");
const header = document.querySelector(".nav-container");

backChange.addEventListener("keydown", () => {
  header.style.backgroundColor = "pink";
  console.log(backChange);
});
