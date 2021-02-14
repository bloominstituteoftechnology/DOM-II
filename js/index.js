//variables grabbing the elements/querySelector
const navBar = document.querySelector('nav.nav');
const imgs = document.querySelectorAll('img');
const anchors = document.querySelectorAll('.nav-link');
const headingTwo = document.querySelectorAll('h2');
const roundImg = document.querySelector('.rounded');
const button = document.querySelectorAll('.btn');
const para = document.querySelectorAll('p');

//eventlisteners
//mouseover/mouseleave
anchors.forEach(e => {
  e.addEventListener('mouseover', event => {
    e.style.color = 'pink';
  });
  e.addEventListener('mouseleave', event => {
    e.style.color = 'black';
  });
});

//transform images onload
imgs.forEach(e => {
  e.addEventListener('load', event => {
    e.style.transform = 'rotate(1turn)';
    e.style.transition = '2s';
  });
});

//change CSS properties for background and font color on keydown and keyup
window.addEventListener('keydown', event => {
  if (event.key == 'Escape') {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  }

  window.addEventListener('keyup', event => {
    if (event.key == 'Escape') {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  });
});


//click that changes the color of the h2 elements to pink

headingTwo.forEach(e => {
  e.addEventListener('click', event => {
    e.style.color = 'pink';
  });
});

//rounded img disappear on window resize

window.addEventListener('resize', event => {
  roundImg.style.display = 'none';
});

//double click even changes button text
button.forEach(e => {
  e.addEventListener('dblclick', event => {
    e.textContent = `You clicked a ${e.tagName} with the class name of ${e.className}`;
  });
});

//scrolling changes the color of the para text to purple

para.forEach(e => {
  window.addEventListener('scroll', event => {
    e.style.color = 'purple';
  });
});


//contextmenu changes background of h2 to black
headingTwo.forEach(e => {
  e.addEventListener('contextmenu', event => {
    e.style.backgroundColor = 'black';
  });
});

//preventDefault

navBar.addEventListener('click', e => {
  e.preventDefault();
});


const header = document.querySelector('.main-navigation');
const divInHeader = document.querySelector('.nav-container');

header.addEventListener('click', () => {
  alert('you clicked the header');
  divInHeader.addEventListener('click', e => {
    alert('you clicked the div');
    e.stopPropagation();
  });
});
