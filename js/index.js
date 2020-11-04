// Your code goes here

// selection of nav items
let navItems = document.querySelectorAll(".nav");

// adding NAV listeners for mouseover and setting prevent default
navItems.forEach(function(element) {
    element.addEventListener("mouseover", function(event) {
       if (event.target.style.color === 'hotpink') {
           event.target.style.color = 'black';
       } else {
           event.target.style.color = 'hotpink';
       }
})
})

// preventing default routing / refreshing
navItems.forEach(function(item) {
    item.addEventListener('click',(event) => {
        event.preventDefault(); 
    })
})

//selection of main title
const mainHead = document.querySelector('h1');

// setting main title listener on single click
mainHead.addEventListener("click", function(event) {
    // setting event propoagation to prevent header from changing color
    event.stopPropagation(); 
    event.target.style.fontSize = '70px';
    if (event.target.style.color === 'red') {
        event.target.style.color = 'black';
    } else {
        event.target.style.color = 'red';
    }
})

// selecting and setting header to change color once clicked - mainly to test propagation
const pageHeader = document.querySelector("header");
pageHeader.addEventListener("click",function(){
    pageHeader.style.backgroundColor = '#add8e6'; 
})

// SELECTING MAIN IMAGE
const firstImage = document.querySelector('img');

// setting listener for image to resize on page load
firstImage.addEventListener('load', function() {
    firstImage.style.transform = "scale(1.1)";
    firstImage.style.transition = "transform 2s"
})

// setting image to go back to normal size once hovered at 
firstImage.addEventListener('mouseenter', function() {
    firstImage.style.transform = "scale(1)";
});


// selecting all subheaders
const subheads = document.querySelectorAll('h2');

// setting listeners to all subheaders on double clicking
subheads.forEach(function(element) {
    element.addEventListener("dblclick", function(event){
        event.target.style.fontSize = "50px";
    })
    element.addEventListener("dblclick", function(event){
        event.target.style.color = "red";
    })
})

// selecting all paragraphs on page
const pars = document.querySelectorAll('p');

// setting paragraph listeners so reader knows which pargraph he finished
pars.forEach(function(parEl) {
    parEl.addEventListener("mouseleave",(event) => {
        if(event.target.style.color === 'blue') {
            event.target.style.color = 'black';
        } else {
            event.target.style.color = 'blue';
        }
    })
})

// selection of all imgs
const images = document.querySelectorAll('img');

// setting up event listener to alert if images are dragged
images.forEach((img) => {
    img.addEventListener("drag", (event) => {
        alert('please put picture back in place');
    })
})

// setting up listener for any key being released
window.addEventListener('keyup',(event) => {
    alert('KEYBOARD USAGE IS NOT ALLOWED');
})

// setting up copyrights by limiting copying
window.addEventListener('copy',(event) => {
    alert('PLEASE ENSURE YOU REVIEW COPYRIGHTS BEFORE COPYING!!');
})

// TRIED TO CHANGE SIZZE OF FONT ON SELECTION BUT NOT WORKING

// pars.forEach(function(parEl) {
//     parEl.addEventListener('select', function(){
//         parEl.style.subString.fontSize = '50px';
//     })
// })

// END OF TRIAL


