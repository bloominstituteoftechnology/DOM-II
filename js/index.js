// Your code goes here
    // * [ ] `mouseover`
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
const allH2Tags = document.querySelectorAll('h2');

    
//handlers
const aClickHandler = function(event) {
    this.style.color = "aqua";
}

    
//addEventListener
head.addEventListener('dblclick', (event) => {
    head.style.color = 'purple';
});//1 Fun Bus logo turns purple when double clicked

allATags.forEach( nav => {
    nav.addEventListener('click', aClickHandler)
}); //2 a tags turn aqua when clicked once






    



    
    