// Your code goes here
// mouseover
// mouseout
// keydown
// load
// resize

// scroll
// select
// dblclick
// wheel
// focus
// drag / drop

// ==================== loading the page alert using 'load'
window.addEventListener("load", function() {
  alert("Welcome to Fun Bus!!!");
});

// ==================== Changing window color using 'resize'
window.addEventListener("resize", function(event) {
  // if current width is 500px or less, change background
  if (window.outerWidth <= 400) {
    this.console.log("updating style");
    document.body.style.backgroundColor = "lightblue";
  } else {
    document.body.style.backgroundColor = "white";
  }
});

// ==================== Setting nav bar color
const mainNav = document.querySelector(".main-navigation");
//changed nav color
mainNav.style.backgroundColor = "#FFEBCD";

// ==================== Pick your Destination image using 'mouseover' and 'mouseout'
const desImage = document.querySelector(".content-destination img");
desImage.addEventListener("mouseover", function() {
  desImage.style.opacity = 0.3;
  console.log("Mouse is over bus");
});
desImage.addEventListener("mouseout", function() {
  desImage.style.opacity = 1;
  console.log("Mouse is out of bus");
});

// ==================== sign me up button using 'click'
const signUpBtn = document.querySelectorAll(".btn");
signUpBtn[0].addEventListener("click", function() {
  prompt("Enter Your Email:");
});
signUpBtn[1].addEventListener("click", function() {
  prompt("Enter Your Email:");
});
signUpBtn[2].addEventListener("click", function() {
  prompt("Enter Your Email:");
});
