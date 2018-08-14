//Get NodeList with blocks
let blocks = document.querySelectorAll(".blocks");

//Add event listener to each block
blocks.forEach(function(block) {
  block.addEventListener("click", function(event) {
    let selected = event.target;
    selected.style.order = -1;
  });

  block.addEventListener("mousedown", function(event) {
    let selected = event.target;
    selected.style.marginLeft = "80px";
  });

  block.addEventListener("mouseup", function(event) {
    let selected = event.target;
    selected.style.marginLeft = "0";
  });
});
