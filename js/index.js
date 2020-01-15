// Your code goes here

// Mouse Over
const nav = document.querySelector(".nav");
nav.addEventListener("mouseover", e => {
  e.target.style.color = "lightgreen";
});

// Key Down
const body = document.querySelector("body");
const h2List = document.querySelectorAll("h2");
body.addEventListener("keydown", () => {
h2List.forEach(element => {
element.style.color = "purple";
});
});

// Wheel
const footer = document.querySelector("footer");
footer.addEventListener("wheel", function(e) {
  e.target.style.border = "2px solid green";
});

// Drag Start
const draggedImg = document.querySelectorAll("img");

draggedImg.forEach(img => {
  img.addEventListener("dragstart", () => {
    img.style.opacity = "50%";
  });
});

// Drag End
draggedImg.forEach(img => {
    img.addEventListener("dragend", () => {
      img.style.opacity = "100%";
    });
  });

// Load
window.addEventListener("load", () => {
    alert("Welcome to the FUN BUS!");
  });

// Scroll
const navBar = document.querySelector(".main-navigation");
navBar.addEventListener("scroll", () => {
  navBar.style.position = "fixed";
});

// Double Click
const card = document.querySelectorAll('h4');
card.forEach(function(card){
  card.addEventListener('dblclick', (e) => {
    e.stopPropagation();
    card.classList.toggle(card.style.color = "orange");
  });
})

// Mouse Out
logoColor.addEventListener("mouseout", () => {
    logoColor.style.color = "hotpink";
  });

//   Scale *Logo*
const logo = document.querySelector(".logo-heading");

logo.addEventListener("mouseenter", (event) => {
    logo.style.transform = "scale(1.5)";
    logo.style.transition = "all 0.3s";
})

logo.addEventListener("mouseleave", (event) => {
    logo.style.transform = "scale(1.0)";
    logo.style.transition = "all 0.3s";
})


// Prevent Event Propagation
paragraph = document.querySelector('p');
  intro = document.querySelector('.intro');
  containerHome = document.querySelector('.home');

  paragraph.addEventListener('click', function(evenet) {
      paragraph.style.backgroundColor = 'green';
      event.stopPropagation();
  });

  intro.addEventListener('click', function() {
    intro.style.backgroundColor = 'red';
});