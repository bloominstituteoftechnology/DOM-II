const allBlocks = document.querySelectorAll(".block");
console.log(allBlocks);


//If a block is clicked change the order of the items in flexbox to make sure that item is 0
allBlocks.forEach(block => {
    block.addEventListener('click', (event) => {
        console.log(event)
        block.classList.add('box')
    })
})


allBlocks.forEach(block => {
    block.addEventListener('dblclick', (event) => {
        block.classList.remove('box')
    })
});

allBlocks.forEach(block => {
    block.addEventListener('mouseover', (event) => {
        block.classList.add('moveRight')
    })
})

allBlocks.forEach(block => {
    block.addEventListener('mouseleave', (event) => {
        block.classList.add('moveLeft')
    })
})