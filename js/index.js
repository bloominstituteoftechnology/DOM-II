const logoHeading = document.querySelector(".logo-heading");
const body = document.querySelector("body");
const introP = document.querySelector(".intro p");
const navLink = document.querySelectorAll(".nav-link");
//const cName = document.querySelector("#cname");
const dest1 = document.querySelector(".content-pick .dest1");
const dest1Btn = document.querySelector(".content-pick .dest1 .btn1");
const navItem = document.querySelectorAll(".nav-item");
const footer = document.querySelector(".footer");

for (var i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", function(event) {
    event.preventDefault();
  });
}

window.addEventListener("load", function(event) {
  alert("All resources finished loading!");
});

logoHeading.addEventListener("mouseover", function(event) {
  event.target.style.fontSize = "6rem";
});

logoHeading.addEventListener("mouseleave", function(event) {
  event.target.style.fontSize = "4rem";
});

body.addEventListener("keydown", function() {
  alert("you entered a keystroke");
});

window.addEventListener("resize", function(event) {
  this.alert("you resized the screen");
});

body.addEventListener("wheel", function(event) {
  event.target.style.color = "red";
});

body.addEventListener("dblclick", function(event) {
  event.target.style.color = "black";
});

window.onscroll = function() {
  myFunction();
};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".intro p").className = "greenPara";
  } else {
    document.querySelector(".intro p").className = "";
  }
}

// cName.addEventListener("select", function() {
//   alert("you selected some text!");
// });

// cName.addEventListener("focus", function(event) {
//   event.target.style.backgroundColor = "silver";
// });

dest1.addEventListener("click", function(event) {
  event.target.style.color = "blue";
  alert("Have fun in the sun");
});

dest1Btn.addEventListener("click", function() {
  alert("Button pressed");
  event.stopPropagation();
});

footer.addEventListener("click", function(event) {
  event.target.classList.toggle("jsFooter");
});
