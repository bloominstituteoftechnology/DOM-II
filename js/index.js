// Your code goes here

// Mouseover Event
const imgOne = document.querySelector('.home img');

const imgOneHandler = function(event) {
    if (event.target.style.maxWidth === '') {
        event.target.style.maxWidth = '80%';
    } 
}

imgOne.addEventListener('mouseover', imgOneHandler)
 

//   Keydown Event

const body = document.querySelector('body');

const keyHandler = function() {
   alert(`You just pressed a key!`);
}

body.addEventListener('keydown', keyHandler);

// Wheel Event
const imgContent = document.querySelectorAll('.img-content');

const imgHangler = function(event) {
    if (event.target.style.borderRadius === '') {
        event.target.style.borderRadius = '50%';
    } else {
        event.target.style.borderRadius = '';
    }
}

imgContent.forEach( container => {
    container.addEventListener('wheel', imgHangler)
})


// Drag/Drop Event


const firstImg = document.querySelector('img');

const firstimgHandler = function(event) {
    event.target.style.display = 'none';
    
}

firstImg.addEventListener('dragstart', firstimgHandler)

// Load Event

const btnSelect = document.querySelector('.btn');

const btnHandler = function() {
    this.style.fontSize = '2.5rem';
}

btnSelect.addEventListener('click', btnHandler)

// Focus Event

const navItem = document.querySelectorAll('.nav-link');

const hooverHandler = function(event) {
    if (event.target.style.color === '') {
        event.target.style.color = 'blue';
    } else {
        event.target.style.color = '';
    }
}

navItem.forEach( container => {
    container.addEventListener('focus', hooverHandler)
  }) 

//   Resize Event

const homeHandler = function(event) {
    document.querySelector('h1').style.display = 'none';
}

window.addEventListener('resize', homeHandler)

// Scroll Event

const paraHandler = function(event) {
    document.querySelector('p').style.fontSize = '2.5rem';
}

window.addEventListener('scroll', paraHandler)

// Select Event

const inputSelector = document.querySelector('input');

const inputHandler = function(event) {
    event.target.style.backgroundColor = 'red';
}

inputSelector.addEventListener('select', inputHandler)

// Double Click Event

const footerSelector = document.querySelector('footer p');

const footerHandler = function(event) {
    event.target.style.backgroundColor = 'blue';
}

footerSelector.addEventListener('dblclick', footerHandler)