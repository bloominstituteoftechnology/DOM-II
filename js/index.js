// Your code goes here

// const firstName = document.querySelector('.first-name');
// console.log(firstName);
// firstName.addEventListener('mouseover', (e) => {
  // console.log(e.target.value);
  // alert('Hello!');
// });

//  #1  Mouseover
const btn = document.querySelector('.btn');
// console.log(button);
btn.addEventListener('mouseover', (e) => {
    e.target.style.color = 'black';
});

// #2 Mouseleave

btn.addEventListener('mouseleave', (e) => {
    e.target.style.color = 'green';
});





//  #3 Keydown

const log = document.getElementsByTagName('p');
document.addEventListener('keydown', logKey);

function logKey(e) {
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

// button.addEventListener('click', (e)=> {
//    alert(`Click count: ${e.detail}`);
// });


const button = document.querySelector('.btn');

button.addEventListener('click', event => {
  button.innerHTML = `Click count: ${event.detail}`;
});


// #6 doubleclick
const card = document.querySelector('h4');

card.addEventListener('dblclick', function (e) {
  card.classList.toggle(card.style.color = "blue");
});


//  #7 Focus  ***

const htext = document.querySelector('h2');
// console.log(htext);
htext.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';    
}, true);



// #8 Select   ***

function logSelection(event) {
    
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    alert(`You selected: ${selection}`);
  }
  
  const input = document.querySelector('h2');
  input.onselect = logSelection;


//    #9