// Your code goes here
// Prevent Default
const navElements = document.querySelectorAll(".nav-link");

navElements.forEach(element => {
  element.addEventListener("click", element => {
    element.preventDefault();
  });
});

// Mouseover
const logoColor = document.querySelector("h1");

logoColor.addEventListener("mouseover", () => {
  logoColor.style.color = "#FFEBCD";
});

// Mouseout

logoColor.addEventListener("mouseout", () => {
  logoColor.style.color = "#212529";
});

// Click
const h2Color = document.querySelectorAll("h2");

h2Color.forEach(element => {
  element.addEventListener("click", () => {
    element.style.color = "#17A2B8";
  });
});

// Auxclick
h2Color.forEach(element => {
  element.addEventListener("auxclick", () => {
    element.style.fontSize = "3.5rem";
  });
});

// Scroll
const navBar = document.querySelector(".main-navigation");

navBar.addEventListener("scroll", () => {
  navBar.style.position = "fixed";
});

// Dblclick

const footerBackground = document.querySelector(".footer");

footerBackground.addEventListener("dblclick", () => {
  footerBackground.style.background = "white";
});

// Copy

const copyText = document.querySelectorAll("p");

copyText.forEach(para => {
  para.addEventListener("copy", () => {
    alert(`Don't copy my stuff!`);
  });
});

// Dragstart
const draggedImg = document.querySelectorAll("img");

draggedImg.forEach(img => {
  img.addEventListener("dragstart", () => {
    img.style.opacity = "25%";
  });
});

// Dragend

draggedImg.forEach(img => {
  img.addEventListener("dragend", () => {
    img.style.opacity = "100%";
  });
});
