
import './less/index.less'

// Your code goes here!

// Selecting Elements to change
const navButtons = document.querySelectorAll(".nav a");
console.log(navButtons);
const title = document.querySelector("h1");
const introImg = document.querySelector(".intro img");

// Creating Events with .addEventListener

// function greyBackground() {
//     EventTarget.style.color = 'grey'
// }

// navButtons.addEventListener("mouseover", greyBackground);

navButtons.forEach(element => {
    element.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'lightgrey';}
)});

// click - 1
title.addEventListener('click', event => {
    title.textContent += ` Is Taking Off!!`;
})

// dblclick - 2
introImg.addEventListener('dblclick', function (event){
    introImg.style.border = '5rem';
})

//load on my own - 3
window.addEventListener('load', (event) => {
    console.log('Good job loading');
  });

// keydown - 4
window.addEventListener('keydown', evt => {
    if (evt.key == 6){
        document.body.innerHTML = '<h1>Sent to File 13<h1>'
    }
})

// Load
window.onload = function (evt) {
    const heading = document.querySelector('h1')
    heading.textContent = 'READY TO GO'

// Copy - 5
    window.addEventListener('copy', () => {
        navigator.clipboard.readText()
            .then(text => {
                heading.textContent += text
            })
    })

    document.body.addEventListener('click', evt => {
        evt.target.classList.toggle('mirror')
    })

// mousemove - 6

document.body.addEventListener('mousemove', evt => {
    const {clientX, clientY} = evt
    console.log(`mouse is at ${clientX}, ${clientY}`)
})

// mouseenter - 7

// mouseleave - 8

const destinations = document.querySelectorAll('.destination')
for (let destination of destinations) {
    destination.addEventListener('mouseenter', () => {
        destination.style.fontWeight = 'bold'
    })
    destination.addEventListener('mouseleave', () => {
        destination.style.fontWeight = 'initial'
    })
}


}


// Prevent Default - 9

Array.from(document.links).forEach(link => {
    link.addEventListener("click", function(evt) {
        evt.preventDefault();
        console.log(`The ${evt.target.textContent} link doesn't work, but I'm sure glad you came.`)
    })
})


// scroll - 10
let last_known_scroll_position = 0;
window.addEventListener('scroll', function(event) {
    last_known_scroll_position = window.scrollY;
    console.log(last_known_scroll_position)
    if (last_known_scroll_position >= 950){
        alert("That's All Folks")
   }
});