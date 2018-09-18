let blocks = document.querySelectorAll('.block');
let i = -1;
let click;

let red = document.querySelector('.block--red');
let blue = document.querySelector('.block--blue');
let green = document.querySelector('.block--green');
let pink = document.querySelector('.block--pink');
let gray = document.querySelector('.block--gray');

// RED
red.addEventListener('click', function(event){
    event.target.style.order = i;
    i--;
})

// let k = 0;

// red.addEventListener("mousedown", redMove);
// red.addEventListener('mouseup', redStop);

// function redMove() {
//     click = setInterval(move(red), 1000);
// }

// function redStop() {
//     clearInterval(click);
// }

// function move(block) {
//     k++;
//     block.style.marginLeft+=`${k}px`;
//     console.log(k)
// }



// BLUE
blue.addEventListener('click', function(event){
    event.target.style.order = i;
    i--;
})

// GREEN
green.addEventListener('click', function(event){
    event.target.style.order = i;
    i--;
})

// PINK
pink.addEventListener('click', function(event){
    event.target.style.order = i;
    i--;
})

// GRAY
gray.addEventListener('click', function(event){
    event.target.style.order = i;
    i--;
})

