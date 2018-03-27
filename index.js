// ================== ROCKET ================== //

const blocksArray = Array.from(document.querySelectorAll('.block'));

// blocksArray.forEach( (e) => {
//   e.addEventListener("click", function() {
//     e.parentElement.prepend(e);
//   });
// });

// ================== TRAVELERS ================== //

blocksArray.forEach( (e) => {
  
  e.addEventListener("mousedown", () => {
  e.style.marginLeft = "1500px";
  });
});