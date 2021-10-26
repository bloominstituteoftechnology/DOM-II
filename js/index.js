//Testing to see if everything works properly
/*
const logo = document.querySelector('h1');
logo.textContent = 'Please work';
It works lol*/

//Prevent navigation from refreshing page
document.querySelectorAll('.nav-link').forEach(elem => {
    elem.addEventListener('click', function(e) {
        e.stopPropagation();
    })
});

//Make all h2s turn purple when moused over for a short period of time
document.querySelectorAll('h2').forEach(elem => {
    elem.addEventListener('mouseover', function(e) {
        e.target.style.color = 'purple';
        setTimeout(function() {
            e.target.style.color = '';
          }, 500);
    })
}, false);

//Change the title to "There is No Escape" when escape key is pressed and then go back to normal after a short period of time. Also turns red because spooky
const pageTitle = document.querySelector('h1');

function escKey(evt) {
    if (evt.key === 'Escape') {
        pageTitle.textContent = 'There is No Escape';
        pageTitle.style.color = 'red';
        setTimeout(function() {
            pageTitle.textContent = 'Fun Bus';
            pageTitle.style.color = '';
          }, 500);
    }
};

document.addEventListener('keydown', escKey);

//Add listener to images that makes them zoom in and out with wheel
const busImg = document.querySelector('.intro img')

//Ensure the busImg will always be centered
busImg.style.display = 'block';
busImg.style.margin = '0 auto';

//Trying to make the zoom function
//Bro idk lmao moving on

//Double-click boat image to shrink it
const boatImg = document.querySelector('.content-destination img');

//Keep image centered
boatImg.style.display = 'block';
boatImg.style.margin = '0 auto';

boatImg.addEventListener('dblclick', function(e) {
    boatImg.style.height = '100px';
    boatImg.style.width = 'auto';
});

//test to see if i selected it
/*
boatImg.style.height = '500px';
I did lol*/

//Turn background grey when out of focus
function unfocused() {
    document.body.style.backgroundColor = 'grey';
    pageTitle.textContent = "Where'd you go!?"
}
  
function focused() {
    document.body.style.backgroundColor = 'white';
    pageTitle.textContent = "Fun Bus"
}
  
window.addEventListener('blur', unfocused);
window.addEventListener('focus', focused);

//console.log when the user copies text
document.addEventListener('copy', function() {
    console.log('The user has copied something.')
})

//Make the title self aware that you're selecting things
document.addEventListener('selectstart', function() {
    pageTitle.textContent = 'Hey, stop selecting that!'
    setTimeout(function() {
        pageTitle.textContent = 'Fun Bus';  
      }, 2000);
});

//Make a dumb pun in the console when scrolling.
document.addEventListener('scroll', function(e) {
    console.log('They see me scrollin');
});

//Make the website upset when you drag an image + Make things draggable
let dragged;

document.addEventListener('dragstart', function(e) {
    dragged = e.target;
    e.target.style.opacity = '0.25';
    pageTitle.textContent = 'Give that back!'
}, false);

document.addEventListener('dragend', function(e) {
    e.target.style.opacity = '';
    pageTitle.textContent = 'Hmph!'
    setTimeout(function() {
        pageTitle.textContent = 'Fun Bus';  
      }, 1000);
}, false);

//Make something goofy happen when you move the pointer