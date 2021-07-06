/* [ ] Using your [index.js file](js/index.js), create [event listeners]
(https://developer.mozilla.org/en-US/docs/Web/Events) of at least 
10 _different_ types. You must Use your creativity to make the Fun Bus site 
more interactive. For example you could change colors, animate objects,
 remove objects, etc. Here are some event types you could try to use:
  * `mouseover`
  * `keydown`
  * `wheel`
  * `load`
  * `focus`
  * `resize`
  * `scroll`
  * `select`
  * `dblclick`
  * `drag / drop`

Note: Drag and drop is a bit more advanced than the others: 
it's not actually a single type of event but several
 types that need to work together. */


//---1. Load event ---//
//Event loads an alert reminding the visitor to sign up for a newsletter
//Window event listener calls alert and displays this text
window.addEventListener("load", () => { alert("Thanks for dropping in. \nPlease sign up for our newsletter!"); });


//---2. Mouse Enter Event ---//
//Event to change the text color of top bar when mouse enter occurs
//I have coded the mouse enter and mouse leave events to emulate a mouseover effect
const mouseEnterHeader = document.querySelector(".main-navigation");
//
mouseEnterHeader.addEventListener("mouseenter", () => { mouseEnterHeader.style.backgroundColor = "blue"; });

//---3. Mouse Leave Event---//
//This event detects when the mouse pointer leaves the header and turns the background white again
//I have coded the mouse enter and mouse leave events to emulate a mouseover effect
const mouseLeaveHeader = document.querySelector(".main-navigation");
//
mouseLeaveHeader.addEventListener("mouseleave", () => { mouseLeaveHeader.style.backgroundColor = "white"; });


//---4. keydown event--- Make this a switch case, do without arrow too //
//Event listener to display an alert when a key 
document.querySelector("body").addEventListener("keydown", (e) => { if (e.keyCode == "32")  {  alert("Space Bar!"); } });

//---5. dblclick event---//
//Event listener to display an alert when the bus image is doubleclicked
const changeImage = document.querySelector(".intro img");
//
changeImage.addEventListener("dblclick", () =>  {alert("Let's take a ride on the Fun Bus!!");})


//---6. button click event---//
//Event listener to display a message if the beach vacation button is clicked
//
const beachButtonClick = document.querySelector("section.content-pick > div:nth-child(1) > div");
//
beachButtonClick.addEventListener("click", () => { alert("Pack your sunscreen and swimsuit!");});

//---7. Wheel Event ---//
//
const bodyWheel = document.querySelector("body");
//
bodyWheel.addEventListener("wheel", () => { bodyWheel.style.backgroundColor = "orange"; });

//---8. scroll event---//
//Event listener to display a visitor scrolls the page
//
const bodyScroll = document.querySelector("html");
//
bodyScroll.addEventListener("scroll", () => { bodyScroll.style.backgroundColor = "blue"; });

//---9. Mouse Down event---//
//Event listener to display an alert when the visitor clicks on
const mouseDownEvent =  document.querySelector(".img-content img");
//
mouseDownEvent.addEventListener("mousedown", () => 
{
  alert("Are you ready for a vacation?");
});

//---10. Focus event---//
 //Event listener to display an alert when a key 
 document.querySelector("body").addEventListener("keydown", (e) => 
 {
    if (e.keyCode == "32") alert("Space Bar!");
  });


/* [ ] Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.
 * [ ] Stop the navigation items from refreshing the page by using `preventDefault()`*/