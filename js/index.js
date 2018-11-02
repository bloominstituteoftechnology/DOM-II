// `mouseover`
// `keydown`
// `wheel`
// `drag / drop`
// `load`
// `focus`
// `resize`
// `scroll`
// `select`
// `dblclick`
let you = prompt("Enter Your Name: ");
let title = document.querySelector(".intro h2");
document.addEventListener("copy", e => {
  title.textContent = `Check what you actually copied lol`;
  e.clipboardData.setData("text/plain", "ùwú");
  e.preventDefault();
});
document.addEventListener("keydown", e => {
  title.textContent = `Please don't press ${e.key}, ${you}`;
});

let counter = 0;
const logo = document.querySelector(".logo-heading");
document.addEventListener("wheel", e => {
  logo.style.position = "relative";
  counter += e.deltaY / 20;
  counter < 0 ? (counter = 0) : (counter = counter);
  logo.style.top = counter + "px";
});
let adventure = document.querySelector(".img-content");
let text = document.querySelector(".text-content");
adventure.addEventListener("click", e => {
  text.style.color = "slateblue";
});
adventure.addEventListener("mouseover", e => {
  title.textContent = "Wanna go here?";
});
