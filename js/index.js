// Your code goes here


// Mouseover & Mouseout
const navBar = document.querySelector(".nav");
navBar.addEventListener("mouseover", (e) => {
    navBar.style.backgroundColor = 'white';
});

navBar.addEventListener('mouseout', (e) => {
    navBar.style.backgroundColor = 'hotpink';
  });


// Wheel
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