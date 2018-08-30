// Your code goes here

// Mouseover Event
const navItem = document.querySelectorAll('.nav-link');

const hooverHandler = function(event) {
    if (event.target.style.color === '') {
        event.target.style.color = 'blue';
    } else {
        event.target.style.color = '';
    }
}

navItem.forEach( container => {
    container.addEventListener('mouseover', hooverHandler)
  }) 

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
