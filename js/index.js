// Your code goes here
const home = document.querySelector('.home');
const logo = document.querySelector('.logo-heading');

const myButton = document.querySelector('.btn');
const aTag = document.querySelectorAll('a');

logo.addEventListener('mouseover', function(e) {
    TweenMax.to(".logo-heading", 2, 
    {boxShadow:"0px 0px 20px blue", 
    color:"#FC0",
    rotation: 360
});
})

aTag[0].addEventListener('click', function(e) { 
  // Don't do the default behavior in HTML
 // e.preventDefault();
 // console.log("a tag was clicked!")
  TweenMax.to(".nav-link", 2, 
    {boxShadow:"0px 0px 20px blue", 
    color:"#FC0",
    rotation: 360
});


});


// Step 2: Add Event Listener
home.addEventListener('click', function(e) {  
  // What element did you click on specifically?
  //console.log(e.target);
  // The element which is attached to the event listener
  //console.log(e.currentTarget);
  console.log("Home fired!")
  e.target.style.backgroundColor = 'lightGray';
});


myButton.addEventListener('click', function(e) {
  e.stopPropagation();
  console.log("Button Fired!");
  TweenMax.to(".destination", 5, {
    x:300,
    opacity:0.7,
  });

  //aTag[3].classList.toggle('display-none');
});
