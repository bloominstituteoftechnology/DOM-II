// Your code goes here

let mainLogo = document.querySelector('.logo-heading')

mainLogo.addEventListener('mouseover', () => {
    mainLogo.style.transform = "scale(1.3)";
    mainLogo.style.transition = "transform 3s";
})
mainLogo.addEventListener('mouseleave', () => {
    mainLogo.style.transform = "scale(1)";
    mainLogo.style.transition = "transform 3s";
})

let headerImg = document.querySelector('header img');

headerImg.addEventListener('click', () => {
    headerImg.src = "https://kids.scholastic.com/content/dam/scholastic/kids/header/the-magic-school-bus/header_msb_mobile.jpg";
})

headerImg.addEventListener('dblclick', () => {
    headerImg.src = "img/fun-bus.jpg";
})

// let body = document.querySelector('body');

// body.addEventListener('wheel', zoom);

// window.addEventListener('scroll', () => {
//     const scrollable = body.documentElement.scrollHeight - window.innerHeight;
//     const scrolled = window.scrollY;

//     if (Math.ceil(scrolled) === scrollable) {
//         alert('The bus has reached location!');
//     }
// });

let allImg = document.querySelector('.img-content img');

window.addEventListener('resize', () => {
    allImg.src = "https://thepolitic.org/wp-content/uploads/2019/06/frizzle-e1559937497166.jpg";
})




function logSelection(event) {
    const log = document.getElementById('log');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `You selected: ${selection}`;
  }

  console.log(logSelection);

const input = document.querySelector('input');

input.addEventListener('select', logSelection);

const output = document.querySelector('.escape');

output.addEventListener('focus', (event) => {
    event.target.style.background = 'yellow';
});

output.addEventListener('blur', (event) => {
    event.target.style.background = '';
})

function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 3);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
  }
  
let scale = 1;
const el = document.querySelector('header img');
el.onwheel = zoom;
