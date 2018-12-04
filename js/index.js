// Your code goes here


//mouse down on button bolds text
const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
  button.addEventListener('mousedown', (e) => {
    e.target.style.fontWeight = 'bold';
  });
})

//img click creates border
const pics = document.querySelectorAll('img');
pics.forEach((picture) => {
  picture.addEventListener('click', (e) => {
    e.target.style.border = '2px dashed black';
  });
});

//double clicking on buttno turns background red. Propagation stops from turning gray instead
buttons.forEach((button) => {
  button.addEventListener('dblclick', (e) => {
    e.target.style.backgroundColor = 'red';
    e.stopPropagation();
  });
})

//Mousing over paragraph turns text bold
const paras = document.querySelectorAll('p');
paras.forEach((para) => {
  para.addEventListener('mouseover', (e) => {
    e.target.style.fontWeight = 'bold';
  });
});

//Mouse leaving paragraph returns text to normal 
paras.forEach((para) => {
  para.addEventListener('mouseleave', (e) => {
    e.target.style.fontWeight = 'normal';
  });
});

//When something is copied, instead of the content copied, clipboard gets string
paras.forEach((para) => {
  para.addEventListener('copy', (e) => {
    e.clipboardData.setData('text/plain', 'Nice try copycat!');
    e.preventDefault();
  });
});

//When a key is pressed, background turns blue
const everything = document.querySelector('html');
everything.addEventListener('keydown', (e) => {
  e.target.style.backgroundColor = "lightblue";
})

//When key is released, turns back to white
everything.addEventListener('keyup', (e) => {
  e.target.style.backgroundColor = "white";
})


//When something is double clicked, background turns gray
everything.addEventListener('dblclick', (e) => {
  e.target.style.backgroundColor = 'gray';
});

const header = document.querySelector('header');

//When you scroll, header gets a solid border
window.addEventListener('scroll', (e) => {
  header.style.border = '2px solid gray';
}) 

const footerP = document.querySelector('.footer p')

//When you wheel over the footer, the text changes
footerP.addEventListener('wheel', (e) => {
  e.target.textContent = "You're at the bottom!";
})


//When you double click on an h2, the background turns blue. propagation stops it from turning gray
const hTwos = document.querySelectorAll('h2');
hTwos.forEach((heading) => {
  heading.addEventListener('dblclick', (e) => {
    e.target.style.backgroundColor = 'lightblue';
    e.stopPropagation();
  });
});

//When the window is resized, font size increases 100%
window.addEventListener('resize', (e) => {
  everything.style.fontSize = "100%";
})