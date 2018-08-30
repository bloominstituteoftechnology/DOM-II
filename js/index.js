// Your code goes here

// *******  navbar using  mousemove & mouseleave
var nav_a = document.querySelectorAll('a');

nav_a.forEach(function(element){
  element.addEventListener('mousemove', function (event) {
    let tag = event.target.style;
    tag.fontSize = '2rem';
    tag.backgroundColor = 'bisque';
    tag.padding= '2rem';
    tag.borderRadius = '5rem 0 5rem 0';
    tag.border = '1px solid chocolate';

  });
});

nav_a.forEach(function(element){
  element.addEventListener('mouseleave', function (event) {
    let tag = event.target.style;
    tag.fontSize = '1.6rem';
    tag.backgroundColor = 'white';
    tag.padding = '0';
    tag.border = '0';
  });
});

// *******  alert with name of key pressed message
document.addEventListener('keypress', event => {
  const keyPressed = event.key;
  alert(`someone pressed the ${keyPressed} key`);
});

// ***** alert indicating mouse wheel spun
document.addEventListener('wheel', () => {
  alert(`someone spun the mouse wheel`);
});

// Some dragable code from MDN
document.addEventListener("drag", function( event ) {

}, false);

document.addEventListener("dragstart", function( event ) {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.style.opacity = .5;
  event.target.style.zIndex = 2;
}, false);

document.addEventListener("dragend", function( event ) {
  // reset the transparency
  event.target.style.opacity = "";
}, false);

/* events fired on the drop targets */
document.addEventListener("dragover", function( event ) {
  // prevent default to allow drop
  event.preventDefault();
}, false);

document.addEventListener("dragenter", function( event ) {
  // highlight potential drop target when the draggable element enters it
  if ( event.target.className == "dropzone" ) {
    event.target.style.border = "5px solid blue";
  }

}, false);

document.addEventListener("dragleave", function( event ) {
  // reset background of potential drop target when the draggable element leaves it
  if ( event.target.className == "dropzone" ) {
    event.target.style.background = "";

  }

}, false);

document.addEventListener("drop", function( event ) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged elem to the selected drop target
  if ( event.target.className == "dropzone" ) {
    event.target.style.background = "";
    dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  }

}, false);