// Your code goes here
const navBtn = document.querySelectorAll(".nav-link");
const introH2 = document.querySelector(".intro h2");
const html = document.querySelector("html");

// mouseenter
introH2.addEventListener("mouseenter", event => {
  introH2.style.fontWeight = "bold";
});

//keydown -- make an alert
html.addEventListener("keydown", event =>
  alert("You pressed the down key, use the wheel/fingers")
);

//wheel
html.addEventListener("wheel", event => {
  html.style.cursor = "all-scroll";
});

//drag / drop
// load
//focus
// resize
// scroll
// select
// dbclick

console.log(html);
