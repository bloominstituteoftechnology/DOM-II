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
