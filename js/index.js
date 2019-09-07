// Your code goes here


// window.addEventListener('load', (event) => {
//     alert('YOU JUST WON A FREE TRIP!! PRESS OK TO ACCEPT!');
// })

const logo = document.querySelector('.logo-heading');
logo.addEventListener('mouseover',(event) => {
    event.target.style.color = 'yellow';
    
})
logo.addEventListener('mouseleave',(event) => {
    event.target.style.color = 'red';
})
logo.style.cursor = 'default';
 
const firstImage = document.querySelector('.intro img');
firstImage.addEventListener('click', (event) => {
    firstImage.src = 'https://images.unsplash.com/photo-1465172018141-c4e4fa823289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=800';
})

function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    size.style.transform = `scale(${scale})`;
  }
  let scale = 1;
  const size = document.querySelector('div');
  size.onwheel = zoom;

document.querySelector('.btn').addEventListener('dblclick', (event) => {
    event.target.style.backgroundColor = 'white';
    event.target.style.color = '#17A2B8'
})