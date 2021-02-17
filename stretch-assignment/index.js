

const blocks = document.querySelector('.blocks');
const div = document.querySelector('div');
const block = document.querySelector('.block');
const button = document.createElement('button');


blocks.appendChild(div);
div.appendChild(red);
div.appendChild(blue);
div.appendChild(green);
div.appendChild(pink);
div.appendChild(gray);

const red =document.querySelector('.block.block--red');
const blue =document.querySelector('.block.block--blue');
const green =document.querySelector('.block.block--green');
const pink =document.querySelector('.block.block--pink');
const gray = document.querySelector('.block.block--gray');



red.addEventListener('click',()=>{
    

    

})


function focus(target){
    target.addEventListener('focus',(e)=>{
        e.target.toggle('block--red');
    });

    return target;
}





focus(name);