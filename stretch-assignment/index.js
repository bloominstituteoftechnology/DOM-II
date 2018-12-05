const blockList = document.querySelector('.blocks');
const blocks = document.querySelectorAll('.block');
const blockOne = document.querySelector('.block-1');

blocks.forEach((block)=>{
    block.addEventListener('click', ()=>{
        blockList.prepend(block);
        // console.log(blocks);
    })
})

let mouse =false;
let currentX = 0;

blocks.forEach((block)=>{
    block.addEventListener('mousedown', ()=>{
        blockList.style.position="absolute";
        block.classList.add="move";
        console.log('down')
    });
    block.addEventListener('mouseup', ()=>{
        console.log('we up');
    }
    );
    
})

function updatePos(block) {
    mouse  = true;
    currentX = currentX+10;
    block.style.translate = `${currentX + 'px'}, 0`;
    console.log(block.style.translate);
}