// Your code goes here

// Listeners
// 1. keydown
// 2. keyup
// 3. mouseenter
// 4. mouseleave
// 5. mouseover
// 6. click
// 7. dblclick
// 8. mousedown
// 9. mouseup
// 10. contextmenu

// variables

const title = document.querySelector('title');
const body = document.querySelector('body');
const header = document.querySelector('header');
const destination = document.querySelector('.destination')
const letsGoImage = document.querySelector('.content-section .img-content')
const adventureSection = document.querySelector('.content-section.inverse-content')
const letsGoText = document.querySelector('.text-content')
const h2Thing = document.querySelectorAll('h2')
const pickSection = document.querySelector('.content-destination')
const navButtons = document.querySelectorAll(".nav-link")

//addEventListener functions

body.addEventListener("keydown", event => {
    body.style.backgroundColor = 'cyan';
})

body.addEventListener("keyup", event => {
    body.style.backgroundColor = ''
})

destination.addEventListener("mouseover", event => {
    destination.style.backgroundColor = 'purple';
})

adventureSection.addEventListener("mouseenter", event => {
    adventureSection.style.backgroundColor = 'maroon'
})

adventureSection.addEventListener("mouseleave", event => {
    adventureSection.style.backgroundColor = ''
})

letsGoText.addEventListener('click', event => {
    letsGoText.style.backgroundColor = "green"
})
letsGoText.addEventListener('dblclick', event => {
    letsGoText.style.backgroundColor = "grey"
})

h2Thing[0].addEventListener('mouseup', event => {
    h2Thing[0].innerText = "im hungry"
})

h2Thing[1].addEventListener('mousedown', event => {
    h2Thing[1].innerText = "im thirsty"
})

pickSection.addEventListener('contextmenu', event => {
    event.preventDefault()
})

// preventing the nav buttons from leaving the page

navButtons.forEach((elem) => {
    elem.addEventListener("click", (event) => {
        navButtons.innerText = "HAHAHA"
        event.preventDefault()
    });
  });
