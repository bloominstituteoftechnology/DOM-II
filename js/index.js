// Your code goes here

// click============================================
const aTag = document.querySelectorAll('.nav-link');

aTag[0].addEventListener('click', function(e) { 
  // Don't do the default behavior in HTML
  e.preventDefault();
  console.log("a tag was clicked!")
});

const links = document.querySelectorAll('new-link');

// mouseover=========================================
const heading = document.querySelector('.logo-heading');

heading.addEventListener('mouseover', function(e){
  e.target.style.color = getColor()
});

function getColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++){
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// keydown============================================
const keyDown = document.getElementsByClassName('.text-content');

document.addEventListener('keydown', function() {
  console.log ('You pressed me.');
});

// load================================================
window.addEventListener('load', function() {
  alert('Hey, this is the .load() method! Click OK to see that your page has loaded!');
});


// fullscreeenchange==============================================

document.addEventListener("fullscreenchange", function( event ) {

  // The event object doesn't carry information about the fullscreen state of the browser,
  // but it is possible to retrieve it through the fullscreen API
  if ( document.fullscreenElement !== null ) {
      
      // The target of the event is always the document,
      // but it is possible to retrieve the fullscreen element through the API
      document.fullscreenElement;
  }

});

// mouseleave=============================================

const myMouseLeft = document.querySelectorAll('.btn');

myMouseLeft[2].addEventListener('dblclick', function(e) {  
  console.log("Elvis has left the building!");
  e.target.style.color = 'orange';
  });

// double click==========================================

const myButton = document.querySelectorAll('.btn');

myButton[0].addEventListener('dblclick', function(e) {  
  console.log("Sign Me UP!");
  e.target.style.color = 'red';
  });


// mousedown============================================

const myMouse = document.querySelectorAll('.btn');

myMouse[1].addEventListener('mousedown', function(e) {  
  console.log("My mouse is down.");
  e.target.style.color = 'green';
  });

// keypress==============================================
document.addEventListener('keypress', (event) => {
  const keyName = event.key;
  alert('keypress event\n\n' + 'key: ' + keyName);
});
