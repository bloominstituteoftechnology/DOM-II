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
document.addEventListener("copy", e => {
  console.log(`Pleases don't forge ${you}`);
});

let counter = 0;
const logo = document.querySelector(".logo-heading");
document.addEventListener("wheel", e => {
  logo.style.position = "relative";
  counter += e.deltaY / 20;
  counter < 0 ? (counter = 0) : (counter = counter);
  logo.style.top = counter + "px";
});
