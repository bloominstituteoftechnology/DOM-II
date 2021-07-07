// Your code goes here
// This handler will be executed only once when the cursor
// moves over the unordered list
const h1 = document.querySelector('h1');
h1.onmouseover = logMouseOver;
h1.onmouseout = logMouseOut;


//Mouse Over
function logMouseOver() {
  h1.innerHTML = 'mouse over detected(1)';
}


//Mouse Out
function logMouseOut() {
  h1.innerHTML = 'mouse out detected(2)';
}

//Keydown & Logs Key
const input = document.querySelector('input');
const log = document.getElementById('log');

input.addEventListener('keydown', logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}

//dblclick
const card = document.querySelector('aside');

card.addEventListener('dblclick', function (e) {
  card.classList.toggle('large');
});     

// resize
const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;


//obload
window.onload = (e) => {
  console.log('page is fully loaded');
};


function getEventType(event) {
  const log = document.getElementById('log');
  log.innerText = event.type + '\n' + log.innerText;
}

// Mouse events
document.addEventListener('click', getEventType, false);    
