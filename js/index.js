/* eslint-disable no-unused-vars */
// Your code goes here
// first, let's select some things I want to interact with


// launch listner is 1
function launchListner (event) {
    console.log(`
    event type: ${event.type}
    event target: ${event.target.nodeName}
    event time: ${Math.floor(event.timestamp /1000)} seconds
    current target: ${event.currentTarget.nodeName}
    `);
}

Array.from(document.all).forEach(elem => {
    elem.addEventListener('click', launchListner);
})

// signup button
const signUp = document.querySelector('.btn');
console.log(signUp)

// listner 1: click on signUp button

function clickSignUp () {
    alert('you are making a great choice!'); 
}

signUp.addEventListener('click', clickSignUp);

// listner 2: keydown the esc key to leave the signup pop-up

// listner 3: mouseover the map to display something

const aboutButton = document.querySelector('#about');

function aboutClick () {
    alert(Math.floor(Math.random() * 64))
}

aboutButton.addEventListener('mouseover', aboutClick)

// listner 4: wheel
// a zoom feature which would be clearly useful if you were displaying maps on a page.
let scale = 1
const map = document.querySelector('#map')
console.log(map)

map.addEventListener('wheel', function (event) {
    event.preventDefault();

    scale += event.deltaY * -0.01;

    scale = Math.min(Math.max(.125, scale), 4);

    map.style.transform = `scale(${scale})`;

});

// listner 5: load 
// an event that logs a message when the page is fully loaded
window.addEventListener('load', (event) => {
    console.log(`page is fully loaded`)
})

// listner 6: focus

// listner 7: select
function logSelection (event) {
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    console.log.textContent = `You selected: ${selection}`
}

const firstParagraph = document.querySelector('p');
firstParagraph.addEventListener('select', logSelection);





// listner 8: dblclick

// listner 9: resize

// listner 10: look something up
