// Your code goes here

//Changing color of nav links to red when mouse over:

let navItem = document.querySelectorAll('.nav-link');

navItem.forEach(element => {
  element.addEventListener('mouseover', ()=> {
    element.style.color = "red"
  })
})

// navItem[0].addEventListener("mouseover", function( event ) {   
//   event.target.style.color = "red";
// });

// navItem[1].addEventListener("mouseover", function( event ) {   
//   event.target.style.color = "red";
// });

// navItem[2].addEventListener("mouseover", function( event ) {   
//   event.target.style.color = "red";
// });

// navItem[3].addEventListener("mouseover", function( event ) {   
//   event.target.style.color = "red";
// });

// Retuen Nav links to black upon mouse leaving:

let navReturn = document.querySelectorAll('.nav-link');

navReturn.forEach(element => {
  element.addEventListener("mouseout", ()=> {
    element.style.color = "black"
  })
})

// Add Click count to logo

let logoHeading = document.querySelector('.logo-heading').addEventListener("click", function( event ) {
  // display the current click count inside the clicked div
  event.target.textContent = "click count: " + event.detail;
}, false);

// keydown

let keyDown = addEventListener('keydown', (event) => {
  const keyName = event.key;
  // alert('keydown event\n\n' + 'The following key was pressed: ' + keyName);
  event.target.style.color = "red";
});

//keyup

let keyUp = addEventListener('keyup', (event) => {
  const keyName = event.key;
  // alert('keydown event\n\n' + 'The following key was pressed: ' + keyName);
  event.target.style.color = "black";
});

//double click

let doubleClick = document.querySelector('.welcomeFun').addEventListener('dblclick', function ( event ) {
  event.target.textContent = "YOU BROKE IT!";
});

// //dragged

// let dragged = document.querySelector('.yayFunBus')
//   .addEventListener('drag', function( event ) {
//     event.target.display = 'none';
//   }, );
  
// scroll

let scrolling = document.querySelector('.nav')
.onscroll = function() {
  event.target.style.color = "purple";
};