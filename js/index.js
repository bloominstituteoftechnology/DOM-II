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


const title = document.querySelector('title');
const body = document.querySelector('body');
const header = document.querySelector('header');
const destination = document.querySelector('.destination')
const letsGoImage = document.querySelector('.content-section .img-content')
const adventureSection = document.querySelector('.content-section.inverse-content')

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