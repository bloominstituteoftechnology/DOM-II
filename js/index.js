/* eslint-disable no-unused-vars */
// Your code goes here
// first, let's select some things I want to interact with

console.log('This is working')

function launchListner (event) {
    console.log(`
    event type: ${event.type}
    `);
}

// signup button
const signUp = document.querySelector('.btn');
console.log(signUp)

// listner 1: click on signUp button

function clickSignUp () {
    console.log('you are making a great choice!'); 
}

signUp.addEventListener('click', clickSignUp);

// listner 2: keydown the esc key to leave the signup pop-up

// listner 3: mouseover the map to display something

// listner 4: wheel

// listner 5: load

// listner 6: focus

// listner 7: select

// listner 8: dblclick

// listner 9: resize

// listner 10: look something up
