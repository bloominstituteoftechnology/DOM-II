// Your code goes here


// Variables //
let body = document.querySelector('body')
let banana = document.querySelector('img')
let anchors = document.querySelector('.nav, a')
let btn = document.querySelectorAll('.btn') 

// 1. Turns banner into a banana for Chance with a 'mouseover'//
banana.addEventListener('mouseover', (object) =>{
    banana.setAttribute('src', 'img/banana.jpg')
})