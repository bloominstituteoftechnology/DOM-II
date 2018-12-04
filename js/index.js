// Your code goes here
//1. Mouseover changes a tag colors
const navMouseOver = document.querySelectorAll('.nav a');

navMouseOver[0].addEventListener("mouseover", function(event) {
    event.target.style.color = "green";
})
navMouseOver[1].addEventListener("mouseover", function(event) {
    event.target.style.color = "red";
})
navMouseOver[2].addEventListener("mouseover", function(event) {
    event.target.style.color = "purple";
})
navMouseOver[3].addEventListener("mouseover", function(event) {
    event.target.style.color = "blue";
})

//2. Keydown
document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    console.log('keydown event \n\n' + 'key' + keyName);
});

//3. Wheel 
const wheelData = document.querySelector('.home');

wheelData.addEventListener("wheel", function(event) {
    event.target.style.fontSize = "4.2rem";
    // console.log(`I'm wheeling!`);
});

//4. Drag / Drop 

//5. Load
window.addEventListener("load", function(event) {
    console.log("Fun Bus is ready to go!");
  });


//6. Focus
const focusEv = document.querySelector('.nav-container');

focusEv.addEventListener("focus", function(event) {
    event.target.style.background = "lightGrey";
    
}, true);

