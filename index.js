const blocks = document.querySelectorAll(".block");
// const red = document.querySelector(".block--red");
// const blue = document.querySelector(".block--blue");
// const green = document.querySelector(".block--green");
// const pink = document.querySelector(".block--pink");
// const gray = document.querySelector(".block--gray");

// blocks.forEach((block) => {
//   block.addEventListener("click", () => {
//     console.log(block);
//     const parent = block.parentNode;
//     parent.removeChild(block);
//     parent.prepend(block);
//   });
// });
//take each element of blocks and name it block
// can be called whatever

for (let i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener("click", () => {
        console.log(blocks[i]);
        const parent = blocks[i].parentNode;
        parent.removeChild(blocks[i]);
        parent.prepend(blocks[i]);
      });
}