// Your code goes here
const funHeader = document.querySelector('.main-navigation .logo-heading');
funHeader.addEventListener('mouseover', (event) => {
    event.target.style.color = 'red';    
});

// const funHeader2 = document.querySelector('home .intro h2');
// funHeader2.addEventListener('keydown', (event) => {
//     // event.stopPropagation();
//     // event.preventDefault();
//     const ctrlDown = event.ctrlKey;
//     alert('keydown event\n\n' + 'key: ' + ctrlDown);
//     event.target.style.color = 'red';    
// });

let fun2 = document.querySelector('.container .intro h2');
document.addEventListener('keydown', (event) => {
    fun2.style.color = 'orange';
});

const fun3 = document.querySelector('.container .content-section h2');
document.addEventListener('wheel', (event) => {
    console.log(event.deltaX, event.deltaY);
});

const fun4 = document.querySelectorAll('.text-content h2')[1];
document.addEventListener("dragstart", (event) => {
    dragged = event.target;
    event.target.style.opacity = .2;
}, false);

window.addEventListener("load", (event) => {
    console.log("Beep beep boop... Webpage finished loading.. beep")
});


const fun6 = document.getElementById("form");
form.addEventListener("focus", (event) => {
  event.target.style.color = 'red';    
}, true);
form.addEventListener("blur", (event) => {
  event.target.style.color = 'blue';    
}, true);


window.addEventListener("optimizedResize", function() {
    console.log("Resource conscious resize callback!");
});


let last_known_scroll_position = 0;
let run = false;

function doSomething(scroll_pos) {
    console.log('log information'); 
}

window.addEventListener('scroll', (event) => {

  last_known_scroll_position = window.scrollY;

  if (!run) {

    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });
     
    ticking = true;

  }
  
});

const fun9 = document.getElementById('test');
fun9.addEventListener('select', () => {
  alert('Selection changed!');
}, false);

const fun10 = document.querySelector('.container .content-section h2');
fun10.addEventListener('dblclick', (event) => {
    event.target.style.color = 'red';    
});