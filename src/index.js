import './less/index.less'

//              Mouseover 

let mouseover = document.querySelector("#mouseover");

// This handler will be executed only once
mouseover.addEventListener("mouseenter", function( event ) {
  // highlight the mouseenter target
  event.target.style.color = "blue";
  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);



//               Keydown

const log = document.querySelector('#log');
function logKey(e) {
  log.textContent += ` ${e.code}`;
}
document.addEventListener('keydown', logKey);



//                Wheel

function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(.125, scale), 4);

  // Apply scale transform
  mainPic.style.transform = `scale(${scale})`;
}

let scale = 1;
const mainPic = document.querySelector('#mainPic');
mainPic.onwheel = zoom;

mainPic.addEventListener('wheel', zoom);



//                load

window.addEventListener('load', () => {
  setTimeout(function() {
    const onLoad = document.querySelector('#onLoad');
    onLoad.style.backgroundColor = "purple"
  }, 500);
});



//                  focus
const home = document.querySelector('#link1');
console.log(home);


home.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';
});



//                resize
const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.addEventListener('resize', reportWindowSize);



//              select

function logSelection(event) {
  const log = document.querySelector('#scroll-log');
  const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
  log.textContent = `You selected: ${selection}`;
}

const aboutUs = document.querySelector('#link2');
aboutUs.addEventListener('select', logSelection);




//          dblclick

const blog = document.querySelector('#link3');

blog.addEventListener('dblclick', (event) => {
  event.target.style.background = 'green';
});



//              prevent default
document.querySelector("#link4").addEventListener("click", function(event) {
  document.getElementById("rick-roll").innerHTML += "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
  event.preventDefault();
}, false);