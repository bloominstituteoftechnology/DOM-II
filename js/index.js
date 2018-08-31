// Your code goes here
// * [ ] Using your [index.js file](js/index.js), create 10 [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events). using your creativity to make the Fun Bus site more interactive.  Here are some unique events you could try to use: 
// 	* [ ] `mouseover`
// 	* [ ] `keydown`
// 	* [ ] `wheel`
// 	* [ ] `drag / drop`
// 	* [ ] `load`
// 	* [ ] `focus`
// 	* [ ] `resize`
// 	* [ ] `scroll`
// 	* [ ] `select`
// 	* [ ] `dblclick`

const cl = console.log;
const navButtons = document.querySelectorAll(".nav-link");
const lastPic = document.querySelector('.content-destination img');
const destinations = document.querySelectorAll('.destination .btn');
const destinationDivs = document.querySelectorAll('.destination');
const centerTitleTop = document.querySelector('content-section h2');
const centerTitleBottom = document.querySelector('inverse-content h2');

const borderBoxOn = function() {
    this.style.border = '1px solid black';
}
const borderBoxOff = function() {
    this.style.border = '';
} 

let size = 100;
let switchDir = -1;
const increaseSize = function() {
    this.style.width = `${size}%`;
    if (size < 20) {
        switchDir = 1;
    } else if (size > 100) {
        switchDir = -1;
    }
    size += switchDir * 10;
}

const bumpOut = function() {
    event.stopPropagation();
    if (this.parentNode.style.width === "35%") {
        this.parentNode.style.width = "30%";
    } else this.parentNode.style.width = "35%";
}

constdragChange 

// 1 navbar borders pop in and out with mouseover
navButtons.forEach(item = (elem) => {
    elem.addEventListener('mouseover', borderBoxOn);
    elem.addEventListener('mouseleave', borderBoxOff);
})

// 2 last pic on the page increases and decreases in size with wheel
lastPic.addEventListener('wheel', increaseSize); 

// 3 each individual destination paragraph increases width on click of the buttons
destinations.forEach(item = (elem) => elem.addEventListener('click', bumpOut));

// 4 middle destination paragraph turn pink when clicked - demonstrates bubbling fix
destinationDivs[1].addEventListener('click', function() {
    if (destinationDivs[1].style.backgroundColor === "pink") {
        destinationDivs[1].style.backgroundColor = "white";
    } else destinationDivs[1].style.backgroundColor = "pink";
});

centerTitleTop.addEventListener('drag', () => centerTitleBottom.style.color = 'red')



