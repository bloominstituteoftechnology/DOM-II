let a = document.getElementsByClassName('block--red')[0];
let b = document.getElementsByClassName('block--blue')[0];
let c = document.getElementsByClassName('block--green')[0];
let d = document.getElementsByClassName('block--pink')[0];
let e = document.getElementsByClassName('block--gray')[0];

let count = -1;

function rocket(e) {
    e.target.style.order = count;
    count -= 1;
}

a.addEventListener('click', rocket);
b.addEventListener('click', rocket);
c.addEventListener('click', rocket);
d.addEventListener('click', rocket);
e.addEventListener('click', rocket);
