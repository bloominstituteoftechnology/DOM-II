const blockList = document.querySelector(".blocks");
const blocks = document.querySelectorAll('.block');
const blockArr = Array.from(blocks);

blocks.forEach((block)=>{
    block.addEventListener('click', ()=>{
        blockList.prepend(block);
    })
})

