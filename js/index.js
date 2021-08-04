// Your code goes here

// * `keydown`
// * `wheel`
// * `load`
// * `focus`
// * `resize`
// * `select`
//  * `drag / drop`


const logo = document.querySelector(".intro img");
const navLinks = document.querySelector('.nav-link');



window.addEventListener('scroll', function(event){
    // console.log('user has scrolled');
})

navLinks.addEventListener('dblclick', function(event){
    console.log('We can attach as many as we want!!');
})


const test = document.querySelector('.intro h2')

test.addEventListener("mouseenter", function( event ) {
    // highlight the mouseenter target
    event.target.style.color = "purple";
  
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
}, false);


//   window.addEventListener("keydown", event => {
//     if (event.isComposing || event.keyCode === 229) {
//       return;
//     }
//     // do something
//   });
  
// const input = document.querySelector('.intro input');
// console.log(input)
// input.addEventListener('select', function(event){
//     console.log('We can want!!');
// });

// 

// form.addEventListener('focusin', (event) => {
//     event.target.style.background = 'pink';
//   });

function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
}
  

let scale = 1;
const el = document.querySelector('.hh');
el.onwheel = zoom;
  
el.addEventListener('wheel', zoom);

// const form = document.querySelector('.hey')

// form.addEventListener('blur', (event) => {
//     event.target.style.background = '';
//   }, true);

var enterEventCount = 0;
var leaveEventCount = 0;
const mouseTarget = document.getElementById('mouseTarget');
const unorderedList = document.getElementById('unorderedList');

mouseTarget.addEventListener('mouseenter', e => {
  mouseTarget.style.border = '5px dotted orange';
  enterEventCount++;
  addListItem('This is mouseenter event ' + enterEventCount + '.');
});

mouseTarget.addEventListener('mouseleave', e => {
  mouseTarget.style.border = '1px solid #333';
  leaveEventCount++;
  addListItem('This is mouseleave event ' + leaveEventCount + '.');
});

function addListItem(text) {
  // Create a new text node using the supplied text
  var newTextNode = document.createTextNode(text);

  // Create a new li element
  var newListItem = document.createElement("li");

  // Add the text node to the li element
  newListItem.appendChild(newTextNode);

  // Add the newly created list item to list
  unorderedList.appendChild(newListItem);
}
