// Your code goes here
let logo = document.querySelector(".logo-heading");

// 1. Font size of the elements on the nav bar change increase when mouseover
logo.addEventListener("mouseover", () => {
  logo.style.fontSize = "50px";

  logo.addEventListener("mouseleave", () => {
    logo.style.fontSize = "40px";
  });
});

let navItem = document.querySelectorAll("nav a");

for (let i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener("mouseover", () => {
    navItem[i].style.fontSize = "24px";

    navItem[i].addEventListener("mouseleave", () => {
      navItem[i].style.fontSize = "16px";
    });
  });
}

// 2. Bakground Change when pressing a key down
let body = document.querySelector("body");

body.addEventListener("keydown", () => {
  body.style.background = "gray";
});

body.addEventListener("keyup", () => {
  body.style.background = "white";
});

// 3. Paragraphs Background color

let paragraph = document.querySelectorAll("p");

paragraph.forEach(item => {
  item.addEventListener("mousemove", function() {
    this.parentNode.style.backgroundColor = "gray";
    this.parentNode.style.borderRadius = "10px";
  });
});

paragraph.forEach(item => {
  item.addEventListener("mouseleave", function() {
    this.parentNode.style.backgroundColor = "";
  });
});

// 4. Clicking clicking on pictures makes them dissapear

let imgs = document.querySelectorAll("img");

imgs.forEach(item => {
  item.addEventListener("click", function() {
    this.parentNode.style.display = "none";
  });
});

// 5. clicking on paragraphs makes its width 100%

paragraph.forEach(item => {
  item.addEventListener("click", function() {
    this.parentNode.style.width = "100%";
  });
});

// 6. Double click on a button changed its color

let button = document.querySelectorAll(".btn");

button.forEach(item => {
  item.addEventListener("dblclick", function() {
    this.style.backgroundColor = "red";
  });
});

// 7. draggin imgs alert

imgs.forEach(item => {
  item.addEventListener("drag", function(event) {
    alert("No dragging");
  });
});
