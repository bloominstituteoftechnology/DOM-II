// Your code goes here

const navLink = Array.from(document.querySelectorAll(".nav-link"));
const navBar = document.querySelector(".main-navigation");
const introH2 = document.querySelector(".intro h2");
const contentOne = document.querySelector(".content-section");
const contentTwo = document.querySelector(".inverse-content");
const contentThree = document.querySelector(".content-destination");
const destination = document.querySelectorAll(".destination .btn");
console.log(introH2);

// window.addEventListener("load", (event) => {
//   alert("Welcome");
// });

navLink.forEach((el) => {
  el.addEventListener("pointerover", (event) => {
    el.style.color = "green";
  });
  el.addEventListener("pointerout", (event) => {
    el.style.removeProperty("color");
  });
  el.addEventListener("focus", (event) => {
    el.style.width = "45%";
    el.style.color = "white";
  });
  el.addEventListener("focusout", (event) => {
    el.style.width = "5%";
    el.style.color = "skyblue";
  });
});

navBar.addEventListener("click", (event) => {
  navBar.style.backgroundColor = "blue";
});

introH2.addEventListener("mouseover", (event) => {
  introH2.style.backgroundColor = "grey";
});

contentOne.addEventListener("select", (event) => {
  contentOne.style.backgroundColor = "grey";
});

contentTwo.addEventListener("dblclick", (event) => {
  contentTwo.style.backgroundColor = "grey";
});

contentThree.addEventListener("wheel", (event) => {
  contentThree.style.border = "1px solid black";
});

destination[0].addEventListener("mousemove", (event) => {
  destination[0].innerHTML = "HELLO";
});
  