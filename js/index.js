// Your code goes here Color Assignments
let fontColor = '#212529';
let buttonBg = '#17A2B8';
let mainBg = '#fff';
let navigationBorder = '#C0C0C0';
let footerBg = '#FFEBCD';
let sandyBeach = '#FFEBCD';
let easternBlue = '#17A2B8';

const navItems = document.querySelectorAll(".nav-link");
navItems.forEach(i => {
  i.addEventListener("click", e => {
    e.preventDefault();
  });
});

// Selectors
const container = document.querySelector('.container.home');
const letsGoImg = document.querySelector('.letsGo');
const adventureImg = document.querySelector('.adventureImg');
const headerImg = document.querySelector('.headerImg');
const buttons = document.querySelectorAll('.btn');
const sound = document.querySelector('audio');

let logoHeadHover = document.querySelector('.nav-container .logo-heading');
let navItems = document.querySelectorAll('.nav-link');
let navItemHover = document.querySelector('.nav');
let images = document.querySelectorAll('img');
let scaleImg = document.querySelector('img');
let scaleImg2 = document.querySelector('.img-content img');
let scaleImg3 = document.querySelector('.img-fluid');
let scaleImg4 = document.querySelector('.content-destination img');
let destinationH4 = document.querySelectorAll('.destination h4');
let buttons = document.querySelectorAll('.btn');
let footer = document.querySelector('footer');

// Events Add event #1: mouseover, mouseleave for Fun Bus logo
logoHeadHover.addEventListener('mouseover', function (event) {
  event.target.style.fontSize = '5rem';
  event.target.style.cursor = 'pointer';
  event.target.style.transitionDuration = '.2s';
  event.target.style.color = 'dodgerblue';

});
logoHeadHover.addEventListener('mouseleave', function (event) {
  event.target.style.fontSize = '';
  event.target.style.color = 'black';
});

// Add event #2: mouseover, mouseleave for nav-items
navItems.forEach(function (item) {
  item
    .addEventListener('mouseover', function (event) {
      event.target.style.color = 'dodgerblue'
      event.target.style.fontSize = '2.2rem';
      event.target.style.transitionDuration = '.2s';
    });
  item.addEventListener('mouseout', function (event) {
    event.target.style.color = 'black';
    event.target.style.fontSize = '';
  });

  // NAV links do not reload the page, check the console log to see a message

  item.addEventListener('click', (event => {
    event.preventDefault();
    console.log('You have clicked a nav link');
  }));
});

// Add event #3: dblclick and transform for all images on page double click any
// image to transform its size, double click again to return to normal
// scaleImg.addEventListener('dblclick', function () {
// scaleImg.classList.toggle('large'); });
// scaleImg2.addEventListener('dblclick', function () {
// scaleImg2.classList.toggle('large'); });
// scaleImg3.addEventListener('dblclick', function () {
// scaleImg3.classList.toggle('large'); });
// scaleImg4.addEventListener('dblclick', function () {
// scaleImg4.classList.toggle('large'); }); reformated the code directly above
images.forEach(function (img) {
  img
    .addEventListener('dblclick', function () {
      img
        .classList
        .toggle('large');
    });
});

// Add event #4: Add opacity to images when mouseover is active, remove opacity
// when mouseleave is active
images.forEach(function (img) {
  img
    .addEventListener('mouseenter', function (item) {
      img.style.opacity = '.7';
      img.style.cursor = 'pointer';
    });
  img.addEventListener('mouseleave', function (item) {
    img.style.opacity = '1';
  });
  img.addEventListener('dblclick', function () {
    img.style.opacity = '1';
  });
});

// Add event #5: scroll - after scrolling enough, alert will show
let counter = 0;
window.addEventListener("scroll", function (event) {
  console.log("scroll counter!");
  counter++;
  if (counter > 200) {
    alert("You have activated the scroll alert. Hello :)");
    counter = 0;
  }
});

// Add event #6: resize - when resizing the browser window, an alert will show
window.addEventListener("resize", function (event) {
  alert("You have activated the resizing alert. Hello again :)");
});

// Add event #7: load - when the page loads successfully, a message is logged to
// the console
window.addEventListener("load", function (event) {
  console.log("Fun Bus has loaded successfully. Please, enjoy the content we have provided for " +
      "you :)");
});

// Add event #8: click
buttons.forEach(function (btn) {
  btn
    .addEventListener('click', function (event) {
      alert('We will be in touch with you shortly!');
    });
});

// Add event #9:
destinationH4.forEach(node => {
  node.addEventListener('mousemove', (event) => {
    event.target.style.color = 'dodgerblue';
    event.target.style.cursor = 'default';
  });
  node.addEventListener('mouseout', (event => {
    event.target.style.color = 'black';
  }));
});

// Add event #10: right click the footer to change its background color, left
// click again to revert to original color
footer.addEventListener('contextmenu', (event) => {
  event.target.style.backgroundColor = 'dodgerblue';
});
footer.addEventListener('click', (event) => {
  event.target.style.backgroundColor = '#FFEBCD';
});

// Image mouse Event
letsGoImg.addEventListener('mouseover', e => {
  e
    .target
    .setAttribute('src', 'img/fun.jpg');
})

adventureImg.addEventListener('mouseover', e => {
  e
    .target
    .setAttribute('src', 'img/adventure.jpg');
})

// Header Image Mouse over event
headerImg.addEventListener('mouseover', e => {
  e.target.style.transform = 'scale(1.1)';
})

// Random container event listener
container.style.opacity = '1';
container.style.transition = '2s';

container.addEventListener('load', e => {
  e.style.opacity = '1';
})

// Button click event
buttons.forEach(button => {
  button.addEventListener('click', playSound);
});

buttons.forEach(button => {
  button.addEventListener('click', e => {
    alert(`Don't Click Me!`);
  });
});

buttons.forEach(button => {
  button.addEventListener('click', e => {
    if (e.target.style.color !== '#fff') {
      e.target.style.color = 'crimson';
    } else {
      e.target.style.color.toggle = 'white';
    }
  });
});

// window.addEventListener('click', playSound);

function playSound(e) {
  sound.currentTime = 0;
  sound.play();
}
