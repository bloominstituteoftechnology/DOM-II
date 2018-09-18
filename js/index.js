// Your code goes here
let navLink = document.querySelectorAll('#link-tag');
navLink.forEach((link) => {
    link.addEventListener('click', (e) => { 
    e.preventDefault();
});
});


let mouseOver = document.querySelectorAll('h2');
mouseOver.forEach((h2) => {
    h2.addEventListener('mouseover', (e) => {
        e.target.style.color = "teal";
        
        setTimeout(function() {
            e.target.style.color = "";
          }, 1000);
        }, false);
});

let dblClick = document.querySelectorAll('.home img');
dblClick.forEach((img) => {
    img.addEventListener('dblclick', () => {
        img.classList.toggle('display');

    setTimeout(function() {
        img.classList.toggle('display');
      }, 10000);
    }, false);
});

document.addEventListener('keydown', (e) => {
    e.key;
    alert('WHY DID YOU DO THAT?!?!?!?! ');
});


var dragged;
document.addEventListener('drag', (e) => {

}, false);

document.addEventListener("dragstart", (e) => {
    dragged = e.target;
    e.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", (e) => {
    e.target.style.opacity = "";
}, false);


document.addEventListener("dragover", (e) => {
    e.preventDefault();
}, false);


document.addEventListener("dragenter", (e) => {
    if ( e.target.className == "dropzone" ) {
        e.target.style.background = "blue";
    }

}, false);

document.addEventListener("dragleave", (e) => {
    if (e.target.className == "dropzone" ) {
        e.target.style.background = "";
    }

}, false);

document.addEventListener("drop", (e) => {
    e.preventDefault();
    if ( e.target.className == "dropzone" ) {
        e.target.style.background = "";
        dragged.parentNode.removeChild( dragged );
        e.target.appendChild( dragged );
    }
  
}, false);