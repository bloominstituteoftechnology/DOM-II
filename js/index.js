// Your code goes here

// first: text red on mouseover
document.getElementsByClassName("logo-heading")[0].onmouseover = function() { 
    this.style.color = "red";
}; 


// second: h2s blue on mouseover
const h2Blue = document.querySelectorAll('.container h2');
const h2AquaFunction = function() {
    this.style.color = "blue";
}

h2Blue.forEach(function(element) {
    element.addEventListener('dblclick', h2AquaFunction);
})

// three: all the p text goes aqua on scroll
const text1 = document.querySelectorAll('.content-section p')[0];
const text2 = document.querySelectorAll('.content-section p')[1];
const text3 = document.querySelectorAll('.content-section p')[2];
const text4 = document.querySelectorAll('.content-section p')[3];
const text5 = document.querySelectorAll('.content-section p')[4];
const text6 = document.querySelectorAll('.content-destination p')[0];


 window.addEventListener('keydown', function(){
     text1.style = 'color: aqua';
 });

 window.addEventListener('keydown', function(){
    text2.style = 'color: aqua';
});

window.addEventListener('keydown', function(){
    text3.style = 'color: aqua';
});

window.addEventListener('keydown', function(){
    text4.style = 'color: aqua';
});

window.addEventListener('keydown', function(){
    text5.style = 'color: aqua';
});

window.addEventListener('keydown', function(){
    text6.style = 'color: aqua';
});


// four: text size jumps on resize

const introText = document.querySelectorAll('.intro p')[0];
 window.addEventListener('resize', function(){
     introText.style = 'font-size: 40px';
 })

// five: destination h4 goes red on mouse leave

document.querySelectorAll(".destination h4")[0].onmouseleave = function() { 
    this.style.color = "red";
}; 

document.querySelectorAll(".destination h4")[1].onmouseleave = function() { 
    this.style.color = "red";
}; 

document.querySelectorAll(".destination h4")[2].onmouseleave = function() { 
    this.style.color = "red";
}; 

// six: header img disappears

const headerImage = document.querySelectorAll('.container img');
const headerImageBeGone = function() {
    this.style.display = "none";
}

headerImage.forEach(function(element) {
    element.addEventListener('dblclick', headerImageBeGone);
})

// seven: main images disappears

const mainImages = document.querySelectorAll('.img-content img');
const mainImagesBeGone = function() {
    this.style.display = "none";
}

mainImages.forEach(function(element) {
    element.addEventListener('dblclick', mainImagesBeGone);
})


// eight: h2s rotate
const h2Rotate = document.querySelectorAll('.container h2');
const h2RotateFunction = function() {
    this.style.transform = "rotate(180deg)";
}

h2Rotate.forEach(function(element) {
    element.addEventListener('dblclick', h2RotateFunction);
})

// nine: on mouseover, bus img rotates 180

const header180 = document.querySelectorAll('.container img');
const header180Function = function() {
    this.style.transform = "rotate(180deg)";
}

header180.forEach(function(element) {
    element.addEventListener('mouseleave', header180Function);
})


// 10: on dblclick, background color to black


const container = document.querySelectorAll('.container');
const containerKeydownFunction = function() {
    document.body.style.backgroundColor = "black";
}

container.forEach(function(element) {
    element.addEventListener('dblclick', containerKeydownFunction);
})

// fun stretch goal here would be, on background color, to turn all text to white or green or whatever