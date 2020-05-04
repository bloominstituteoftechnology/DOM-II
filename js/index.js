// Your code goes here

// #1 alerts scam ad...
window.addEventListener('load', (event) => {
    alert('YOU JUST WON A FREE TRIP!! PRESS OK TO ACCEPT!');
})

// #2 turns logo yellow on mouseover
const logo = document.querySelector('.logo-heading');
logo.addEventListener('mouseover',(event) => {
    event.target.style.color = 'yellow';   
})

// #3 turns logo to red on mouseleave
logo.addEventListener('mouseleave',(event) => {
    event.target.style.color = 'red';
})
logo.style.cursor = 'default';
 
//#4 changes intro image to another image on click
const firstImage = document.querySelector('.intro img');
firstImage.addEventListener('click', (event) => {
    firstImage.src = 'https://images.unsplash.com/photo-1465172018141-c4e4fa823289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=800';
})

//#5 zoom takes effect 
function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    size.style.transform = `scale(${scale})`;
  }
  let scale = 1;
  const size = document.querySelector('div');
  size.onwheel = zoom;

//#6 button color changes on doubleclick
document.querySelector('.btn').addEventListener('dblclick', (event) => {
    event.target.style.backgroundColor = 'white';
    event.target.style.color = '#17A2B8'
})

// #7 keydown 
const body = document.querySelector("body");
	const nav = document.querySelector(".main-navigation");
	body.addEventListener("keydown", function() {
	  nav.style.position = "absolute";
    });

// #8 keypress
body.addEventListener("keypress", function() {
    nav.style.position = "fixed";
  });

// #9 right clicking nav gives you a note

  window.addEventListener("contextmenu", function(x) {
    alert("Hi you found my secret message!");
  });

//#10 - Image scale
const imgScale = document.querySelector(".content-destination");

imgScale.addEventListener("mouseover", e => {
  console.log(`,mouseover happened!!`);
imgScale.style.transfrom = 'scale(1.1)';
imgScale.style.transition = 'transform 0.5s';
});

//preventdefault
const preventA = document.querySelectorAll("a");

preventA.forEach(function(a) {
  a.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
  });
});