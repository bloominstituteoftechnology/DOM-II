const redBox = document.getElementsByClassName("block--red");
const blueBox = document.getElementsByClassName("block block--blue");
const greenBox = document.getElementsByClassName("block block--green");
const pinkBox = document.getElementsByClassName("block block--pink");
const grayBox = document.getElementsByClassName("block block--gray");


document.redBox.addEventListener("click", function() {
  redBox.setAttribute("order: -1");
  console.log('clicked');
});
// blueBox.addEventListener("click", (e) => {
//   if (event.value === "block block--red") {
//     blueBox.style = "order: 1";
//   }
// })
// redBox.addEventListener("click", (e) => {
//   if (event.value === "block block--red") {
//     redBox.style = "order: 1";
//   }
// })
// redBox.addEventListener("click", (e) => {
//   if (event.value === "block block--red") {
//     redBox.style = "order: 1";
//   }
// })