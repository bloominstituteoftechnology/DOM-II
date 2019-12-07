// Your code goes here

const navBtn = document.querySelectorAll(".nav-link");
const introH2 = document.querySelector(".intro h2");
const html = document.querySelector("html");
const img = document.querySelectorAll("img");
const introH1 = document.querySelectorAll(".logo-heading");
const btn = document.querySelectorAll(".btn");
const mainNav = document.querySelector(".main-navigation");
const allH2 = document.querySelectorAll("h2");
const homeLink = document.querySelectorAll(".nav .nav-link");
const textContent = document.querySelector(".text-content");
const textContentP = document.querySelector(".text-content p");
const contentDestin = document.querySelector(".content-destination");
const contentDestinP = document.querySelector(".content-destination img");

console.log(contentDestinP);

// 1. pageshow ** not working
// homeLink.forEach(pageFunction);

// function pageFunction(item) {
//   item.addEventListener("pageshow", event => {
//     alert("Hello World!");
//   });
// }

homeLink[2].addEventListener("pageshow", event => {
  alert("Hello World!");
});

// 2. wheel
html.addEventListener("wheel", event => {
  html.style.cursor = "all-scroll";
});

// 3. 4. mouseenter && leave
allH2.forEach(hoverFunction);

function hoverFunction(item) {
  item.addEventListener("mouseenter", mouseEnter);
  item.addEventListener("mouseleave", mouseLeave);

  function mouseEnter() {
    item.style.color = "#17A2B8";
    item.style.fontWeight = "bold";
  }

  function mouseLeave() {
    item.style.color = "black";
  }
}

// 5. resize
window.addEventListener("resize", sizeFunction);

function sizeFunction() {
  introH1[0].innerHTML = "Fun Bus is Resizing";
}

// 6. scroll
mainNav.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    mainNav.style.backgroundColor = "yellow";
  }
}

// 7. click
btn.forEach(myFunction);

function myFunction(item) {
  item.addEventListener("click", mouseevent => {
    item.style.backgroundColor = "yellow";
    item.style.color = "#17A2B8";
    item.style.fontWeight = "bold";
  });
}

// 8. beforeprint
window.addEventListener("beforeprint", event => {
  alert("Setting up printer now");
});

// preventDefault;
homeLink[1].addEventListener("click", event => {
  event.preventDefault();
});

// stopPropagation 1
// DIV 1
textContent.addEventListener("click", event => {
  alert("Let's Go");
});
// P
textContentP.addEventListener("click", event => {
  alert("This is P");
  event.stopPropagation();
});

// stop Propagation 2

contentDestin.addEventListener("mouseenter", event => {
  contentDestin.style.border = "5px solid black";
});
contentDestinP.addEventListener("mouseenter", event => {
  contentDestin.style.border = "5px dashed pink";
  event.stopPropagation();
});

// load ** not working
introH1[0].addEventListener("load", event => {
  introH1[0].innerHTML = "Fun Bus says 'Hello!'";
});
