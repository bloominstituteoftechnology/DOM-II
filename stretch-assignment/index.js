
// # DOM II - Stretch Assignment - Travelers 

// Topics:
//  * Events
//  * The Event Object
//  * Event Handlers
//   * click
//   * mousedown
//   * mouseup
//   * scroll
//   * keydown

// ## Objectives
//  * Manipulate the DOM in response to user events using JavaScript
//  * Use event listeners to handle events

// ## Beginning Project
//  * You can open your `index.html` file in your browser to see your work
//  * All your work will be done in `index.js`
//  * Make sure to read both the `index.html` and `styles.css` files so that you know what you're working with

// ## Project Description
//  You are going to create a simple game where rockets can be moved up and down by clicking on them.  There are travelers inside of these rockets that can blast off as long as you hold the mouse down on their rocket.

//  Rockets:
//   * When a block is clicked, it should go to the top of the stack.

//  Travelers:
//   * While a mouse is clicked down on a box, it should move to the right (It should coninuously move, there is no limit on how far it will go).
  
// ## Stretch Goals
  
//   Rockets:
    
//   * Animate the rockets, visually show them being transported to the top.
  
//   Travelers:
    
//   * Give the travelers a limit on the distance it can travel.
//   * When the mouse button is released, it should travel back to its original position.
//   * A mouse down that occurs during a transition back to the original position should send it traveling to the right again  from it's current position.
  
//   You will be using `window.setInterval`. For this method, and any of those listed in the "Topics" section of this README, you are encouraged to use MDN as your resource for Documentation. MDN can be challenging to consume at first, so you may also use something like W3schools if the MDN documentation on a given subject is a bit too complicated. -->

// 


let counter = 0;
// cave-cat way
const blocks = document.querySelector('.blocks');
console.log(blocks);
blocks.querySelector('.block--red').addEventListener('click',function(e){
    counter--;
    e.target.style.order = `${counter}`;
        if (counter === -6){
        alert('YOU THOUGHT I COULD DO IT? SEND HALP!')
    }  
});
blocks.querySelector('.block--blue').addEventListener('click',function(e){
    counter--;
    e.target.style.order = `${counter}`;
    if (counter === -6){
        alert('YOU THOUGHT I COULD DO IT? SEND HALP!')
    }  
});
blocks.querySelector('.block--green').addEventListener('click',function(e){
    counter--;
    e.target.style.order = `${counter}`;
    if (counter === -6){
        alert('YOU THOUGHT I COULD DO IT? SEND HALP!')
    }  
});
blocks.querySelector('.block--pink').addEventListener('click',function(e){
    counter--;
    e.target.style.order = `${counter}`;
    if (counter === -6){
        alert('YOU THOUGHT I COULD DO IT? SEND HALP!')
    }  
});
blocks.querySelector('.block--gray').addEventListener('click',function(e){
    counter--;
    e.target.style.order = `${counter}`;
    if (counter === -6){
        alert('YOU THOUGHT I COULD DO IT? SEND HALP!')
    }  
});
// space-cat way
// const block = document.querySelectorAll('.block');
// block.forEach((e) => e.addEventListener('click',(e) => {
//     counter--;
//     e.target.style.order = `${counter}`;
//     if (counter % 10 === -1){
//         alert('YOU THOUGHT I COULD DO IT? SEND HALP!')
//     }    
// }))    

// let state = 0;
blocks.querySelector('.block--red').addEventListener('mousedown',function(e){
    blocks.querySelector('.block--red img').style.transition = 'all 3s linear';
    blocks.querySelector('.block--red img').style.transform = 'translateX(1800px)';
});
blocks.querySelector('.block--blue').addEventListener('mousedown',function(e){
    blocks.querySelector('.block--blue img').style.transition = 'all 3s linear';
    blocks.querySelector('.block--blue img').style.transform = 'translateX(1800px)';
});
blocks.querySelector('.block--green').addEventListener('mousedown',function(e){
    blocks.querySelector('.block--green img').style.transition = 'all 3s linear';
    blocks.querySelector('.block--green img').style.transform = 'translateX(1800px)';
});
blocks.querySelector('.block--pink').addEventListener('mousedown',function(e){
    e.stopPropagation();
    blocks.querySelector('.block--pink img').style.transition = 'all 3s linear';
    blocks.querySelector('.block--pink img').style.transform = 'translateX(1800px)';
});
blocks.querySelector('.block--gray').addEventListener('mousedown',function(e){
    blocks.querySelector('.block--gray img').style.transition = 'all 3s linear';
    blocks.querySelector('.block--gray img').style.transform = 'translateX(1800px)';
});

// falled space cat way
// block.forEach((e) => {e.addEventListener('mousedown',(e) => {
//     console.log(e.target.childNodes);
//     e.target.childNodes.img.style.transition = `all 3s linear`;
//     e.target.childNodes.img.style.transform = `translateX(1800px)`;
// })})   

