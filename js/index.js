// Your code goes here
const navH1 = document.querySelector(".logo-heading");
const intro = document.querySelector(".intro");
const introH2 = document.querySelector(".intro h2");
const introImg = document.querySelector(".intro img");
const imageContent = document.querySelectorAll(".img-content img");
const btn = document.querySelectorAll(".btn");
const destination = document.querySelectorAll(".destination");
const destinationH2 = document.querySelectorAll(".content-destination h2");
const navLink = document.querySelectorAll(".nav-link");
const body = document.querySelector("body");
const navContainer = document.querySelector(".nav-container");

navH1.addEventListener("mouseover", event => {
  event.currentTarget.style.color = "blue";
});

intro.addEventListener("mouseenter", event => {
  event.currentTarget.style.backgroundColor = "powderblue";
});

introH2.addEventListener("click", event => {
  event.currentTarget.innerText = "Come Aboard The Fun Bus!";
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
