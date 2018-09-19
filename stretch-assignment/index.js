let blocks = document.querySelectorAll('.block');
let i = -1;
let click;

let red = document.querySelector('.block--red');
let blue = document.querySelector('.block--blue');
let green = document.querySelector('.block--green');
let pink = document.querySelector('.block--pink');
let gray = document.querySelector('.block--gray');

function stop() {
    clearInterval(click);
}


// RED --------------------------------------------------------------------------------------
red.addEventListener('click', function(event){
    event.target.style.order = i;
    i--;
})

let r = 0;
red.addEventListener("mousedown", redMove);
red.addEventListener('mouseup', stop);

function redMove() {
    click = setInterval(moverRed, 100);
}

function moverRed() {
    if (r < 1400){
        r+=20;
        red.style.marginLeft = `${r}px`;
        console.log(r);
    }
    
}


// BLUE --------------------------------------------------------------------------------------
blue.addEventListener('click', function(event){
    event.target.style.order = i;
    i--;
})

let b = 0;
blue.addEventListener("mousedown", blueMove);
blue.addEventListener('mouseup', stop);

function blueMove() {
    click = setInterval(moverBlue, 100);
}

function moverBlue() {
    if (b < 1400){
        b+=20;
        blue.style.marginLeft = `${b}px`;
    }
}


// GREEN --------------------------------------------------------------------------------------
green.addEventListener('click', function(event){
    event.target.style.order = i;
    i--;
})

let g = 0;
green.addEventListener("mousedown", greenMove);
green.addEventListener('mouseup', stop);

function greenMove() {
    click = setInterval(moverGreen, 100);
}

function moverGreen() {
    if (g < 1400){
        g+=20;
        green.style.marginLeft = `${g}px`;
    }
}


// PINK --------------------------------------------------------------------------------------
pink.addEventListener('click', function(event){
    event.target.style.order = i;
    i--;
})

let p = 0;
pink.addEventListener("mousedown", pinkMove);
pink.addEventListener('mouseup', stop);

function pinkMove() {
    click = setInterval(moverPink, 100);
}

function moverPink() {
    if (p < 1400){
        p+=20;
        pink.style.marginLeft = `${p}px`;
    }
}


// GRAY --------------------------------------------------------------------------------------
gray.addEventListener('click', function(event){
    event.target.style.order = i;
    i--;
})

let y = 0;
gray.addEventListener("mousedown", grayMove);
gray.addEventListener('mouseup', stop);

function grayMove() {
    click = setInterval(moverGray, 100);
}

function moverGray() {
    if (y < 1400){
        y+=20;
        gray.style.marginLeft = `${y}px`;
    }
}