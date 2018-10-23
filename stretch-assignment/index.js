//blocks
const red = document.querySelector('.block--red');
const blue = document.querySelector('.block--blue');
const green = document.querySelector('.block--green');
const pink = document.querySelector('.block--pink');
const grey = document.querySelector('.block--gray');
// all blocks nodelist
const blocks = document.querySelectorAll('.block');
// blocks conatainer
const blockContainer = document.querySelector('.blocks');


blocks.forEach(element => element.addEventListener('click',(event)=>{
   event.target = blocks[0];
   
}));

console.log(blocks);
console.log(blockContainer);
//position changer  
// const positionChange = (x)=>{
//     x.style.order = (blocks.firstCild.order - 1);
// }