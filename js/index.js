// Your code goes here

// MOUSEOVER STYLE


document.addEventListener("mouseover", function (event) {   
    event.target.style.color = "orange";
    setTimeout(function() {
      event.target.style.color = "";
    }, 200);
  }, false);

//MOUSE ENTER_LEAVE

var enterText = 0;
var leaveText = 0;

const mouseTarget = document.getElementByClassName('content-destination');

mouseTarget.addEventListener('mouseenter', e => {
  mouseTarget.style.border = '5px dotted orange';
  enterText++;
});

mouseTarget.addEventListener('mouseleave', e => {
  mouseTarget.style.border = '1px solid #333';
  leaveText++;
});


//CLICK

const signupButton = document.querySelectorAll('.content-pick .destination .btn');

signupButton.addEventListener('click', (event) => { event.target.style.backgroundColor = 'black'; });


// KEYDOWN 

document.addEventListener('keydown', (event) => {
    if (event.key === 'Esc') {
       console.log('I see you wanna have fun')
        }
    });

// WHEEL // I don't have a mouse with a wheel so this will be harder for me to test**

let scale = 1;
const wheel = document.querySelectorAll('div p');
wheel.onwheel = zoom;

function zoominclose(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;
  scale = Math.min(Math.max(.125, scale), 4);
  wheel.style.transform = `scale(${scale})`;
  
}

// LOAD

window.addEventListener('load', (event) => {
  console.log('this page is now fully loaded')
});

// ONLINE 

window.addEventListener('online', (event) => {
  console.log("You are now connected to the network.");
});

// FOCUS // this one is also difficult for me to test**

const links = document.querySelector('.nav .nav-link');

links.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';    
});

links.addEventListener('blur', (event) => {
  event.target.style.background = '';    
});


//RESIZE ATTEMPT
// const heightOutput = document.querySelector('#height');
// const widthOutput = document.querySelector('#width');

// function reportWindowSize() {
//   heightOutput.textContent = window.innerHeight;
//   widthOutput.textContent = window.innerWidth;
// }

// window.onresize = reportWindowSize;

// window.addEventListener('resize', reportWindowSize);
// NOTE THIS REQUIRES ALTERING THE HTML TO CREATE HEIGHT AND WINDOW CLASSES

//SCROLL

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});

// SELECT

function navSelection(event) {
  const nav = document.getElementsByClassName('main-navigation');
  const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
  nav.textContent = `You selected: ${selection}`;
}

nav.addEventListener('select', navSelection);

// DBLCLICK

const title = document.querySelector('.main-navigation .container nav-container .logo-heading');

title.addEventListener('dblclick', function (e) {
  title.classList.toggle('large');
});

// DRAG & DROP

//* not attempted yet *//


