// Your code goes here

// MOUSEOVER STYLE

document.addEventListener("mouseover", function (event) {   
    event.target.style.color = "orange";
    setTimeout(function() {
      event.target.style.color = "";
    }, 200);
  }, false);

  const signupButton = document.querySelector('.content-pick .destination .btn');

signupButton.addEventListener("mouseover", function (event) {
  event.target.style.color = "green"; 
});


// KEYDOWN 

document.addEventListener('keydown', function (event) {
    if (event.key === 'Esc') {
       console.log('I see you wanna have fun');
        }
    }

// WHEEL // I don't have a mouse with a wheel so this will be harder for me to test**

var scale = 1;
const wheel = document.querySelector('div');
wheel.onwheel = zoom;

function zoominclose(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;
  scale = Math.min(Math.max(.125, scale), 4);
  wheel.style.transform = `scale(${scale})`;
  
}


// LOAD

window.addEventListener('load', function (event) => {
  console.log('this page is now fully loaded');
})

// FOCUS


const links = document.querySelector('.nav .nav-link');

links.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';    
});

links.addEventListener('blur', (event) => {
  event.target.style.background = '';    
});


//RESIZE
const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;

window.addEventListener('resize', reportWindowSize);


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
  const nav = document.getElementById('.main-navigation');
  const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
  nav.textContent = `You selected: ${selection}`;
}

const input = document.querySelector('input');
input.addEventListener('select', logSelection);

// DBLCLICK

const card = document.querySelector('.main-navigation .container nav-container .logo-heading');

card.addEventListener('dblclick', function (e) {
  card.classList.toggle('large');
});



