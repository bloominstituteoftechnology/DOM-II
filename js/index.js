// Your code goes here
const mainNavigation = document.querySelector('.main-navigation');
mainNavigation.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = "blue";
});
   
mainNavigation.addEventListener('mouseleave', (event) => {
    event.target.style.backgroundColor = "gray";
});

window.onload = (event) => {
    console.log("the page is loaded");
}
const mainTitle = document.querySelector('.logo-heading');
mainTitle.addEventListener('mousemove' , (event) => {
    event.target.style.color = "red";
});


const paragraph = document.querySelector('.home');
paragraph.addEventListener('dblclick', (event) => {
    event.target.style.fontSize = "medium";
});

window.addEventListener('unload', (event) => {
    console.log('I am the 6th ');
});
paragraph.addEventListener('focus', (event) => {
    event.target.style.fontSize = "large";
});
mainNavigation.addEventListener('focusin', (event) => {
    event.target.style.backgroundColor = "pink";
});

document.addEventListener("drag", (event) => {

}, false);
document.addEventListener("dragend", (event) => {
   
    event.target.style.opacity = "";
  }, false);