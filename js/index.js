// Your code goes here
const bannerImgChange = document.querySelector(".intro img");
// 1 .CHANGE BANNER IMG ON MOUSE ENTER & LEAVE
bannerImgChange.addEventListener("mouseenter", event => {
  event.target.setAttribute(
    "src",
    "https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?cs=srgb&dl=action-blur-car-child-386009.jpg&fm=jpg"
  );
  event.target.style.transform = "scale(0.8)";
});

bannerImgChange.addEventListener("mouseleave", event => {
  event.target.setAttribute("src", "img/fun-bus.jpg");
  event.target.style.transform = "scale(1)";
});

// this selects all navitems
const navItems = document.querySelectorAll(".nav a");

// This is our function that will fire everytime our addEventListener below is triggered
const navEventHandler = event => {
  console.log("element", event.target);
  if (event.target.style.color == "rgb(33, 37, 41)") {
    event.target.style.color = "hotpink";
  } else {
    event.target.style.color = "rgb(33, 37, 41)";
  }
};
// triggering the "EventHandler" navEventHandler
navItems.forEach(navA => {
  navA.addEventListener("click", navEventHandler);
});

// 2 IMAGE SCALE FOR IMAGES IN THE IMG-CONTENT SECTION on MOUSEENTER

const contentImages = document.querySelectorAll(".img-content img");
const scaleEventHandler = event => {
  event.target.style.transform = "scale(1.1)";
  event.target.style.transition = "all 0.3s";
};
contentImages.forEach(image => {
  image.addEventListener("mouseenter", scaleEventHandler);
});

// 3 SCALING IMAGES BACK TO NORMAL ON MOUSELEAVE
const rescaleEventHandler = event => {
  event.target.style.transform = "scale(1)";
  event.target.style.transition = "all 0.3s";
};
contentImages.forEach(image => {
  image.addEventListener("mouseleave", rescaleEventHandler);
});

// 4 CHANGING THE H1 TEXT WHEN MOUSE OVER

const h1ChangeText = document.querySelector(".logo-heading");

h1ChangeText.addEventListener("mouseover", () => {
  h1ChangeText.textContent = "IS THE BEST BUS!";
  h1ChangeText.style.transition = "all 3s";
  h1ChangeText.style.color = "hotpink";
});
// 5 CHANGING TEXT WHEN MOUSE LEAVE
h1ChangeText.addEventListener("mouseleave", () => {
  h1ChangeText.textContent = "Fun Bus";
  h1ChangeText.style.color = "rgb(33, 37, 41)";
});

// 6 gradual scale and fade out opacity on destination image
const destinationImage = document.querySelector(".content-destination img");
destinationImage.addEventListener("mouseenter", event => {
  event.target.style.transform = "scale(2)";
  event.target.style.transition = "all 2.5s";
  event.target.style.opacity = "0.0";
});

destinationImage.addEventListener("mouseleave", event => {
  event.target.style.transform = "scale(1)";
  event.target.style.transition = "all 1s";
  event.target.style.opacity = "1";
});

// paragraph slide in animation
// const slidingParas = document.querySelectorAll(".text-content p");
// function myMove() {
//   let pos = 0;
//   let id = setInterval(frame, 10);
//   function frame() {
//     if (pos == 350) {
//       clearInterval(id);
//     } else {
//       pos++;
//       slidingParas.style.top = pos + "px";
//       slidingParas.style.left = pos + "px";
//     }
//   }
// }
// slidingParas.forEach(para => {
//   para.addEventListener("mouseover", myMove);
// });

// const slideEventHandler = event => {
//   event.target.style.animationDuration = "3s";
//   event.target.style.animationName = "slidein";
// };
