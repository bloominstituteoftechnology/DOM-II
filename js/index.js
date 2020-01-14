// Your code goes here

// Targets the Title and changes color
const logoBus = document.querySelector(".logo-heading");
logoBus.addEventListener("mouseenter", () => {
  logoBus.style.color = "red";
});

// Targets the buttons and gives mouseenter / mouseleave
const button = document.querySelectorAll(".btn").forEach(el => {
  el.addEventListener("mouseenter", () => {
    el.style.transform = "scale(1.2)";
    el.style.transition = "transform 0.3s";
    el.style.backgroundColor = "black";
  });
  el.addEventListener("mouseleave", () => {
    el.style.transform = "scale(1)";
    el.style.backgroundColor = "#17A2B8";
  });
});
// Targets the Nav menu to scale and change color
const navLink = document.querySelectorAll(".nav-link").forEach(nl => {
  nl.addEventListener("mouseenter", () => {
    nl.style.color = "purple";
    nl.style.transform = "scale(1.3)";
  });
  nl.addEventListener("mouseleave", () => {
    nl.style.color = "black";
    nl.style.transform = "scale(1)";
    nl.preventDefault();
  });
});

// Targets Fun-bus picture on screen resize
const busPic = document.querySelector(".intro img");
window.addEventListener("resize", () => {
  busPic.src =
    "https://images.unsplash.com/photo-1566798577871-b3f4c624562c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
});

// Targets ims in content to scale and transform
const bus = document.querySelectorAll(".img-content").forEach(il => {
  il.addEventListener("mouseenter", () => {
    il.style.transform = "scale(1.2)";
    il.style.transition = "transform 0.3s";
  });
  il.addEventListener("mouseleave", () => {
    il.style.transform = "scale(1)";
  });
});

// Targets titles in content-pick to change color on click
const titles = document.querySelectorAll("h4").forEach(tit => {
  tit.addEventListener("click", () => {
    tit.style.color = "hotpink";
  });
});

// Targets titles in content-destination to change to orange on hover
const pickDest = document.querySelector(".content-destination h2");
pickDest.addEventListener("mouseover", dest => {
  pickDest.style.color = "orange";

  setTimeout(dest => {
    pickDest.style.color = "";
  }, 500);
});

// Targets first paragraph and on scroll changes text and bg color
const redact = document.querySelector("p");
window.addEventListener("scroll", () => {
  redact.style.backgroundColor = "black";
  redact.style.color = "limegreen";
});

// Targets the Body and Header to change colors on click
const body = document.querySelector("body");
const header = document.querySelector("header");
body.addEventListener("mousedown", () => {
  body.style.backgroundColor = "lightgrey";

  header.addEventListener("mousedown", () => {
    header.style.backgroundColor = "skyblue";
    event.stopPropagation();
  });
});

// Targets achor tags and prevents page refresh
const links = document
  .querySelectorAll("a")
  .forEach(e => e.addEventListener("click", e => e.preventDefault()));




  //Add commites