// Your code goes here

// Your code goes here

// Universal - Getters

const universe = document.querySelectorAll("*");

//Navigation - Getters

const navLinks = document.querySelectorAll('nav a');

// Image - Getters

const busImg = document.querySelector('.intro img');
const mapImg = document.querySelector('.content-section:nth-child(1) .img-content');
const cityBoatImg = document.querySelector('.content-section:nth-child(2) .img-content');
const woodBoatImg = document.querySelector('.content-destination img');

// Content section - Getters

const destinationSection = document.querySelectorAll('.content-destination');
const contentSection = document.querySelectorAll('.content-section');

//Bottom Buttons - Getters

const funSunButton = document.querySelector('.destination:nth-child(1) .btn')
const mountainButton = document.querySelector('.destination:nth-child(2) .btn')
const islandButton = document.querySelector('.destination:nth-child(3) .btn')

/*  Events  */

// 1.) Mouseover changes button background colors

function blackBGHover (event) {
    event.target.style.backgroundColor = 'black'
}

funSunButton.addEventListener('mouseover', blackBGHover);
mountainButton.addEventListener('mouseover', blackBGHover);
islandButton.addEventListener('mouseover', blackBGHover);

// 2 & 3.) Keyup and Keydown events create & disapper border

document.addEventListener('keydown', event => {
    if (event.keyCode === 56){
    busImg.style.borderColor = "black"
    busImg.style.borderWidth = "10px"
    busImg.style.borderStyle = "solid"
    }
} )

document.addEventListener('keyup', event => {
    if (event.keyCode === 56) {
    busImg.style.borderColor = "white"
    busImg.style.borderWidth = "0px"
    }
} )

// 4.) Scroll event

window.addEventListener('scroll', function () {
    funSunButton.style.color = "yellow"
    mountainButton.style.color = "yellow"
    islandButton.style.color = "yellow"
})