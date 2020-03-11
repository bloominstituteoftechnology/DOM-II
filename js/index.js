
// dblclick

const pic = document.getElementById('sand-bus');

pic.addEventListener('dblclick', () => {
  alert("Beep! Beep!")
});


// resize

// window.addEventListener('resize', reportWindowSize);
//
//
// var f = function(){
//   var eventHandler = function(event){
//     var btn = document.getElementsByTagName('btn')[0];
//     btn.innerHTML = 'W=' + window.innerWidth + 'H=' + window.innerHeight;
//   };
//
// window.addEventListener('resize', eventHandler, false)
//
// };
//
// document.addEventListener('DOMContentLoaded',f,false);

// key down

document.getElementById("demo").onkeydown = function() {redDown()};

function redDown() {
  document.getElementById("demo").style.backgroundColor = "red";

}
// key up

document.getElementById("demo").onkeyup = function(){blueUp()};
function blueUp() {
  document.getElementById("demo").style.backgroundColor = "blue";

}


// Wheel

document.getElementById("demo").addEventListener("wheel", headerOff)

function headerOff() {
  document.getElementById("demo").style.backgroundColor = "white";
}

// Cut and Paste Events
const cutSource = document.querySelector('h4#fun-in-sun')

cutSource.addEventListener('cut', (event) => {

const selection = document.getSelection();
event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
selection.deleteFromDocument();
event.preventDefault();

});

// Mouse Enter and Leave

let rowRightCount = 0;
let rowLeftCount = 0;

const boat = document.getElementById('boat');


boat.addEventListener('mouseenter', e => {
  boat.style.border = '5px dotted orange';
  rowRightCount++;
  console.log('Row right ' + rowRightCount + '.');
});

boat.addEventListener('mouseleave', e => {
  boat.style.border = '1px solid #333';
  rowLeftCount++;
  console.log('Row left ' + rowLeftCount + '.');
});

//Mountain

let mountainBtn = document.querySelector('#mountain');

mountainBtn.addEventListener('click', e => {
  document.getElementById("boat").style.display = "none";
});


















// // LECTURE NOTES
// let homeLink = document.getElementById('home-link')
// // Your code goes here
// console.log('something else still');
// homeLink.addEventListener(
//   'click', // string with the name of the event
//   () => {
//     // things we want happening when this
//     // link gets clicked
//     console.log('the link got clicked');
//   }
// )
// document.querySelector('nav').addEventListener('click', () => {
//   console.log('the nav got clicked');
// })
//
//
// // attach a 'click' event listener to the header element
// // and console.log('')
// document.querySelector('header').addEventListener('click', () => {
//   console.log('the header got clicked');
// });
//
// document.body.addEventListener('click', (stuff) => {
//   console.log(stuff);
//   console.log('the body of the page got clicked');
// });
