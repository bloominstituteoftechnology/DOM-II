// const blocks = document.getElementsByClassName("blocks")[0];
// const redBlock = document.getElementsByClassName("block--red")[0];
// const blueBlock = document.getElementsByClassName("block--blue")[0];
// const greenBlock = document.getElementsByClassName("block--green")[0];
// const pinkBlock = document.getElementsByClassName("block--pink")[0];
// const grayBlock = document.getElementsByClassName("block--gray")[0];

// // perhaps use event.target.style.property or event.target.style.setAttribute

// // for (let i = 0; i < blocks.length; i++) {
// //   blocks[i].addEventListener("click", (event) => {
// //       event.target.style.order = -1;
// //     })
// //   }

// // blocks.addEventListener("click", (event) => {
// //
// // });

// // redBlock.addEventListener("click", (event) => {
// //   event.target.style.order = -1;
// //
// // });
// //
// blueBlock.addEventListener("click", (event) => {
//  event.target.style.order = -5;
// });
// //
// greenBlock.addEventListener("click", (event) => {
//   event.target.style.order = -6;
// });

// pinkBlock.addEventListener("click", (event) => {
//   event.target.style.order = -7;
// });

// grayBlock.addEventListener("click", (event) => {
//   event.target.style.order = -8;
// });


const block = document.querySelectorAll('.block'); // selected all blocks by using one variable and matching class

block.forEach((item) => {  //forEach loop to iterate over NodeList of block items
    item.addEventListener('click', () => {

    const parent = item.parentElement; // accessing parent element ('blocks')
//    parent.removeChild(item); // removes child
    parent.prepend(item);    // inserts new child before the existing first child of the parentElement
});
});
