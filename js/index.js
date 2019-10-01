// 1) LOAD EVENT
window.addEventListener("load", function() {
  const nav_links = document.querySelectorAll(".main-navigation .nav a");
  nav_links.forEach(link => {
    link.style.color = "darkgray";
  });
});

// 2) MOUSEOVER EVENT
// 3) MOUSELEAVE EVENT
const nav_links = document.querySelectorAll(".main-navigation .nav a");
nav_links.forEach(link => {
  link.addEventListener("mouseover", function() {
    this.style.color = "black";
  });
  link.addEventListener("mouseleave", function() {
    this.style.color = "darkgray";
  });
});

// 4) SCROLL EVENT
const header = document.querySelector(".main-navigation ");
header.style.transition = `all .3s ease`;
window.addEventListener("scroll", function(e) {
  if (window.scrollY > 50) {
    return (header.style.height = "60px");
  }
  header.style.height = "90px";
});

// 5) CLICK EVENT
const logo = document.querySelector(".main-navigation .logo-heading");
logo.addEventListener("click", function() {
  const colors = ["red", "dodgerblue", "orange", "green", "pink"];
  let color_index = Math.floor(Math.random() * colors.length);
  logo.style.color = colors[color_index];
});

// 6) RESIZE EVENT
window.addEventListener("resize", function() {
  const colors = ["red", "dodgerblue", "orange", "green", "pink"];
  let color_index = Math.floor(Math.random() * colors.length);
  window.document.body.style.color = colors[color_index];
});

// 7) WHEEL EVENT
const imgs = document.querySelectorAll("img");
window.addEventListener("wheel", function() {
  imgs.forEach(img => {
    img.style.borderRadius = `${window.scrollY / 10}px`;
  });
});

// 8) DBL-CLICK EVENT
const cards = document.querySelectorAll(".content-pick .destination");
cards.forEach(card => {
  card.addEventListener("dblclick", function() {
    if (this.style.background !== "orange") {
      return (this.style.background = "orange");
    }
    this.style.background = "transparent";
  });
});

// 9) KEYPRESS EVENT
const banner_img = document.querySelector(".intro img");
window.addEventListener("keypress", function() {
  setInterval(function(e) {
    console.log(banner_img.width);
    banner_img.width = banner_img.width - 10;
  }, 1000);
});

// 10) MOUSEMOVE EVENT
window.document.body.addEventListener("mousemove", e => {
  document.body.style.backgroundColor = "rgb(" + e.offsetX + ", " + e.offsetY + ", 40)";
});
