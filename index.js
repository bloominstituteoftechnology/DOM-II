const block = document.querySelectorAll(".block"); //querySelector(All) is okay here too
//Rockets
let orderValue = -1;

function moveToTop(event) {
    event.target.style.order = orderValue;
    orderValue -= 1;
}
//OR----
// block.forEach((obj) => {
//      obj.addEventListener("click", () => {        
//          const blocks = obj.parentNode;
//          blocks.removeChild(obj); 
//         blocks.prepend(obj); //prepends object to the top of parentNode
//      });
//  });
// const block = document.querySelectorAll(".block");

// const moveRight = (event) => {
//       this.style.marginLeft =  + 'px';
//   };
// const backLeft = (event) => {
//       this.style.marginLeft = "10px";
//   };


// // Associate click event listener with each block.
//  //const block = document.getElementsByClassName("block");
// let blocks = Array.from(document.querySelectorAll('.block'));
blocks.forEach((block) => {
    block.addEventListener('click', moveToTop);
    //    block.addEventListener('mousedown', moveRight);
    //    block.addEventListener('mouseup', backLeft);
});