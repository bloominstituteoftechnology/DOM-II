// Your code goes here

// prevent refreshing page
document.querySelectorAll('header nav a').forEach(item => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
  })
})


// #1 when mouseover, changes color
// #2 when mouseout, changes back to orig color
const logoHeading = document.querySelector('.main-navigation .nav-container .logo-heading');

function changeColor(event) {
  event.target.classList.toggle('change-color');
}
logoHeading.addEventListener('mouseover', changeColor);
logoHeading.addEventListener('mouseout', changeColor);

// #3 when keydown, Home link hidden
// #4 when keyup, Home link shown
const navItems = document.querySelectorAll('.main-navigation nav a');
window.addEventListener('keydown', (event) => {
  if (event.keyCode == 72) {
    navItems[0].style.visibility = 'hidden';
  }
});

window.addEventListener('keyup', (event) => {
  if (event.keyCode == 72) {
    navItems[0].style.visibility = 'visible';
  }
});


// stop propagation
const mainNav = document.querySelector('.main-navigation');
mainNav.addEventListener('click', () => {
  alert('navbar was clicked!');
})

navItems[1].addEventListener('click', (event) => {
  event.stopPropagation();
  alert('About was clicked!');
})


// #5 when dblclick, change img
const busImg = document.querySelector('.container .intro img');

const busImg2 = "../img/fun-bus2.jpg";
busImg.addEventListener('dblclick', () => {
  busImg.src = busImg2;
});


// #6 when mouseenter, img change
// #7 when mouseleave, img goes back to orig img
const adventureImg = document.querySelector('.content-section .img-content img');
adventureImg.addEventListener('mouseenter', () => {
  adventureImg.src = '../img/fun.jpg';
});
adventureImg.addEventListener('mouseleave', () => {
  adventureImg.src = '../img/adventure.jpg';
});


// #8 when mousedown, img change
// #9 when mousemove, img goes back to orig img
const funImg = document.querySelector('.inverse-content .img-content img');
funImg.addEventListener('mousedown', () => {
  funImg.src = '../img/adventure.jpg';
  // stretch
  TweenMax.from(".inverse-content .img-content img", 3, {y:-100, ease:Power4.easeOut});
});
funImg.addEventListener('mousemove', () => {
  funImg.src = '../img/fun.jpg';
});

// stretch
const destinationImg = document.querySelector('.content-destination img');
destinationImg.addEventListener('click', function() {
  TweenMax.from(".content-destination img", 3, {x:50, opacity:0, scale:0.5});
})


// #10 when button clicked, toggle modal
const modal = document.querySelectorAll('.content-pick .destination .modal');
const trigger = document.querySelectorAll('.content-pick .destination .trigger');
const closeButton = document.querySelectorAll('.destination .modal .modal-content .close-btn');

function toggleModal() {
  modal[0].classList.toggle("show-modal");
  // stretch
  TweenMax.to(".modal-content", 2, {y:50, ease:Bounce.easeOut});
}

trigger[0].addEventListener('click', toggleModal);
closeButton[0].addEventListener('click', toggleModal);
trigger[1].addEventListener('click', toggleModal);
closeButton[1].addEventListener('click', toggleModal);
trigger[2].addEventListener('click', toggleModal);
closeButton[2].addEventListener('click', toggleModal);
