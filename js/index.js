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

// is this working?

const scrollProperty = document.querySelector(".footer p");
window.addEventListener("scroll", () => {
  scrollProperty.style.color = "red";
});

document.querySelectorAll("img").forEach(function(item) {
  item.addEventListener("dblclick", () => {
    item.style.display = "none";
  });
});

function playFocus() {
  document.body.classList.add("addContent");
  paragraphFocus.textContent = "HI!";
}

const paragraphContainer = document.getElementsByClassName(".paragraphFocus");

window.addEventListener("focus", playFocus);

// image bottom

const destinationContainer = document.querySelector(".content-destination img");
destinationContainer.addEventListener("mouseover", () => {
  destinationContainer.style.transform = "scale(1.2)";
});

// buttons

// const buttonSize = document.querySelectorAll(".content-pick .destination .btn")[0];
// buttonSize.addEventListener("mouseover", (e) => {
//     buttonSize.style.transform = ("scale(1.2)");
//     e.stopPropagation();
// })

// const buttonSize = document.querySelectorAll(".content-pick .destination .btn")[1];
// buttonSize.addEventListener("mouseover", (e) => {
//     buttonSize.style.transform = ("scale(1.2)");
//     e.stopPropagation();
// })

// const buttonSize = document.querySelectorAll(".content-pick .destination .btn")[2];
// buttonSize.addEventListener("mouseover", (e) => {
//     buttonSize.style.transform = ("scale(1.2)");
//     e.stopPropagation();
// })

// const buttons = querySelectorAll(".destination .btn");
// buttons.forEach(button => {
//   button.addEventListener("click", e => {
//     button.style.transform = ("scale(1.2)");
//   });
// });

// animation???

window.addEventListener("load", e => {
  alert("this site accepts cookies, IS THIS OKAY?!?!??!?!");
});

document.querySelectorAll(".btn").forEach(item => {
  item.addEventListener("click", event => {
    item.style.fontSize = "3.5rem";
    event.stopPropagation();
  });
});

document.querySelectorAll("header nav a").forEach(function(item) {
  item.addEventListener("click", event => {
    event.preventDefault();
  });
});
