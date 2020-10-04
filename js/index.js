// Ten different types of event listeners. Examples: mouseover, keydown, wheel, load, focus, resize, scroll, select, dblclick, drag / drop.
//More on: https://www.w3schools.com/jsref/dom_obj_event.asp
// Then, nest two similar events somewhere in the site and prevent the event propagation properly. ((not all events bubble!))
// Stop navigation items from refreshing the page by using preventDefault().

//1 - Fun Bus Header
//Turns green when the mouse hovers over the header and stays green until page refresehs.
document.querySelector(".logo-heading").addEventListener("mouseover", (e) => {
  e.target.style.color = "#507450";
});

//2 - Wheel event on whole HTML body. In the console.
document.addEventListener("wheel", (e) => {
  console.log(`🎶 the wheels on the bus go up and down...`);
});

//3 - First Image - double click gives the
document.querySelector(".home img").addEventListener("dblclick", (e) => {
  e.target.style.border = "solid 5px #3E443E";
});

//4 - keypress listener to give the user an alert -
document.addEventListener("keypress", (e) => {
  window.alert("We cannot accept input at this time. 🚍");
});

//5 - mouseenter to map photo to start a transition to zooming in.
const mapPhoto = document.querySelector("#mapPhoto");

mapPhoto.addEventListener("mouseenter", (e) => {
  e.target.style =
    "border: solid 3px #000000; transition: easein 1s; transform: scale(1.2);";
});

//6 - mouseleave to map photo to return photo back to normal.
mapPhoto.addEventListener("mouseleave", (e) => {
  e.target.style = "transform: scale(1); border: none;";
});

//7 - Venice photo

//8 - Pick Your Destination

//9 - Thai Boat Photo

//10 - Sign Me Up! link
