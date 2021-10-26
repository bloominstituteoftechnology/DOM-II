// Your code goes here
const nav = document.querySelector(".main-navigation");
const home = document.querySelector(".home");
const header = document.querySelector(".intro");
const imgs = document.querySelectorAll("img");
const btns = document.querySelectorAll(".btn");

window.addEventListener("load", (e) => (header.innerHTML = ""));
window.addEventListener("resize", (e) => (nav.style.color = "red"));

nav.addEventListener("mouseenter", (e) => console.log("hello there!"));
nav.addEventListener("mouseleave", (e) =>
  console.log("general kenobi, youre a bold one!!!")
);
nav.addEventListener("wheel", (e) => (nav.style.color = "pink"));
nav.addEventListener("click", (e) => e.preventDefault());

home.addEventListener("selectstart", (e) => {
  home.style.backgroundColor = "black";
  home.style.color = "black";
  alert("NO TOUCHY");
});

imgs.forEach((img) => {
  img.addEventListener("copy", (e) => alert("Hey! no stealing!!"));
  img.addEventListener("drag", (e) => alert("hey!! i said no touchy!"));
});

btns.forEach((btn) => {
  btn.addEventListener("selectstart", (e) => {
    e.stopPropagation();
  });
  btn.addEventListener("click", (e) => {
    alert("this content is not available at the time");
  });
  btn.addEventListener("mouseover", (e) => (btn.style.backgroundColor = "red"));
});
