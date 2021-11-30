import './less/index.less'

// Your code goes here

//1
const section = document.querySelector('section');
window.addEventListener('scroll', () => {
    section.style.borderBottom = "thick dashed red";
});

//2
const logo = document.querySelector('.logo-heading');
logo.addEventListener('pointerover', (event) => { 
    event.target.style.fontSize = '8rem';
    event.stopImmediatePropagation();
});

//3
const bodyText = document.querySelector('body');
function changesBodyText() {
  bodyText.style.color = 'blue';
}
window.addEventListener('scroll', changesBodyText);

//4
const button = document.querySelectorAll('.btn');
button.forEach(element => {
    element.addEventListener('dblclick', event => {
        event.target.style.backgroundColor = 'purple';
    })
})

//5
const swam = document.querySelector('.logo-heading');
swam.addEventListener('mouseover', function() {
    swam.style.transform = "scale(1.5)";
    swam.style.transition = "all .3s ease-in-out";
})
swam.addEventListener('mouseout', function() {
    swam.style.transform = "scale(1)";
    swam.style.transition = "all 1s ease-in-out";
})

//6

const whoa = document.querySelector('.nav');
whoa.addEventListener('mouseover', function() {
    whoa.style.transform = "scale(1.5)";
    whoa.style.transition = "all .3s ease-in-out";
})
whoa.addEventListener('mouseout', function() {
    whoa.style.transform = "scale(1)";
    whoa.style.transition = "all 1s ease-in-out";
})

//7

function upload() {
    console.log('Page has loaded!');
}
document.addEventListener('DOMContentLoaded', load);

//8
document.addEventListener('pointerout', (event) => {
    console.log('Pointer Out');
    });
//9
window.addEventListener('scroll', (event)=> {
    console.log("Just keep scrolling")
    event.stopPropagation();
})

//10
const text = document.querySelector(".text-content");
text.addEventListener("click", function(evt) {
    console.log('click me');
});


  Prevent 
//overflow 
document.getElementByClass("nav").addEventListener("click", function(event){
    event.preventDefault()
  });