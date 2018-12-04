// Your code goes here
// mouseover
const logo = document.querySelector(".logo-heading");
logo.addEventListener("mouseover", function(e) {
  logo.style.fontSize = "75px";
  setTimeout(() => {
    logo.style.fontSize = "4rem";
  }, 1000);
});
// keydown
const keyPressed = document.querySelector(".fullscreen");
const container = document.querySelector(".home");

document.addEventListener("keydown", event => {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  const keyName = event.key;
  container.style.opacity = 0;
  keyPressed.style.fontSize = "50px";
  keyPressed.textContent = keyName;
  setTimeout(() => {
    container.style.opacity = 1;
    keyPressed.textContent = "";
  }, 2000);
});
// wheel
const images = document.querySelectorAll("img");
const nav = document.querySelector(".main-navigation");

document.addEventListener("wheel", event => {
  nav.style.background = "#17A2B8";
  images.forEach(img => {
    img.style.transform = "scale(1.1)";
    setTimeout(() => {
      img.style.transform = "scale(1)";
      nav.style.background = "";
    }, 1000);
  });
});
// drag / drop
images.forEach(img => {
  img.addEventListener("drag", e => {
    img.style.position = "absolute";
    img.style.top = `${e.screenY / 2}px`;
    img.style.left = `${e.screenX / 2}px`;
  });
});

// load
window.addEventListener("load", e => {
  document.body.className += " fade-out";
  setTimeout(() => {
    document.body.classList.remove("fade-out");
  }, 500);
});
// focus
focusScrollMethod = function getFocus() {
  document.querySelector("#cta-section").focus({ preventScroll: false });
};
// resize

// scroll
// select
// dblclick
