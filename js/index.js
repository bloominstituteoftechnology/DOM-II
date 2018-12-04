// Your code goes here

// ==================== Pick your Destination image using mouseover and mouseout
const desImage = document.querySelector(".content-destination img");
desImage.addEventListener("mouseover", function() {
  desImage.style.opacity = 0.3;
  console.log("Mouse is over bus");
});
desImage.addEventListener("mouseout", function() {
  desImage.style.opacity = 1;
  console.log("Mouse is out of bus");
});

// ==================== sign me up button using click
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
