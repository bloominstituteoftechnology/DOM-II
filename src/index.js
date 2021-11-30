import "./less/index.less";

// Your code goes here!

const logo = document.querySelector("h1.logo-heading");
const homeImg = document.querySelector(".intro img");

logo.addEventListener("mouseover", (e) => {
  e.target.style.color = "red";
});

homeImg.addEventListener("dblclick", (e) => {
  e.target.style.borderRadius = "10px";
  e.target.style.transform = "scale(1.1)";
});
