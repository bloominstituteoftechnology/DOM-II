let a = document.getElementsByClassName('block--red')[0];
let b = document.getElementsByClassName('block--blue')[0];
let c = document.getElementsByClassName('block--green')[0];
let d = document.getElementsByClassName('block--pink')[0];
let e = document.getElementsByClassName('block--gray')[0];

let count = -1;

function rocket(e) {
    e.target.style.order = count;
    count--;
}

function down(e) {
    e.target.style.transitionProperty = 'margin-left';
    e.target.style.marginLeft = '900px';
    e.target.style.transitionDuration = '8s';
}

function up(e) {
    e.target.style.marginLeft = '10px';
}

a.addEventListener('click', rocket);
b.addEventListener('click', rocket);
c.addEventListener('click', rocket);
d.addEventListener('click', rocket);
e.addEventListener('click', rocket);

a.addEventListener('mousedown', down);
b.addEventListener('mousedown', down);
c.addEventListener('mousedown', down);
d.addEventListener('mousedown', down);
e.addEventListener('mousedown', down);

a.addEventListener('mouseup', up);
b.addEventListener('mouseup', up);
c.addEventListener('mouseup', up);
d.addEventListener('mouseup', up);
e.addEventListener('mouseup', up);
