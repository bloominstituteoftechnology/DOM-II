// Your code goes here

//Stop navigation items

document.querySelectorAll(".nav-link").forEach(element => {
  element.addEventListener("click", event => {
    event.preventDefault();
  });
});

//Unique even listeners

// #1

let Img = document.querySelector("header img");
Img.addEventListener("mouseenter", () => {
  Img.style.transform = "scale(1)";
  Img.style.transition = "all 0.3s";
});

//#2
Img.addEventListener("mouseleave", () => {
  Img.style.transform = "scale(.8)";
  Img.style.transition = "all 0.3s";
});

//#3
let changeImg = document.querySelector("header img");
changeImg.addEventListener("dblclick", event => {
  changeImg.src = "img/thunderstorm.jpg";
  event.stopPropagation();
});

//#4

let size = document.querySelector("section img");
window.addEventListener("resize", () => {
  size.src = "img/one.jpg";
});

let body = document.querySelector("body");
window.addEventListener("scroll", () => {
  body.style.backgroundImage = "linear-gradient(red, yellow, blue)";
});

//stretch
TweenMax.to(".img-content", 6, {
  rotation: 360,
  ease: Elastic.easeOut.config(1, 6)
});

TweenMax.to(".img-content", 0.5, { y: 10, yoyo: true, repeat: -1 });

//#5

let links = document.querySelectorAll("a").forEach(element => {
  element.addEventListener("mouseout", () => {
    element.style.color = "blue";
  });
});

//#6
const boxes = document.querySelectorAll("p");
boxes.forEach(box => {
  box.addEventListener("mouseover", e => {
    TweenMax.to(e.target, 0.5, {
      scale: 0.8,
      filter: "none",
      ease: Elastic.easeOut.config(1, 0.75)
    });
  });
  box.addEventListener("mouseleave", e => {
    TweenMax.to(e.target, 0.5, {
      scale: 1,
      filter: "grayscale(1) blur2px)",
      ease: Power1.easeIn
    });
  });
});

TweenMax.to("p", 6, {
  rotation: 360,
  ease: Elastic.easeOut.config(1, 6)
});

//#7
const titlesOne = document.querySelectorAll("h4");
titlesOne.forEach(box => {
  box.addEventListener("mouseover", e => {
    TweenMax.to(e.target, 0.5, {
      scale: 1.8,
      ease: Elastic.easeOut.config(1, 0.75)
    });
  });
  box.addEventListener("mouseleave", e => {
    TweenMax.to(e.target, 0.5, {
      scale: 1,
      filter: "grayscale(1) blur2px)",
      ease: Power1.easeIn
    });
  });
});

TweenMax.to("h4", 6, {
  rotation: 360,
  ease: Elastic.easeIn.config(1, 6)
});

//#8
const titlesTwo = document.querySelectorAll("h2");
titlesTwo.forEach(box => {
  box.addEventListener("mouseover", e => {
    TweenMax.to(e.target, 0.5, {
      scale: 1.5,
      ease: Elastic.easeOut.config(1, 0.75)
    });
  });
  box.addEventListener("mouseleave", e => {
    TweenMax.to(e.target, 0.5, {
      scale: 1,
      filter: "grayscale(1) blur2px)",
      ease: Power1.easeIn
    });
  });
});

TweenMax.to("h2", 6, {
  rotation: 360,
  ease: Elastic.easeIn.config(1, 6)
});

//#9

let navigation = document.querySelector("header");
window.addEventListener("scroll", () => {
  navigation.style.backgroundImage = "linear-gradient(red,red)";
});

TweenMax.to(".content-destination img", 0.5, { y: 10, yoyo: true, repeat: -1 });

//#10
let bottomPage = document.querySelector("footer");
window.addEventListener("scroll", () => {
  bottomPage.style.backgroundImage = "linear-gradient(blue,blue)";
});
