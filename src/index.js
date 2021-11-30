import "./less/index.less";

// Your code goes here!
const logo = document.querySelector(".logo-heading");
logo.addEventListener("mouseover", function (event) {
  event.target.style.color = "green";
  event.target.style.fontSize = "80px";
});
