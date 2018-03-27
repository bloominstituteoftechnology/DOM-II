let rblock = document.querySelector(".block--red");
rblock.style.border = '2px solid yellow';
let bblock = document.querySelector(".block--blue")
bblock.style.border = '2px solid red';
let gblock = document.querySelector(".block--green");
gblock.style.border = '2px solid red';
let pblock = document.querySelector(".block--pink")
pblock.style.border = '2px solid blue';
let gyblock = document.querySelector(".block--gray")
gyblock.style.border = '2px solid blue';

let count = 0;



const array = document.querySelectorAll(".block")
console.log(typeof array);
console.log(array);
const orderB = (event) => {
event.target.style.order = --count;
}

bblock.addEventListener('click', orderB)
rblock.addEventListener('click', orderB)
gblock.addEventListener('click', orderB)
pblock.addEventListener('click', orderB)
gyblock.addEventListener('click', orderB)
bblock.addEventListener('click', orderB)