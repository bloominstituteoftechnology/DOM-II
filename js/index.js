// Your code goes here

// const firstName = document.querySelector('.first-name');
// console.log(firstName);
// firstName.addEventListener('mouseover', (e) => {
  // console.log(e.target.value);
  // alert('Hello!');
// });

//  #1  Mouseover
const btn = document.querySelectorAll('.btn');
// console.log(button);
btn.forEach(function(btn){
  btn.addEventListener('mouseover', (e) => {
    e.stopPropagation();
    e.target.style.color = 'black';
})
})


// #2 Mouseleave
btn.forEach(function(btn){
  btn.addEventListener('mouseleave', (e) => {
    e.stopPropagation();
    e.target.style.color = 'green';
})
})






//  #3 Keydown

const log = document.getElementsByTagName('h1');
document.addEventListener('keydown', logKey);

function logKey(e) {
  e.stopPropagation();
  alert('Lets Go!');
}


// #4 Wheel
function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restricts scale
    scale = Math.min(Math.max(.05, scale), 8);
  
    // Apply scale transform
    hdrimg.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const hdrimg = document.querySelector('img');
  hdrimg.onwheel = zoom;

//  #5 click

// const button = document.querySelector('.btn');

// button.addEventListener('click', event => {
//   button.innerHTML = `Click count: ${event.detail}`;
// });

const button = document.querySelectorAll('.btn');
button.forEach(function(button) {
    button.addEventListener('click', e => {
        e.stopPropagation();
        e.target.innerHTML = `Click count: ${event.detail}`;
    })
})


// #6 doubleclick
const card = document.querySelectorAll('h4');
card.forEach(function(card){
  card.addEventListener('dblclick', (e) => {
    e.stopPropagation();
    card.classList.toggle(card.style.color = "blue");
  });
})




// #7 Pointer Moved
const para = document.querySelector('p');

para.onpointermove = (event) => {
  console.log('Pointer moved');
};

// #8 keyUp

const loggo = document.getElementsByTagName('p');

document.addEventListener('keyup', logKey);

function logKey(e) {
  e.preventDefault();
  e.stopPropagation();
  console.log(` ${e.code}`); 
}
//  #9 'drag', #10 'dragend' 'dblclick'
const funBusImg = document.querySelector('.intro img');
funBusImg.addEventListener('drag', e => {
    e.target.style.display = 'none';});

funBusImg.addEventListener('dragend', e => {
    e.target.style.display = 'flex';});

funBusImg.addEventListener('dblclick', e => {
    e.target.style.opacity = '0.8'});