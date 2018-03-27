let red = document.querySelector(".block--red")
let blue = document.querySelector(".block--blue")
let green = document.querySelector(".block--green")
let pink = document.querySelector(".block--pink")
let gray = document.querySelector(".block--gray")
let blocks = document.querySelector('.blocks');

let order = -1;

function blockClicked(e) {
    order--
    e.target.style.order = order;
};

function mouseDown(e) {
    e.target.style.position = "relative";
    e.target.style.left = "15rem";
}

blocks.addEventListener('click', blockClicked);
blocks.addEventListener('mousedown', mouseDown);