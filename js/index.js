// Your code goes here
const contentImg = document.querySelectorAll(".content-section img");
const bodyTag = document.querySelector("body");
const navigation = document.querySelector(".main-navigation");
const navLinks = document.querySelectorAll(".nav-link");
const buttons = document.querySelectorAll(".btn");
const destinations = document.querySelector(".content-pick");
const allImages = document.querySelectorAll("img");
const container = document.querySelector(".home");
const footer = document.querySelector("footer");
const allElements = document.querySelector("html");

// Mouse Over -- makes images larger
contentImg.forEach(img => {
  img.addEventListener("mouseover", () => {
    img.style.transform = "scale(1.1)";
    img.style.transition = "all 0.3s";
  });
});

// Mouse Leave -- places images back to normal size
contentImg.forEach(img => {
  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
    img.style.transition = "all 0.3s";
  });
});

// Scroll -- changes background and font color
window.addEventListener("scroll", () => {
  bodyTag.style.backgroundColor = "#3c4857";
  bodyTag.style.color = "#b35700";
  navigation.style.backgroundColor = "#3c4857";
  navigation.style.color = "#b35700";

  navLinks.forEach(link => {
    link.style.color = "#b35700";
  });
});

// dblClick -- changes color to destinations
buttons.forEach(button => {
  button.addEventListener("dblclick", () => {
    destinations.style.color = "#dadbdd";
    destinations.style.backgroundColor = "#b35700";
  });
});

// Keydown -- changes font color
bodyTag.addEventListener("keydown", () => {
  bodyTag.style.color = "#7f3800";

  navLinks.forEach(link => {
    link.style.color = "#7f3800";
  });
});

// Resize -- hides images on resize
window.addEventListener("resize", () => {
  allImages.forEach(img => {
    img.style.visibility = "hidden";
  });
});

// Click -- creates a pop alert notification, stops the page from refreshing, and does not allow the container to recolor
bodyTag.addEventListener("click", () => {
  container.style.backgroundColor = "slategrey";
});

navLinks.forEach(link => {
  link.addEventListener("click", event => {
    alert("These links are broken!");
    event.preventDefault();
    event.stopPropagation();
  });
});

// Drag
window.addEventListener("dragstart", () => {
  allElements.style.fontSize = "1.1rem";
});
