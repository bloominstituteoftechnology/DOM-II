// * [x] `keydown`
// * [x] `keyup`
// * [x] `mouseover`
// * [ ] `mouseout`
// * [ ] `dblclick`
// * [x] `scroll`
// * [ ] `resize`
// * [ ] `click`
// * [x] `mouseenter`
// * [x] `mouseleave`

// YOUR CODE GOES HERE\\

//  `keydown`on Fun Bus logo
const newText = document.querySelector(".logo-heading");

window.addEventListener("keydown", () => {
    const newText = document.querySelector(".logo-heading");
    newText.textContent = "Come Travel Us!";
    newText.style.color = "#4c89bf";
    newText.style.fontSize = "5rem";
  });

//  `keyup`on Fun Bus logo
window.addEventListener("keyup", () => {
  newText.textContent = "Fun Bus";
  newText.style.color = "#212529";
  newText.style.fontSize = "4rem";
});

//  `mouseover` on Navagation
document.querySelectorAll(".nav a").forEach(element => {
  element.addEventListener("mouseover", () => {
    element.style.color = "#4c89bf";
  });
})

//  `mouseout`
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("mouseout", () => {
    link.style.color = "";
  });
});

// `dblclick`
// const changeImage = document.querySelector(".intro img");
// Console.log(changeImage);

// changeImage.addEventListener("dblclick", () => {
//     changeImage.src = "img/volkswagen.jpg";
// });

// `scroll`
document.addEventListener("scroll", () => {
  document.querySelectorAll("h2").forEach(item => {
    item.style.color = "#4c89bf";
    item.style.color = "#4c89bf";
  });
});

// `resize`


// `click`


//  `mouseenter`
const newPointer = document.querySelectorAll("h4");   //hover image not showing

newPointer.forEach(element => {
  element.addEventListener("mouseenter", () => {
    element.style.cursor =
    element.style.backgroundColor = "#4c89bf";
  });
});

// `mouseleave`

newPointer.forEach(element => {
  element.addEventListener("mouseleave", () => {
    element.style.background = "";
  });
});