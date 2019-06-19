// Your code goes here

//mouseover
const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener("mouseover", (e) => e.target.style.transform = "scale(1.5)");
logoHeading.addEventListener("mouseout", (e) => e.target.style.transform = "scale(1)")


//keydown

//wheel
// const wheelDestination = document.querySelector('.destination p')
// wheelDestination.addEventListener("wheel", (e) => {e.target.style.fontSize = "35px";
// })


//
const letsGo = document.querySelectorAll('.text-content h2');
for (let i = 0; i < letsGo.length; i++) {
letsGo[i].addEventListener('click', (e) => {
    e.target.innerHTML = "YAYYYY!";
})
}


document.addEventListener('click', (e) => { 
    console.log(e.target.nodeName)

})




//load
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
})

//focus
const password = document.querySelector('input[type="password"]');
password.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';    
});
password.addEventListener('blur', (event) => {
  event.target.style.background = '';    
});

//drag / drop
var dragged;
document.addEventListener("drag", function(event) {
}, false);

document.addEventListener("dragstart", function(event) {
  dragged = event.target;
  event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function(event) {
  event.target.style.opacity = "";
}, false);

document.addEventListener("dragover", function(event) {
  event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {
  if (event.target.className == "dropzone") {
    event.target.style.background = "purple";
  }

}, false);

document.addEventListener("dragleave", function(event) {
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
  }

}, false);

document.addEventListener("drop", function(event) {
  event.preventDefault();
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
    dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  }
}, false);

//keydown

document.addEventListener('keydown', changeBackground);
function changeBackground(e) {
document.body.style.backgroundColor = 'pink';
}


//resize
window.addEventListener('resize', (e) => {
// console.log(window)
randomBg()
})

//scroll
window.addEventListener('scroll', (e) => {
randomBg()   
})

function randomBg() {
    document.body.style.backgroundColor = 'light blue';
}


const selectElement = document.querySelector('.fav-destination');

selectElement.addEventListener('change', (event) => {
  const result = document.querySelector('.result');
  result.textContent = `You like ${event.target.value}`;
});


