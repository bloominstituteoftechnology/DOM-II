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
let bcontainer = document.querySelector(".blocks")
bcontainer.style.border = '2px solid blue';
bcontainer.style.width = "100%";

let count = 0;
const orderB = (event) => {
    event.stopPropagation();
    event.target.style.order = --count;
}

bblock.addEventListener('click', orderB)
rblock.addEventListener('click', orderB)
gblock.addEventListener('click', orderB)
pblock.addEventListener('click', orderB)
gyblock.addEventListener('click', orderB)
bblock.addEventListener('click', orderB)

const orderMouse = (event) => {
    event.stopPropagation();
    event.target.style.alignSelf = "flex-end";
    // event.target.style.backgroundColor = "black";
}
const orderReturn = (event) => {
    event.stopPropagation();
    event.target.style.alignSelf = "flex-start";
    // event.target.style.backgroundColor = "white";
}
rblock.addEventListener('mousedown', orderMouse)
bblock.addEventListener('mousedown', orderMouse)
gblock.addEventListener('mousedown', orderMouse)
pblock.addEventListener('mousedown', orderMouse)
gyblock.addEventListener('mousedown', orderMouse)

rblock.addEventListener('mouseup', orderReturn)
bblock.addEventListener('mouseup', orderReturn)
gblock.addEventListener('mouseup', orderReturn)
pblock.addEventListener('mouseup', orderReturn)
gyblock.addEventListener('mouseup', orderReturn)
// bblock.addEventListener('mousedown', orderMouse)
