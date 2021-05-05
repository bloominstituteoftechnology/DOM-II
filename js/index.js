// Your code goes here
// first event listeners (MOUSEOVER)
const mouseOver = document.querySelector(".container")
mouseOver.addEventListener('mouseover', function(event){
    event.target.style.color = "purple";

    //reset the color after a short delay
    setTimeout(function(){
        event.target.style.color ="";
    }, 500);
}, false);

//dblclick event listner 
const title = document.querySelector(".intro h2")
title.addEventListener('dblclick', function(event){
    title.style.backgroundColor = "grey"
})

//keydown event listner
const firstParagraph = document.querySelector(".intro p")
document.addEventListener("keydown", function(event){
    if (event.key === "Escape"){
        title.style.fontSize = '60px';
        firstParagraph.style.fontSize = '30px';
    }
    setTimeout(function(){
        title.style.fontSize ="40px";
        firstParagraph.style.fontSize = '20px'
    }, 1500);
}, false);

//scroll 
let lastKnownScrollPosition = 0;
let ticking = false;
const secondParagraph = document.querySelector('.content-section');
  const thirdParagraph = document.querySelector(".inverse-content")
  const fourthParagraph = document.querySelector(".content-destination")
function doSomething(scrollPos) {
  
  secondParagraph.style.color = 'red';
  thirdParagraph.style.color = 'purple';
  fourthParagraph.style.color = 'blue';

}

document.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
  setTimeout(function(){
    secondParagraph.style.color = '';
  thirdParagraph.style.color = '';
  fourthParagraph.style.color = '';
}, 1500);
},false);

//resize event 



