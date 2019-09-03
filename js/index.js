// Your code goes here


// Mouseover & Mouseout - makes nav bar background pink when hovering off and white when hovering over
const navBar = document.querySelector('.nav');
navBar.addEventListener('mouseover', (e) => {
    navBar.style.backgroundColor = 'white';
});

navBar.addEventListener('mouseout', (e) => {
    navBar.style.backgroundColor = 'hotpink';
  });


// Wheel - makes top img bigger and smaller with scroll bar on mouse
function zoom(event) {
      event.preventDefault();
    
      scale += event.deltaY * -0.01;
    
      // Restrict scale
      scale = Math.min(Math.max(.125, scale), 4);
    
      // Apply scale transform
      el.style.transform = `scale(${scale})`;
    }
    
    let scale = 1;
    const el = document.querySelector('img');
    el.onwheel = zoom;


// Dblclick - makes the first button at bottom of page bigger when clicked twice
const btn = document.querySelector('.btn');

console.log(btn);

btn.addEventListener('dblclick', (e) => {
    btn.style.width = '250px';
    btn.style.height = '50px';
});


// Click Count - makes the first button at bottom of page have a counter
const click = document.querySelector('.btn');

click.addEventListener('click', (e) => {
  click.innerHTML = `Click count: ${event.detail}`;
});


// Copy and Cut notifier - will notify you with a pop up if you try to copy or cut any of the paragraphs 
const copyAndCut = document.querySelector('p');

copyAndCut.addEventListener('copy', (e) => {
    window.alert("Hey! Don't copy me, that's stealing ya know!");
  })

  copyAndCut.addEventListener('cut', (e) => {
    window.alert("Hey! Don't copy me, that's stealing ya know!");
  })

