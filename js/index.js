// Your code goes here
const navH1 = document.querySelector(".logo-heading");
const intro = document.querySelector(".intro");
const introH2 = document.querySelector(".intro h2");
const introImg = document.querySelector(".intro img");
const imageContent = document.querySelectorAll(".img-content img");
const btn = document.querySelectorAll(".btn");
const destination = document.querySelectorAll(".destination");
const destinationH2 = document.querySelectorAll(".destination h4");
const navLink = document.querySelectorAll(".nav-link");
const body = document.querySelector("body");
const navContainer = document.querySelector(".nav-container");
const nav = document.querySelector(".nav");

navH1.addEventListener("mouseover", event => {
  event.currentTarget.style.color = "blue";
});

intro.addEventListener("click", event => {
  event.currentTarget.style.backgroundColor = "powderblue";
  event.stopPropagation();
});

introH2.addEventListener("mouseenter", event => {
  event.currentTarget.innerText = "Come Aboard The Fun Bus!";
  event.stopPropagation();
});

introImg.addEventListener("dblclick", event => {
  event.currentTarget.style.display = "none";
});

imageContent[1].addEventListener("click", event => {
  event.currentTarget.style.width = "100px";
});

imageContent[0].addEventListener("click", event => {
  event.currentTarget.style.width = "200px";
});

btn[0].addEventListener("mousedown", event => {
  event.currentTarget.style.backgroundColor = "red";
  event.currentTarget.style.color = "black";
});

btn[2].addEventListener("mousedown", event => {
  event.currentTarget.style.backgroundColor = "blue";
  event.currentTarget.style.color = "black";
});

btn[1].addEventListener("mousedown", event => {
  event.currentTarget.style.backgroundColor = "white";
  event.currentTarget.style.color = "black";
});

destination[0].addEventListener("wheel", event => {
  event.currentTarget.style.backgroundColor = "green";
});

destination[1].addEventListener("wheel", event => {
  event.currentTarget.style.backgroundColor = "red";
});

destination[2].addEventListener("wheel", event => {
  event.currentTarget.style.backgroundColor = "blue";
});

destinationH2[0].addEventListener("contextmenu", event => {
  event.currentTarget.innerText = "Dont forget your sun-tan lotion!";
});

destinationH2[1].addEventListener("contextmenu", event => {
  event.currentTarget.innerText = "Have fun climbing!";
});

destinationH2[2].addEventListener("contextmenu", event => {
  event.currentTarget.innerText = "Take a swim in the ocean!";
});

navLink[0].addEventListener("click", event => {
  event.currentTarget.style.color = "blue";
  event.preventDefault();

  event.stopPropagation();
});

nav.addEventListener("click", event => {
  event.currentTarget.style.backgroundColor = "blue";
});
