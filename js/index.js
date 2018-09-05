// Your code goes here
    // * [x] `mouseover`
    // * [x] 'mouseout'
    // * [ ] `keydown`
	// * [x] `wheel`
	// * [ ] `drag / drop`
	// * [x] `load`
	// * [ ] `focus`
	// * [x] `resize`
	// * [ ] `scroll`
    // * [ ] `select`
    // * [x] `dblclick`
    // * [x] 'click'    

//reference
const head = document.querySelector('.logo-heading');
const allATags = document.querySelectorAll('.nav-link');
const para = document.querySelectorAll('p');
const h2 = document.querySelectorAll('h2');
const buttons = document.querySelectorAll('.btn');
const contain = document.querySelector(".container");

//handlers
const aClickHandler = function(e) {
    this.style.color = "aqua";
}

const pHandler = function(e) {
     this.style.color = "orange";
 }

 const pHandlerOut = function(e) {
     this.style.color = "black";
 }


//add 10 Event Listeners
head.addEventListener('dblclick', (e) => {
    head.style.color = 'purple';
});//1 Fun Bus logo turns purple when double clicked

allATags.forEach(e => {
    e.addEventListener('click', aClickHandler)
});//2 <a> tags turn aqua when clicked once

para.forEach(e => {
    e.addEventListener('mouseover', pHandler)
    e.addEventListener('mouseout', pHandlerOut)
});//3 & 4 All <p> tags turn orange when the mouseover, turns to black when mouseout

window.addEventListener('resize', (e) => {
    document.querySelector('h2').innerHTML = "WELCOME TO FUNBUS! WE LIKE TO GET WEIRD AROUND HERE.";
}); //5 All h2 innerHTML changes to new text when resized

h2.forEach(e => {
    e.addEventListener('wheel', function(e) {
        this.style.fontSize = '5rem';
    })
}) //6 Font size changes to 5rem when wheel over h2 elements

window.addEventListener("load", (e) => {
    alert("Load 'em up!!!");
  });//7 alerts when page is loaded

  



 



    
    