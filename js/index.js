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

//4. Mouse click
const signBtn = document.querySelectorAll('.btn');

signBtn[0].addEventListener('click', function(event) {
    console.log("Fun in the sun button was clicked!");
});
signBtn[1].addEventListener('click', function(event) {
    console.log("Mountain Excursion button was clicked!");
});

signBtn[2].addEventListener('click', function(event) {
    console.log("Island Getaway button was clicked!");
});


//5. Load
window.addEventListener("load", function(event) {
    console.log("Fun Bus is ready to go!");
  });


//6. Focus
const focusEv = document.querySelector('.nav-container');

focusEv.addEventListener("focus", function(event) {
    event.target.style.background = "lightGrey";
    
}, true);

//7. Mouse double click 
const funDblClick = document.querySelector('.home');

funDblClick.addEventListener('dblclick', function(event) {
    if ( event.target.style.text === "Fun" )
    console.log("fun was double clicked")
})

//8. Scroll
const homeScroll = document.querySelector(".home");

window.addEventListener("scroll", function(e){
    console.log("Logging scroll for no reason!!!");
    
})

//9. mouseup over Let's Go!
const mouseUpLetsGo = document.querySelector('.text-content h2');

mouseUpLetsGo.addEventListener('mouseup', function(event) {
    console.log("Mouseup over Let's Go!")
})