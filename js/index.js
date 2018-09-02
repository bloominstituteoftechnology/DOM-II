// Your code goes here
    // * [x] `mouseover`
    // * [x] 'mouseout'
    // * [ ] `keydown`
	// * [ ] `wheel`
	// * [ ] `drag / drop`
	// * [ ] `load`
	// * [ ] `focus`
	// * [ ] `resize`
	// * [ ] `scroll`
    // * [ ] `select`
    // * [x] `dblclick`
    // * [x] 'click'    

//reference
const head = document.querySelector('.logo-heading');
const allATags = document.querySelectorAll('.nav-link');
const para = document.querySelectorAll('p');

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

allATags.forEach( nav => {
    nav.addEventListener('click', aClickHandler)
});//2 a tags turn aqua when clicked once

para.forEach(graph => {
    graph.addEventListener('mouseover', pHandler)
    graph.addEventListener('mouseout', pHandlerOut)
});//3 all <p> tags turn orange when the mouseover, turns to black when mouseout






    



    
    