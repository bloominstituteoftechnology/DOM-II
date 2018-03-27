let red = document.querySelector(".block--red")
let blue = document.querySelector(".block--blue")
let green = document.querySelector(".block--green")
let pink = document.querySelector(".block--pink")
let gray = document.querySelector(".block--gray")
let blocks = document.querySelector('.blocks');

let order = -1;

// function blockClicked(e) {
//     order--
//     e.target.style.order = order;
// };

function mouseDown(e) {
    e.target.style.position = "relative";
    e.target.style.left = "15rem";
};

function mouseUp(e) {
    e.target.classList.add("mouseRelease");
    console.log('test')
};

// blocks.addEventListener('click', blockClicked);
red.addEventListener('mouseup', mouseUp);
red.addEventListener('mousedown', mouseDown);

blue.addEventListener('mouseup', mouseUp);
blue.addEventListener('mousedown', mouseDown);

green.addEventListener('mouseup', mouseUp);
green.addEventListener('mousedown', mouseDown);

pink.addEventListener('mouseup', mouseUp);
pink.addEventListener('mousedown', mouseDown);

gray.addEventListener('mouseup', mouseUp);
gray.addEventListener('mousedown', mouseDown);
