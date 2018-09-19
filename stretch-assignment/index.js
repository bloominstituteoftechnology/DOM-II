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
red.addEventListener('mouseup', redStop);

function redMove() {
    clearInterval(click);
    click = setInterval(moverRed, 1);
}

function moverRed() {
    if (r < 1400){
        r++;
        red.style.marginLeft = `${r}px`;
        console.log(r);
    }
}

function redStop() {
    clearInterval(click);
    click = setInterval(stopperRed, 1);
}

function stopperRed() {
    if (r > 10){
        r--;
        red.style.marginLeft = `${r}px`;
        console.log(r);
    }
    else {
        r = 10;
    }
}


// BLUE --------------------------------------------------------------------------------------
blue.addEventListener('click', function(event){
    event.target.style.order = i;
    i--;
})

let b = 0;
blue.addEventListener("mousedown", blueMove);
blue.addEventListener('mouseup', blueStop);

function blueMove() {
    clearInterval(click);
    click = setInterval(moverBlue, 1);
}

function moverBlue() {
    if (b < 1400){
        b++;
        blue.style.marginLeft = `${b}px`;
    }
    
}

function blueStop() {
    clearInterval(click);
    click = setInterval(stopperBlue, 1);
}

function stopperBlue() {
    if (b > 10){
        b--;
        blue.style.marginLeft = `${b}px`;
    }
    else {
        b = 10;
    }
}

// GREEN --------------------------------------------------------------------------------------
green.addEventListener('click', function(event){
    event.target.style.order = i;
    i--;
})

let g = 0;
green.addEventListener("mousedown", greenMove);
green.addEventListener('mouseup', greenStop);

function greenMove() {
    clearInterval(click);
    click = setInterval(moverGreen, 1);
}

function moverGreen() {
    if (g < 1400){
        g++;
        green.style.marginLeft = `${g}px`;
    }
    
}

function greenStop() {
    clearInterval(click);
    click = setInterval(stopperGreen, 1);
}

function stopperGreen() {
    if (g > 10){
        g--;
        green.style.marginLeft = `${g}px`;
    }
    else {
        g = 10;
    }
}



// PINK --------------------------------------------------------------------------------------
pink.addEventListener('click', function(event){
    event.target.style.order = i;
    i--;
})

let p = 0;
pink.addEventListener("mousedown", pinkMove);
pink.addEventListener('mouseup', pinkStop);

function pinkMove() {
    clearInterval(click);
    click = setInterval(moverPink, 1);
}

function moverPink() {
    if (p < 1400){
        p++;
        pink.style.marginLeft = `${p}px`;
    }
    
}

function pinkStop() {
    clearInterval(click);
    click = setInterval(stopperPink, 1);
}

function stopperPink() {
    if (p > 10){
        p--;
        pink.style.marginLeft = `${p}px`;
    }
    else {
        p = 10;
    }
}

// GRAY --------------------------------------------------------------------------------------
gray.addEventListener('click', function(event){
    event.target.style.order = i;
    i--;
})

let y = 0;
gray.addEventListener("mousedown", grayMove);
gray.addEventListener('mouseup', grayStop);

function grayMove() {
    clearInterval(click);
    click = setInterval(moverGray, 1);
}

function moverGray() {
    if (y < 1400){
        y++;
        gray.style.marginLeft = `${y}px`;
    }
    
}

function grayStop() {
    clearInterval(click);
    click = setInterval(stopperGray, 1);
}

function stopperGray() {
    if (y > 10){
        y--;
        gray.style.marginLeft = `${y}px`;
    }
    else {
        y = 10;
    }
}