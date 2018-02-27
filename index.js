const blocks = document.getElementsByClassName("blocks")[0];
const redBlock = document.getElementsByClassName("block--red")[0];
const blueBlock = document.getElementsByClassName("block--blue")[0];
const greenBlock = document.getElementsByClassName("block--green")[0];
const pinkBlock = document.getElementsByClassName("block--pink")[0];
const grayBlock = document.getElementsByClassName("block--gray")[0];


// for (let i = 0; i < blocks.length; i++) {
//   blocks[i].addEventListener("click", (event) => {
//     if(event.target.classList.contains === redBlock) {
//       console.log("red");
//     }
//   })
// }

blocks.addEventListener("click", (event) => {
    
});

redBlock.addEventListener("click", (event) => {
  event.target.style.order = -1;
  
});

blueBlock.addEventListener("click", (event) => {
 event.target.style.order = -2;
});

greenBlock.addEventListener("click", (event) => {
  event.target.style.order = -3;
});

pinkBlock.addEventListener("click", (event) => {
  event.target.style.order = -4;
});

grayBlock.addEventListener("click", (event) => {
  event.target.style.order = -5;
});


