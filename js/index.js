// Your code goes here
let logo = document.querySelector(".logo-heading");

let navItem = document.querySelectorAll("nav a");

logo.addEventListener("mouseover", () => {
  logo.style.fontSize = "50px";

  logo.addEventListener("mouseleave", () => {
    logo.style.fontSize = "40px";
  });
});

for (let i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener("mouseover", () => {
    navItem[i].style.fontSize = "24px";

    navItem[i].addEventListener("mouseleave", () => {
      navItem[i].style.fontSize = "16px";
    });
  });
}
