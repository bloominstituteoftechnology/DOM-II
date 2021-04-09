// Your code goes here

// nav buttons events

const navButtons = document.querySelectorAll('.nav .nav-link');

navButtons.forEach(button =>{
    //prevents buttons from resetting page
    button.addEventListener('click', event =>{
        event.preventDefault();
    })
    //changes button color when mouse is over
    button.addEventListener('mouseover', event => {
        event.target.style.color = 'lightgrey';
    })
    //restores default color when mouse has left
    button.addEventListener('mouseout', event => {
        event.target.style.color = '';
    })
})

//events for the header image;
const busImg = document.querySelector('.intro img');

//sound effect for click event
const busSound = new Audio("https://cdn.videvo.net/videvo_files/audio/premium/audio0050/watermarked/BusHorn_DIGID04-30_preview.mp3");

//mouseover opacity change animation
busImg.addEventListener('mouseover', event => {
    busImg.style.opacity = 0.6;
})

//ends mouseover event and click event
busImg.addEventListener('mouseout', event => {
    busImg.style.opacity = 1;
    busSound.pause();
    event.stopPropagation;
})

//plays bus horn sound effects when image is clicked
busImg.addEventListener('click', event => {
    busSound.currentTime = 0;
    busSound.play();
})
//end of bus image events

//drag drop let's go section

const dropzone = document.querySelector('div.dropzone');
//dropzone styling
dropzone.style.width = '800px';
dropzone.style.height = '400px';
dropzone.style.background ='lightgrey';

const letsGo = document.querySelector('.content-section');
let dragged;

document.addEventListener('drag', event => {}, false)

document.addEventListener('dragstart', event =>{
    dragged = event.target;

    event.target.style.opacity = .6;
}, false)

document.addEventListener('dragend', event => {
    event.target.style.opacity = '';
}, false);

document.addEventListener('dragover', event => {
    event.preventDefault();
}, false)

document.addEventListener('dragenter', event =>{
    if (event.target.className == 'dropzone') {
        event.target.style.background = 'darkgrey';
    }
},false)

document.addEventListener('dragleave', event => {
    if (event.target.className == 'dropzone') {
        event.target.style.background = 'lightgrey';
    }
}, false)

document.addEventListener('drop', event =>{
    event.preventDefault();

    if (event.target.className == 'dropzone') {
        event.target.style.background = '';
        dragged.parentNode.removeChild( dragged );
        event.target.appendChild( dragged );
    }
}, false)

//refreshes page and resets dragged item when lets go section is double clicked
letsGo.addEventListener('dblclick', event => {
    window.location.reload();
})


