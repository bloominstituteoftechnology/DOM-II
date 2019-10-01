// Your code goes here
const contentImg = document.querySelectorAll(".content-section img");
console.log(contentImg);

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
