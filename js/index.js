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

//4 - Welcome to the Fun Bus! header

//5 - Let's Go! header

//6 - Map Photo

//7 - Venice photo

//8 - Pick Your Destination

//9 - Thai Boat Photo

//10 - Sign Me Up! link
