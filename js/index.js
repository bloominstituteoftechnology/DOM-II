// Your code goes here

//Anchor Tag 'Home' blinks when page loads
const logo = document.querySelector(".main-navigation h1");
window.onload = function() {logo.classList.add("blink")};

//button size scaling up on mouse over
const btns = document.querySelectorAll(".btn");
btns.forEach(btn => btn.addEventListener('mouseover', (event) => btn.classList.add("btn-scaling")));

//button size scaling back to normal on mouse over
btns.forEach(btn => btn.addEventListener('mouseout', (event) => btn.classList.remove("btn-scaling")));

//Change back paragraph to black with single click
const header_p = document.querySelector(".intro > p")
header_p.addEventListener('dblclick',(event) => event.target.style.color = 'black');

//keydown alert
const body = document.querySelector("body");
body.addEventListener('keydown', (event) => alert('No Input Fields Available!'));

//Add borders to pictures as we are scrolling down
imgs = document.querySelectorAll("img");

window.addEventListener('scroll', function(event) {
    imgs.forEach(img => img.style.border = "5px solid #17A2B8 "); 
});

//Change background to yellow when wheeling mouse
window.addEventListener('wheel', function(event) {
    body.style.background = "yellow"; 
});

//////////////////////////////////////////////
//Nested events with event propagation stopped
///////////////////////////////////////////////

//Will send alert when clicking on paragraph
header_p.addEventListener('click', (event) => {
    alert("you have clicked on a paragraph");
    event.stopPropagation();  // Stop propagation to the body
});

//Will send alert when clicking on body
body.addEventListener('click', (event) => alert("you have clicked on the body"));

/////////////////////////////////////////////////////////////////////
//Stop Navigation items from refreshing the page with prevenDefault()
/////////////////////////////////////////////////////////////////////

//All anchor tags changed to bold when resizing
const anchors = document.querySelectorAll("a");
window.addEventListener('resize', function(event) {
    anchors.forEach(a => a.style.fontWeight = "bold");
    event.preventDefault();
});

