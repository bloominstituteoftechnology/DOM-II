// Your code goes here
//
//  img.addEventListener("mouseover", (event) => {
//     img.target.style.color = "orange"
//  })

//select the elements

//1. copy
let intro = document.querySelector(".intro h2");
intro.addEventListener("copy", (event) => {
  alert("Intro is copied");
});


//2. mouseover
let buttons = document.querySelectorAll(".btn");
buttons[0].addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "purple";
});
buttons[1].addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "purple";
});
buttons[2].addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "purple";
});

buttons[0].addEventListener("mouseleave", (event) => {
  event.target.style.backgroundColor = "blue ";
});
buttons[1].addEventListener("mouseleave", (event) => {
  event.target.style.backgroundColor = "blue";
});
buttons[2].addEventListener("mouseleave", (event) => {
  event.target.style.backgroundColor = "blue";
});


//3. click
let busSand = document.querySelector(".intro img");
busSand.addEventListener("click", (event) => {
  alert("Welcome To Fun Bus!");
});


//4. remove
let logoHeading = document.querySelector(".logo-heading");
logoHeading.addEventListener("mouseleave", (event) => {
  event.target.remove("letsGo");
});
logoHeading.addEventListener("mouseover", (event) => {
  event.target.add("letsGo");
});


//5. contextmenu
let navLinks = document.querySelectorAll(".nav a");
navLinks[0].addEventListener("contextmenu", (event) => {
  event.target.style.color = "red";
});
navLinks[1].addEventListener("contextmenu", (event) => {
  event.target.style.color = "red";
});
navLinks[2].addEventListener("contextmenu", (event) => {
  event.target.style.color = "red";
});
navLinks[3].addEventListener("contextmenu", (event) => {
  event.target.style.color = "red";
});


//6. wheel
let footer = document.querySelector("footer");
footer.addEventListener("wheel", (event) => {
  event.target.style.backgroundColor = "yellow";
});


//7. doubleclick
let letsGo = document.querySelector(".img-content img");
letsGo.addEventListener("dblclick", (event) => {
  event.preventDefault();
  alert("Join is for the fun ride");
});


//8 mousemove
let destination = document.querySelectorAll(".destination h4");
destination[0].addEventListener("mousemove", (event) => {
  event.target.style.color = "orange";
});
destination[1].addEventListener("mousemove", (event) => {
  event.target.style.color = "orange";
});
destination[2].addEventListener("mousemove", (event) => {
  event.target.style.color = "orange";
});


//9 drag
let pickYour = document.querySelector(".content-destination h2");
pickYour.addEventListener("drag", (event) => {
  alert("Pick your destination is being dragged");
});


//10 animation
// destinations.addEventListener("webkitAnimationStart", (event) => {
//     event.target.style.backgroundColor = "red";
//   });
