const blocks = document.querySelectorAll(".block");
blocks.forEach((block) =>  {
    block.addEventListener("mousedown", () => {
        block.style.transform = "translate(70px)"
    });
    block.addEventListener("mouseup", () => {
        block.style.transform = "translate(0px)"
    });
    block.addEventListener("click", () => {
        const parent = block.parentNode;
        parent.removeChild(block);
        parent.prepend(block);
    });
});

// for (let i = 0; i < blocks.length; i++) {
//     blocks[i].addEventListener("mousedown", () => {
//         console.log(blocks[i]);
//         blocks[i].style.transform = "translate(100px)"
//     });
//     blocks[i].addEventListener("mouseup", () => {
//         console.log(blocks[i]);
//         blocks[i].style.transform = "translate(0px)"
//     });
//     blocks[i].addEventListener("click", () => {
//         console.log(blocks[i]);
//         const parent = blocks[i].parentNode;
//         parent.removeChild(blocks[i]);
//         parent.prepend(blocks[i]);
//     });
// }

