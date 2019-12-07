// Your code goes here

const navBtn = document.querySelectorAll(".nav-link");
const introH2 = document.querySelector(".intro h2");
const html = document.querySelector("html");
const img = document.querySelectorAll("img");
const introH1 = document.querySelectorAll(".logo-heading");
const btn = document.querySelectorAll(".btn");
const mainNav = document.querySelector(".main-navigation");
const allH2 = document.querySelectorAll("h2");
const textContent = document.querySelector(".text-content p");

console.log(img);

// console.log(introH1);

// mouseenter
introH2.addEventListener("mouseenter", event => {
  introH2.style.fontWeight = "bold";
  introH2.style.color = "#17A2B8";
});

//keydown
html.addEventListener("keydown", event =>
  alert("You pressed the down key, use the wheel/fingers")
);

// wheel
html.addEventListener("wheel", event => {
  html.style.cursor = "all-scroll";
});

// drag / drop ** not working
img.forEach(dragFunction);

function dragFunction(item) {
  item.addEventListener("drag", event => {
    item.style.borderStyle = "solid";
  });
}

// load ** not working
introH1[0].addEventListener("load", event => {
  introH1[0].innerHTML = "Fun Bus says 'Hello!'";
});

//focus ** not working

// resize
window.addEventListener("resize", sizeFunction);

function sizeFunction() {
  introH1[0].innerHTML = "Fun Bus is Resizing";
}

// scroll
mainNav.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    mainNav.style.backgroundColor = "yellow";
  }
}
// select ** not working
textContent.addEventListener("select", event => {
  textContent.style.fontSize = "3rem";
});

// dbclick
btn.forEach(myFunction);

function myFunction(item) {
  item.addEventListener("dblclick", mouseevent => {
    item.style.backgroundColor = "yellow";
    item.style.color = "#17A2B8";
    item.style.fontWeight = "bold";
  });
}
