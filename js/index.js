/**
 * Tom Bielawski
 * Lambda School WEB45
 * 2.1.2 DOM II
 * 7/6/2021
 **/

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
window.addEventListener("load", () => { alert("Thanks for dropping in. \nPlease sign up for our newsletter while you're here!"); });


//---2. mouseenter event ---//
//Event to change the text color of top bar when mouse enter occurs
//Query selector calls .main-navigation, assigns it to mouseEnterHeader
const mouseEnterHeader = document.querySelector(".main-navigation");
//Event listener added to mouseEnterHeader, changes header background to blue
mouseEnterHeader.addEventListener("mouseenter", () => { mouseEnterHeader.style.backgroundColor = "blue"; });

//---3. mouseleave event---//
//This event detects when the mouse pointer leaves the header and turns the background white again
//Query selector calls .main-navigation, assigns it to mouseLeaveHeader
const mouseLeaveHeader = document.querySelector(".main-navigation");
//Event listener added to mouseLeaveHeader, changes header background to white
mouseLeaveHeader.addEventListener("mouseleave", () => { mouseLeaveHeader.style.backgroundColor = "white"; });

//---4. keydown event--- //
//Event listener to display an alert when the space bar is pressed.
//Query selector calls body, assigns to keydownEvent
const keydownEvent = document.querySelector("body");
//Event listener added to keydownEvent. If space bar is pressed, display this alert. 
keydownEvent.addEventListener("keydown", (e) => { if (e.keyCode == "32")  {  alert("Space Bar!"); } });

//---5. dblclick event---//
//Event listener to display an alert when the bus image is double-clicked
//Query selector calls .intro img, assigns it to doubleClickImage
const doubleClickImage = document.querySelector(".intro img");
//Event listener added to doubleClickImage, displays this alert when picture is double clicked
doubleClickImage.addEventListener("dblclick", () =>  {alert("Let's take a ride on the Fun Bus!!");})

//---6. button click event---//
//Event listener to display a message if the beach vacation button is clicked
//Query selector calls the img at this location, assigns to beachButtonClick
const beachButtonClick = document.querySelector("section.content-pick > div:nth-child(1) > div");
//Event listener added to beachButtonClick, displays this alert when the picture is clicked
beachButtonClick.addEventListener("click", () => { alert("Pack your sunscreen and swimsuit!");});

//---7. wheel event ---//
//Event listener to change the background color on mouse wheel use
//Query selector calls body, assigns to bodyWheel
const bodyWheel = document.querySelector("body");
//Event listener added to bodyWheel, body background changes to orange when wheel is used
bodyWheel.addEventListener("wheel", () => { bodyWheel.style.backgroundColor = "orange"; });

//---8. scroll event---//
//Event listener to display a visitor scrolls the page
//>>>This event is commented out because it overtakes the other events. Uncomment to view effect.
//window.addEventListener("scroll", () => { alert("Yo! Slow your scroll! ")});

//---9. mousedown event---//
//Event listener to display an alert when the visitor clicks a mouse button over the "lets go" image
//Query selector calls the image content, assigns to mouseDownEvent
const mouseDownEvent =  document.querySelector(".img-content img");
//Event listener added to mouseDownEvent, displays this alert message
mouseDownEvent.addEventListener("mousedown", () => { alert("Are you ready for a vacation?"); });

//---10. Mouse Up event--//
//Event listener to display an alert when the visitor releases the mouse button over the "lets go" image, then changes image
//Query selector calls the image content, assigns to mouseUpEvent
const mouseUpEvent =  document.querySelector(".img-content img");
//Event listener added to mouseDownEvent
mouseUpEvent.addEventListener("mousedown", () => 
{
  //mouseUpEvent changes the image
  mouseUpEvent.src = "https://images.unsplash.com/photo-1596583164564-5d6e7a9e0c68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80";
  //mouseUpEvent displays this alert message
  alert("Congratulations; you've earned it!!! ");
});

/* [ ] Nest two similar events somewhere in the site and prevent the event propagation properly. 
Remember not all event types bubble. */

//---Nested mouse enter/leave event ---//
//Event to change the text color of footer when mouse enter occurs
//Query selector calls footer, assigns it to mouseEnterFooter
const mouseEnterFooter = document.querySelector("footer");
//Event listener added to mouseEnterFooter
mouseEnterFooter.addEventListener("mouseenter", () => 
{ 
  //Changes footer background to yellow
  mouseEnterFooter.style.backgroundColor = "yellow"; 
  //Query selector calls footer, assigns it to mouseLeaveFooter
  const mouseLeaveFooter = document.querySelector("footer");
  //Event listener added to mouseLeaveFooter, changes header background to white
  mouseLeaveFooter.addEventListener("mouseleave", () => { mouseLeaveFooter.style.backgroundColor = "white"; });

});


/* [ ] Stop the navigation items from refreshing the page by using `preventDefault()`*/

//Query selector calls .nav-link, assign to preventIt
const preventIt = document.querySelector(".nav-link");  
//Event listener added to preventIt, calls preventDefault() function
preventIt.addEventListener("click", (e) => e.preventDefault());

