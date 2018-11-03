// `drag / drop`
// `focus`
// `resize`
// `select`
let navs = document.querySelectorAll(".nav-link");

for (let i = 0; i < navs.length; i++) {
  navs[i].addEventListener("click", e => {
    e.preventDefault();
  });
}

let you = prompt("Enter Your Name: ");
let title = document.querySelector(".intro h2");
let span = document.querySelector(".intro span");
document.addEventListener("copy", e => {
  title.textContent = `Check what you actually copied lol`;
  e.clipboardData.setData("text/plain", "ùwú");
  e.preventDefault();
});
document.addEventListener("keydown", e => {
  title.textContent = `Please don't press ${e.key}, ${you}`;
});

let counter = 0;
let logo = document.querySelector(".logo-heading");
document.addEventListener("wheel", e => {
  logo.style.position = "relative";
  counter += e.deltaY / 20;
  counter < 0 ? (counter = 0) : (counter = counter);
  logo.style.top = counter + "px";
});
let adventure = document.querySelector(".img-content");
let text = document.querySelector(".text-content");
adventure.addEventListener("click", e => {
  text.style.color = "slateblue";
});
text.addEventListener("click", e => {
  e.stopPropagation();
  alert("let's go was clicked; propagation was also stopped");
});
document.addEventListener("click", e => {
  alert("body was clicked");
});
adventure.addEventListener("mouseover", e => {
  title.textContent = "Wanna go here?";
});
window.addEventListener("load", function(event) {
  title.textContent = "All resources finished loading!";
});
let imageC = document.querySelectorAll(".img-content");
let images = document.querySelectorAll(".img-content img");
let body = document.querySelector("body");
for (let i = 0; i < imageC.length; i++) {
  imageC[i].addEventListener("dblclick", e => {
    imageC[i].style.position = "absolute";
    imageC[i].style.display = "flex";
    imageC[i].style.justifyContent = "center";
    imageC[i].style.alignItems = "center";
    imageC[i].style.top = `${window.scrollY}px`;
    imageC[i].style.left = `${window.innerWidth / 2 - window.innerWidth / 4}px`;
    TweenMax.to(imageC[i], 1, { left: `${window.innerWidth / 2 - 420}px` });
    imageC[i].style.height = "100vh";
    TweenMax.to(imageC[i], 1, { width: `800px` });
    images[i].style.maxWidth = "200vw";
    images[i].style.width = "100%";
    body.style.overflow = "hidden";
  });
  document.addEventListener("click", e => {
    imageC[i].style.position = "static";
    imageC[i].style.display = "block";
    imageC[i].style.justifyContent = "flex-start";
    imageC[i].style.alignItems = "flex-start";
    imageC[i].style.top = `0`;
    imageC[i].style.left = `0`;
    imageC[i].style.height = "auto";
    imageC[i].style.width = "48%";
    images[i].style.maxWidth = "100%";
    images[i].style.width = "auto";
    body.style.overflowY = "scroll";
  });
}
let mouse;
window.addEventListener("mousemove", e => {
  span.textContent = `mouse coordinates: ${e.x}, ${e.y}`;
  span.style.fontSize = "1.5rem";
});
window.addEventListener("resize", e => {
  title.textContent = `window size: ${window.innerWidth}px`;
});
window.addEventListener("cut", e => {
  title.textContent = "Ouch! You cut me!";
  e.clipboardData.setData("text/plain", "ùwú");
  e.preventDefault();
});

TweenMax.to(logo, 1, { x: 100 });
