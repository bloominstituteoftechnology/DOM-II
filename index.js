let redBlock = document.getElementsByClassName('block--red')[0];
let blueBlock = document.getElementsByClassName('block--blue')[0];
let greenBlock = document.getElementsByClassName('block--green')[0];
let pinkBlock = document.getElementsByClassName('block--pink')[0];
let grayBlock = document.getElementsByClassName('block--gray')[0];

let count = -1;

function rocket(e) {
  e.target.style.order = count;
  count--;
}

redBlock.addEventListener('click', rocket);
blueBlock.addEventListener('click', rocket);
greenBlock.addEventListener('click', rocket);
pinkBlock.addEventListener('click', rocket);
grayBlock.addEventListener('click', rocket);

function down(e) {
  e.target.setAttribute('style', 'transition-property: margin-left: 900px; transition-duration: 6s');
}

function up(e) {
  e.target.style.marginLeft = '10px';
}

redBlock.addEventListener('mousedown', down);
blueBlock.addEventListener('mousedown', down);
greenBlock.addEventListener('mousedown', down);
pinkBlock.addEventListener('mousedown', down);
grayBlock.addEventListener('mousedown', down);

redBlock.addEventListener('mouseup', up);
blueBlock.addEventListener('mouseup', up);
greenBlock.addEventListener('mouseup', up);
pinkBlock.addEventListener('mouseup', up);
grayBlock.addEventListener('mouseup', up);
