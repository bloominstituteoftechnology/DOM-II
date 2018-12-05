// Your code goes here

////////////// MOUSEOVER 
const navChange = document.querySelector('.nav');

navChange.addEventListener('mouseover', function(e) {
    e.target.style.color = 'orange';

    setTimeout(function() {
        e.target.style.color = 'black';
      }, 500);
    }, false);



////////////// KEYUP  + KEYDOWN
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const body = document.querySelector('body');
body.addEventListener('keydown', function(e){
    body.style.backgroundColor = getRandomColor();
});


body.addEventListener('keyup', function(e){
    body.style.backgroundColor = 'white';
});


////////////// DRAG / DROP


document.addEventListener('drag', function( event){
    console.log('Is this thing dragging?')
}, false);






////////////// LOAD 
window.addEventListener('load', function(e){
    alert('Loading all necessary items')
});





////////////// click

const fontSizes = document.querySelector('.content-section h2')

fontSizes.addEventListener('click', function(e){
    e.target.style.fontSize = '100px';

});




////////////// RESIZE


 window.addEventListener('resize', function(e){
    console.log("I feel cramped")

 });






////////////// SCROLL

let para = document.querySelector('h2');

window.addEventListener('scroll', function(e){
    para.style.color = 'blue';
});



////////////// SELECT

const logo = document.getElementById('fun-bus');
logo.addEventListener('select', function() {
    console.log('click on the fun bus');
  alert('Selection changed!');
}, false);




////////////// DBLCLICK

const clickText= document.querySelectorAll('h4');
clickText.forEach(function(h4){
    h4.addEventListener('dblclick', function(e){
        e.target.style.color = 'orange';
    });
});








