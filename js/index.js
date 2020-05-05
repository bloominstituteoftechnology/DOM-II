
// dblclick

const pic = document.getElementById('sand-bus');

pic.addEventListener('dblclick', () => {
  alert("Beep! Beep!")
});


// resize


  var eventHandler = function(event){
    var btn = document.querySelector('.btn');
    btn.innerHTML = 'W=' + window.innerWidth + 'H=' + window.innerHeight;

  };


window.addEventListener('resize', eventHandler, false)


// document.addEventListener('DOMContentLoaded',f,false);

// key down

document.getElementById("demo").onkeydown = function() {redDown()};

function redDown() {
  document.getElementById("demo").style.backgroundColor= "red";

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
  console.log('Entered ' + rowRightCount + 'x.');
});

boat.addEventListener('mouseleave', e => {
  boat.style.border = '1px solid #333';
  rowLeftCount++;
  console.log('Left ' + rowLeftCount + 'x.');
});

//Mountain Hide

let mountainBtn = document.querySelector('#mountain');

mountainBtn.addEventListener('click', e => {
  document.getElementById("boat").style.visibility = "hidden";
});

// Moutain Visible
let islandBtn = document.querySelector('#midBtn');

islandBtn.addEventListener('click', e => {
  document.getElementById("boat").style.visibility = "visible";
});

// load
window.addEventListener('load', (event) => {
  console.log('Your page is fully loaded your highness');
});

