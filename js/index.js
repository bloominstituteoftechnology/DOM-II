

// Click main-nav to get an alert
let mainNav = document.querySelector('.main-navigation');
mainNav.addEventListener('click', (e) => {
    alert('You clicked the main-navigation')
})



/// Click nav-link INSIDE main-nav and get just ONE Alert instead of TWO Alerts because of stop propagation.
let navLink = document.querySelector('.nav');
navLink.addEventListener('click', (e) => {
    alert('You clicked a nav link');
    e.stopPropagation();
})




// Mouse over the "Welcome to the fun bus" header to get an alert
let funBusHeader = document.querySelector('.intro > h2');
funBusHeader.addEventListener('mouseover', (e) => {
    alert('Welcome to the Fun Bus!!')
})



// double click Fun bus image to turn the background color back to white
let funBusDblClck = document.querySelector('.intro > img');
funBusDblClck.addEventListener('dblclick', (e) => {
    document.body.style.backgroundColor = 'white';
    header.style.backgroundColor = body.style.backgroundColor;
    footer.style.backgroundColor = body.style.backgroundColor;
})



// Rotate page upside-down when mouse enters and return to normal when mouse leaves footer area
let footer = document.querySelector('.footer');
let home = document.querySelector('.home');
footer.addEventListener('mouseenter', (e) => {
    home.style.transform = "rotate(180deg)";
})
footer.addEventListener('mouseleave', (e) => {
    home.style.transform = "rotate(0)";
})



/// Press and hold any key to make page disappear
let body = document.querySelector('body');
document.addEventListener('keydown', (e) => {
    body.style.visibility = "hidden";
})

/// release any key to make page re-appear
document.addEventListener('keyup', (e) => {
    body.style.visibility = "visible";
})




// Mouse over body to get Random background for whole page

let header = document.querySelector('header');


document.addEventListener('mouseover', (e) => {
    body.style.backgroundColor = getRandomColor();
    header.style.backgroundColor = body.style.backgroundColor;
    footer.style.backgroundColor = body.style.backgroundColor;
})
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }



// click Fun bus image to turn document background color to yellow
let funBusImage = document.querySelector('.intro > img');
funBusImage.addEventListener('click', (e) => { 
    document.body.style.backgroundColor = 'yellow';
    header.style.backgroundColor = body.style.backgroundColor;
    footer.style.backgroundColor = body.style.backgroundColor;
});



// button click to alert "you signed up!"
let button = document.querySelectorAll('.btn');
button[0].addEventListener('click', (e) => {
    alert('You Signed Up!!!');
})
button[1].addEventListener('click', (e) => {
    alert('You Signed Up!!!');
})
button[2].addEventListener('click', (e) => {
    alert('You Signed Up!!!');
})



//prevent default

let navPrevent = document.querySelector('a')

navPrevent.addEventListener('click', (e) => {
    preventDefault();
})