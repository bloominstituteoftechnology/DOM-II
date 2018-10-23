// Your code goes here
const navLogoHeading = document.querySelector('.logo-heading');

// INCREASE SIZE OF LOGO HEADING ON MOUSEOVER
navLogoHeading.addEventListener("mouseover", (e) => e.target.style.transform = "scale(1.5)");

const nav = document.querySelector(".nav");

// ADD A BACKGROUND COLOR TO NAV LINKS IF THEY ARE DBLCLICKED
nav.addEventListener("dblclick", (e) => {
  e.target.style.backgroundColor = 'aqua';
});

// PREVENTING NAV LINKS FROM RELOADING PAGE
nav.addEventListener('click', (e) => {e.preventDefault();
console.log("clicked on navlink");}
);

const signUpButton1 = document.querySelector(".btn");
const signUpButton1Div = document.querySelector(".destination");

// ADDED CONSOLE LOG FOR WHEN FUN IN THE SUNS DIV IS CLICKED 
signUpButton1Div.addEventListener("click", (e) => {
  console.log("div-clicked");
})


// STOPPING THE BUBBLING OF DIV CLICKED CONSOLE LOG
signUpButton1.addEventListener('click', (e) => {
  console.log("signup 1 clicked");
  e.stopPropagation();
})




const body = document.querySelector('body');
const header = document.querySelector('header');

// PRESS A KEYBOARD KEY AND THE HEADER WILL DISAPPEAR FROM VISION;
body.addEventListener("keydown", () => header.style.opacity = "0");

const navContainer = document.querySelector(".nav-container");

// MOUSEENTER THE NAVIGATION TO RETURN ITS OPACITY TO 1 TO NEGATE THE ABOVE KEYPRESS OPACITY CHANGE
navContainer.addEventListener("mouseenter", () => header.style.opacity = "1");

// ADDS AN ALERT WHEN THE USER FIRST SCROLLS WITH THE MOUSE WHEEL BUT THEM REMOVES THAT EVENT SO THEY CAN ACTUALLY NAVIGATE THE SITE
body.addEventListener('wheel', function alertMeOnce(){
  alert("WEEEEEEEEEEEE!!!!!!");
  body.removeEventListener('wheel', alertMeOnce);
});

const funBusBanner = document.querySelector(".intro > img" );

// DRAG THE FUN-BUS INTRO IMAGE TO SCALE IT 150% IN SIZE
funBusBanner.addEventListener('drag', (e) => e.target.style.transform = 'scale(1.5)');


// ON DOCUMENT LOAD AN ALERT WILL APEAR TELLING THE USER THE 9 OTHER THINGS THEY CAN DO WITH THE SITE
window.addEventListener("load", function(event) {
  alert("All resources finished loading! Ready for some Fun?!?!?! Try scrolling the page, try hovering over the nav logo heading, try dblclicking the nav links, try dragging the funbus banner image, try pressing a key on your keyboard...but wait...where did the navbar go?!?!?...thats ok, just hover over anywhere inside it to bring it back! Focus the name field in the form to see its background color change and leave its focus, aka blur event, to remove the background color. Try resizing the window and see what happens. Click on the Fun In The Sun Packages div and look in the console to see that you clicked it...do the same with the Sign Me Up button inside that div and notice it console logs its own message without console logging that the div was clicked...thats the power of the stopPropagation method...and thats all folks!!!");
});

const sunPackage = document.querySelector("#sun");
const mountainPackage = document.querySelector("#mountain");
const islandPackage = document.querySelector("#island");
const radios = document.querySelector('fieldset');
// radios.addEventListener('select', radios.style.backgroundColor = "red");

radios.addEventListener("select", (e) => {e.target.style.backgroundColor = 'red'}, false);

const nameInput = document.querySelector("#nameForm");
const emailForm = document.querySelector("#emailForm");
const phoneForm = document.querySelector("phoneForm");
const specialInstructionsForm = document.querySelector("#specialForm");


// ADDS A BACKGROUND COLOR THE THE NAME INPUT WHEN IT IS FOCUSED
nameInput.addEventListener("focus", (e) => {
  nameInput.style.backgroundColor = "orangered"});
// REMOVES THE BACKGROUND COLOR ON THE NAME INPUT WHEN FOCUS IS LEFT...I.E. ON BLUR EVENT
nameInput.addEventListener('blur', (e) => {
  nameInput.style.backgroundColor = "inherit"});

// ALERTS OUCH WHENEVER THE WINDOW IS RESIZED
  window.addEventListener('resize', () => alert("OUCHHHH!!!!"))