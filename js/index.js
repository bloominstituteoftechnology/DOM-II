const ImgChange = document.querySelector("header img");
ImgChange.addEventListener("click", () => {
  ImgChange.src = "https://i.ytimg.com/vi/n_PRLmvdLT8/maxresdefault.jpg";
});

const fontChange = document.querySelector(".logo-heading");
fontChange.addEventListener("mouseover", () => {
  fontChange.style.color = "orange";
});
fontChange.addEventListener("mouseleave", () => {
  fontChange.style.color = "black";
});

// const containerImages = document.querySelectorAll(".intro img");
// containerImages.forEach(item => {
//   item.addEventListener("click", () => {
//     containerImages.style.transform = "scale(2)";
//   });
// });

const anchors = document.querySelectorAll("header nav a");
anchors.forEach(function(item) {
  item.addEventListener("mouseup", e => {
    item.style.transform = "scale(1.5)";
  });
});

anchors.forEach(function(item) {
  item.addEventListener("mousedown", e => {
    item.style.transform = "scale(1)";
  });
});

const fontContainer = document.querySelectorAll("body p");
window.addEventListener("resize", () => {
  fontContainer.style.color = "green";
});

// function focused() {
// document.querySelector(".btn").focus();
// }

// const buttonContainer = document.querySelectorAll(".home .content-pick .destination .btn");
// buttonContainer.addEventListener("focus", function() => {
    
// })

const scrollProperty = document.querySelector(".footer p");
window.addEventListener("scroll", () => {
    scrollProperty.style.color = "red";
})

