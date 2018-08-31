
// todo - adjust each function to perform an action that 
// benefits the current style of the website.

// todo - remove the red colors from the functions

// todo - adjust event listeners for 2 - 10


// 1
var itemOne = document.querySelectorAll('header .container h1')[0].addEventListener('mouseover', itemOneFunc);

function itemOneFunc(item) {
    this.style.backgroundColor = 'red';
}

// 2
var itemTwo = document.querySelectorAll('header .container nav')[0].addEventListener('mouseover', itemTwoFunc);

function itemTwoFunc(item) {
    this.style.backgroundColor = 'red';
}

// 3
var itemThree = document.querySelectorAll('.container header img')[0].addEventListener('mouseover', itemThreeFunc);

function itemThreeFunc(item) {
    this.style.border = '1px solid red';
}

// 4
var itemFour = document.querySelectorAll('.container .content-section .text-content h2')

for (var i = 0;  i < itemFour.length; i++) {
    itemFour[i].addEventListener('mouseover', itemFourFunc);
}

function itemFourFunc(item) {
    this.style.fontWeight = 'bold';
}


// 5
var itemFive = document.querySelectorAll('.destination h4')

for (var i = 0; i < itemFive.length; i++) {
    itemFive[i].addEventListener('mouseover', itemFiveFunc);
}

function itemFiveFunc(item) {
    this.style.border = '1px solid green';
}