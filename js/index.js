// Your code goes here

const navBtn = document.querySelectorAll(".nav-link");
const introH2 = document.querySelector(".intro h2");
const html = document.querySelector("html");
const img = document.querySelectorAll("img");
const introH1 = document.querySelectorAll(".logo-heading");
const btn = document.querySelectorAll(".btn");
const mainNav = document.querySelector(".main-navigation");

console.log(mainNav);

// console.log(introH1);

// mouseenter
introH2.addEventListener("mouseenter", event => {
  introH2.style.fontWeight = "bold";
  introH2.style.color = "#17A2B8";
});

//keydown -- make an alert
html.addEventListener("keydown", event =>
  alert("You pressed the down key, use the wheel/fingers")
);

// wheel
html.addEventListener("wheel", event => {
  html.style.cursor = "all-scroll";
});

// drag / drop

// load
// can't get it to work
introH1[0].addEventListener("load", event => {
  introH1[0].innerHTML = "Fun Bus says 'Hello!'";
});

//focus

// resize
window.addEventListener("resize", sizeFunction);

function sizeFunction() {
  introH1[0].innerHTML = "Fun Bus is Resizing";
}

// scroll
mainNav.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (
    document.body.scrollTop() > 10 ||
    document.documentElement.scrollTop() > 10
  ) {
    mainNav.style.backgroundColor = "yellow";
  }
}
// select
// dbclick
btn.forEach(myFunction);

function myFunction(item) {
  item.addEventListener("dbclick", event => {
    item.style.backgroundColor = "yellow";
    item.style.color = "#17A2B8";
    item.style.fontWeight = "bold";
  });
}
