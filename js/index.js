// Your code goes here
const body = document.querySelector("body");
const home = document.querySelector(".home");
const navH1 = document.querySelector(".logo-heading");
const busImg = document.querySelector(".busImg");
let fontSize = 4;
const allImgs = document.querySelector(".img-content img");
const allH2s = document.querySelectorAll("h2");
const navA = document.querySelectorAll(".nav-link");
const buttons = document.querySelectorAll(".btn");

for (let i = 0; i < navA.length; i++) {
  navA[i].addEventListener("click", function(event) {
    event.preventDefault();
    this.textContent = "Sorry!";
  });
}

busImg.addEventListener("mouseenter", function() {
  let hue = Math.random() * 100;
  this.style.filter = `hue-rotate(${hue}deg)`;
});

navH1.addEventListener("wheel", function() {
  if (event.deltaY > 0 && fontSize >= 1) {
    fontSize--;
  } else {
    fontSize++;
  }
  this.style.fontSize = `${fontSize}rem`;
});

home.addEventListener("drag", function() {
    event.target.style.transform = "scaleX(-1)";
  // event.target.style.filter = 'flipH';
});

body.addEventListener("dblclick", function() {
    event.stopPropagation();
  let degrees = Math.random() * 100;
  event.target.style.transform = `rotate(${degrees}deg)`;
});

for (let i = 0; i < allH2s.length; i++) {
  allH2s[i].addEventListener("mouseover", function() {
    this.style.fontWeight = "bold";
  });
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("dragstart", function() {
    setInterval(() => {
      if (this.style.backgroundColor === "indianred") {
        this.style.backgroundColor = "#17A2B8";
      } else {
        this.style.backgroundColor = "indianred";
      }
    }, 500);
  });
}

body.addEventListener('keydown', function(){
    let num1 = Math.random()*255;
    let num2 = Math.random()*255;
    let num3 = Math.random()*255;
    this.style.backgroundColor = `rgb(${num1},${num2},${num3})`
})