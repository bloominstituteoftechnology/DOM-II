// Grab HTML Collection block
const block = document.getElementsByClassName("block");

// Create String Array of box classes (highest specificity)
let boxClass = []; 

for (let i = 0; i < block.length; i++) {
  let boxClassList = block[i].className;
  boxClassList = boxClassList.split(' ');
  boxClass[i] = boxClassList[1]; 
}

// addEventListener to each box 
// Clicked box moves to top of boxClass array
// other boxes cascade down

for (let i = 0; i < block.length; i++) {
  block[i].addEventListener("click", () => {

    // old class order removed
    for (let j = 0; j < block.length; j++) {
      block[j].classList.remove(boxClass[j]);
    }

    boxClass.splice(0, 0, boxClass[i]);
    boxClass.splice(i + 1, 1);

    // new class order added
    for (let j = 0; j < block.length; j++) {
      block[j].classList.add(boxClass[j]);
    }
  })
}