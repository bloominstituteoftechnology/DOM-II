// Your code goes here

//On loading the page changing all the font-color to green
const onload = function(event){
    document.body.style.color = "green";
}
window.addEventListener('load',onload);


//On mouseover changing the fontcolor
let mainmover = document.querySelector('.container.home');
mainmover.addEventListener("mouseover", function(event){
    event.target.style.color = "violet";

    //to reset the color after a short delay
    setTimeout(function(){
        event.target.style.color = "";
    }, 500)

},false)

//dbclick event
let kdown = document.querySelector('.main-navigation');

kdown.addEventListener("dblclick", function (event){
    event.target.style.color= "red";
 });


//changing the content of sign me up of first
let button = document.querySelector('.btn');

document.addEventListener('click', function(event){
    if(event.target === button){
        button.textContent = `Click count: ${event.detail}`;  
    }else{
        console.log('clicking somewhere else')
    }
})
//onmuseenter event on h1
const h1 = document.querySelector('h1');
h1.addEventListener('mouseenter', function(e){
    alert('addEventListener: Great! You are reading the heading');
});

//nav events when mouseover 
const navn = document.querySelector('.nav-container');
navn.addEventListener('mouseover',function(e){
    if(e.target.classList.contains('nav-link')){
        const link = e.target;
        const siblings  = link.closest('.nav').querySelectorAll('.nav-link');
        const logon = link.closest('.nav').querySelector('.img-content');

        siblings.forEach(el =>{
            if(el !== link) el.style.opacity = 0.1;
        });
        logon.style.opacity = 0.5;
    }
})
//nav event back to normal with mouseout
navn.addEventListener('mouseout',function(e){
    if(e.target.classList.contains('nav-link')){
        const link = e.target;
        const siblings  = link.closest('.nav').querySelectorAll('.nav-link');
        const logon = link.closest('.nav').querySelector('.destination');

        siblings.forEach(el =>{
            if(el !== link) el.style.opacity = 1;
        });
        logon.target.style.opacity = 1;
    }
})
//scroll event 
window.addEventListener('scroll', function(){

    document.body.style.backgroundColor = "yellow";
})


//drag event
var dragged;

/* events fired on the draggable target */
document.addEventListener("drag", function(event) {
console.log('being dragged')
}, false);

document.addEventListener("dragstart", function(event) {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.style.opacity = 0;
}, false);

document.addEventListener("dragend", function(event) {
  // reset the transparency
  event.target.style.opacity = "";
}, false);

/* events fired on the drop targets */
document.addEventListener("dragover", function(event) {
  // prevent default to allow drop
  event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {
  // highlight potential drop target when the draggable element enters it
  if (event.target.className == "dropzone") {
    event.target.style.backgroundColor = "purple";
  }

}, false);

document.addEventListener("dragleave", function(event) {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
  }

}, false);

//drop event
document.addEventListener("drop", function(event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged elem to the selected drop target
  if (event.target.className == "dropzone") {
    event.target.style.opacity = 0.5;
    dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  }
}, false);

//preventdefault

document.querySelectorAll('.nav-link').forEach(function(el){
    el.addEventListener('click', function(e){
        e.preventDefault();
        const id = this.getAttribute('href');
        console.log(id);
    })
})

//stoppropagation
const heading = document.querySelector('.img-content');
const btn  = document.querySelector('.btn');

heading.addEventListener('click', (e) => {
    alert('The image was clicked');

});
btn.addEventListener('mouseover', (e) => {
    alert('The sign me up  was clicked');

});

btn.addEventListener('mouseover', (e) => {
    e.stopPropagation();
    alert('The sign me up  was clicked');

});



