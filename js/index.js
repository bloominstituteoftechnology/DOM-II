// Your code goes here

const navTags = document.querySelectorAll('nav a');
const logo = document.querySelector('h1');
navTags[0].addEventListener('mouseover', (event) => {
    navTags[0].classList.toggle("makeRed");
});

navTags[1].addEventListener('click', (event) => {
    navTags[1].classList.toggle("makeRed");
    event.preventDefault();
});

navTags[2].addEventListener('dblclick', (event) => {
    navTags[2].classList.toggle("makeRed");
});

navTags[3].addEventListener('mousedown', (event) => {
    navTags[3].classList.toggle("makeRed");
});

TweenMax.from(logo, 1.5, {
    y: -100,
    ease: Back.easeOut.config(1.7)
});

window.addEventListener('load', (event) => {
    alert('Website has been loaded');
});
window.addEventListener('resize', (event) => {
    console.log('The window has been resized')
});
//Greensock
const buttons = document.querySelectorAll('.btn');

TweenMax.staggerFrom(".btn", 1, {
    x: -300,
    opacity: 0
}, -0.2);

buttons.forEach((element) => {
    element.addEventListener('mouseenter',(event) => {
        TweenMax.to(element,0.5, {
            scale: 1.1,
            backgroundColor: 'rgb(45, 97, 105)',
            color: 'white'
        });
    });
    element.addEventListener('mouseout',(event) => {
        console.log('mouse exited!');
        TweenMax.to(element, 0.5, {
            scale:1,
            backgroundColor: '#17A2B8'
        });
    });
});

let animateHTML = function() {
    let elems;
    let windowHeight;
    function init() {
      elems = document.querySelectorAll('.hidden');
      windowHeight = window.innerHeight;
      addEventHandlers();
      checkPosition();
    }
    function addEventHandlers() {
      window.addEventListener('scroll', checkPosition);
      window.addEventListener('resize', init);
    }
    function checkPosition() {
      for (var i = 0; i < elems.length; i++) {
        let positionFromTop = elems[i].getBoundingClientRect().top;
        if (positionFromTop - windowHeight <= -170) {
            TweenMax.to(elems[i], 2, {

                opacity: 1
            });
        }
      }
    }
    return {
      init: init
    };
  };
  animateHTML().init();


