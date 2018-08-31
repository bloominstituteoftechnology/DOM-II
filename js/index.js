
// 1
var itemOne = document.querySelectorAll('header .container h1')[0].addEventListener('mouseover', itemOneFunc);

function itemOneFunc(item) {
    this.style.backgroundColor = 'red';
}

// 2
var itemTwo = document.querySelectorAll('header .container nav')[0].addEventListener('keydown', itemTwoFunc);

function itemTwoFunc(item) {
    this.style.display = 'none';
}

// 3
var itemThree = document.querySelectorAll('.container header img')[0].addEventListener('wheel', itemThreeFunc);

function itemThreeFunc(item) {
    this.style.border = '1px solid red';
}

// 4
var itemFour = document.querySelectorAll('.container .content-section .text-content h2')

for (var i = 0;  i < itemFour.length; i++) {
    itemFour[i].addEventListener('drag', itemFourFunc);
}

function itemFourFunc(item) {
    this.style.display = 'none';
}


// 5
var itemFive = document.querySelectorAll('.destination h4')

for (var i = 0; i < itemFive.length; i++) {
    itemFive[i].addEventListener('load', itemFiveFunc);
}

function itemFiveFunc(item) {
    this.style.fontWeight = 'bold';
}

// 6
var itemSix = document.querySelectorAll('footer')[0].addEventListener('focus', itemSixFunc);

function itemSixFunc(item) {
    this.style.border = '1px solid red';
}

// 7
var itemSeven = document.querySelectorAll('.destination .btn')

for (var i = 0; i < itemSeven.length; i++) {
    itemSeven[i].addEventListener('dblclick', itemSevenFunc);
}

function itemSevenFunc(item) {
    this.style.display = 'none';
}

// 8
var itemEight = document.querySelectorAll('.content-destination')[0].addEventListener('select', itemEightFunc);

function itemEightFunc(item) {
    this.style.border = '1px solid red';
}


// 9
var itemNine = document.querySelectorAll('h2')

for (var i = 0; i < itemNine.length; i++) {
    itemNine[i].addEventListener('scroll', itemNineFunc);
}

function itemNineFunc(item) {
    this.style.border = '1px solid red';
    this.style.fontWeight = 'bold';
}

// 10
var itemTen = document.querySelectorAll('p')

for (var i = 0; i < itemTen.length; i++) {
    itemTen[i].addEventListener('click', itemTenFunc);
}

function itemTenFunc(item) {
    this.style.display = 'none';
}
