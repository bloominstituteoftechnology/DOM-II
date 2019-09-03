// Your code goes here
// 1
let mainNav = document.querySelectorAll('.nav-link')

mainNav.forEach(el => el.addEventListener('mouseover', () => {
    el.style.color = '#17A2B8';   
}));

mainNav.forEach(el => el.addEventListener('mouseout', () => {
    el.style.color = '';   
    
}));

// 2
let counter = 0;
let buttons = document.querySelectorAll('.btn')

buttons[0].addEventListener('click', (event) => {
  counter++;
  buttons[0].textContent = counter;
});
buttons[1].addEventListener('click', (event) => {
    counter++;
    buttons[1].textContent = counter;
});
buttons[2].addEventListener('click', (event) => {
    counter++;
    buttons[2].textContent = counter;
});

// 3
document,addEventListener('keydown', (event) => {
    alert(`Check keyboard settings: '${event.code} is held down'`)
});

// 4
mainNav.forEach(el => el.addEventListener('focus', () => {
    el.style.color = '#FFEBCD'; 
}));


// 5
const doubleClick = document.querySelector('.content-section');

doubleClick.addEventListener('dblclick', function (e) {
    e.target.style.display = 'none'
});

// 6
window.addEventListener('resize', () => {
  if (!document.body.style.opacity) {
    document.body.style.opacity = 1;
  }
  document.body.style.opacity = Number(document.body.style.opacity) * 0.98;
});


window.addEventListener('load', (event) => {
    alert('Welcome to the funBus Homepage');
  });


// make nav items inactive
let inactiveLink = document.querySelector('nav').addEventListener('click', (e) => {
    e.preventDefault();   
});

