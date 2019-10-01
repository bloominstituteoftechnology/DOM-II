// Your code goes here
const contentImg = document.querySelectorAll(".content-section img");
const bodyTag = document.querySelector("body");
const navigation = document.querySelector(".main-navigation");
const navLinks = document.querySelectorAll(".nav-link");

// Mouse Over
contentImg.forEach(img => {
  img.addEventListener("mouseover", () => {
    img.style.transform = "scale(1.1)";
    img.style.transition = "all 0.3s";
  });
});

// Mouse Leave
contentImg.forEach(img => {
  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
    img.style.transition = "all 0.3s";
  });
});

// Scroll
window.addEventListener("scroll", () => {
  bodyTag.style.backgroundColor = "#3c4857";
  bodyTag.style.color = "#b35700";
  navigation.style.backgroundColor = "#3c4857";
  navigation.style.color = "#b35700";

  navLinks.forEach(link => {
    link.style.color = "#b35700";
  });
});
