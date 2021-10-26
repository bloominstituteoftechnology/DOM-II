// Your code goes here
// Event 1 - resize

function reportWindowSize() {
  console.log('Browser height is: ', window.innerHeight);
  console.log('Browser width is: ', window.innerWidth)
}

window.addEventListener('resize', reportWindowSize);

// Event 2 - click

const buttons = document.querySelectorAll('.destination')
const sunButton = buttons[0].querySelector('.btn');

function backgroundYellow (event) {
    event.target.style.background = 'yellow';
    event.stopPropagation()
}

sunButton.addEventListener('click', backgroundYellow);

// Event 3 - mouseover

const contentText = document.querySelectorAll('.text-content');
const advAwaits = contentText[1].querySelector('h2');

function backgroundPink (event) {
    event.target.style.background = 'pink';
    setTimeout(function() {
        event.target.style.background = '';
      }, 500);
}

advAwaits.addEventListener('mouseover', backgroundPink);

// Event 4 - dblclick

const mtnButton = buttons[1].querySelector('.btn');

function mtnColor (event) {
    event.target.style.color = 'blue'
    event.stopPropagation()
}

mtnButton.addEventListener('dblclick', mtnColor);

// Event 5 - scroll

window.addEventListener('scroll', () => {
    console.log('Scrolling...');
});

// Event 6 - wheel

const navBar = document.querySelector('.main-navigation');

function colorNav (event) {
    event.target.style.background = 'green';
    event.stopPropagation()
}

navBar.addEventListener('wheel', colorNav);

// Event 7 - keydown

function logKeys (e) {
    console.log(e)
}

  document.addEventListener('keydown', logKeys);

// Event 8 - load

window.addEventListener('load', () => {
    console.log('Your page has loaded!');
  });


// Event 9 - visibilitychange

document.addEventListener("visibilitychange", function() {
    if (document.visibilityState === 'visible') {
      console.log('Hello!');
    } else {
     console.log('See You Later!');
    }
  });

// Event 10 - copy

window.addEventListener('copy', function() {
    alert('You have copied something! Not sure what though!')
})

// Prevent nav from refreshing the page
const stopRefresh = document.querySelector('.nav');

stopRefresh.addEventListener('click', function(event){
    console.log(`I didn't refresh the page!`);
    event.preventDefault();
});