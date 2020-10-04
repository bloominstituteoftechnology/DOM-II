// Ten different types of event listeners. Examples: mouseover, keydown, wheel, load, focus, resize, scroll, select, dblclick, drag / drop.
//More on: https://www.w3schools.com/jsref/dom_obj_event.asp
// Then, nest two similar events somewhere in the site and prevent the event propagation properly. ((not all events bubble!))
// Stop navigation items from refreshing the page by using preventDefault().

//1 - Fun Bus Header
//Turns green when the mouse hovers over the header and stays green until page refresehs.
document
  .querySelector(".logo-heading")
  .addEventListener("mouseover", (event) => {
    event.target.style.color = "#507450";
  });

//2 - Navigation
document.querySelectorAll("nav").addEventListener();

//3 - First Image

//4 - Welcome to the Fun Bus! header

//5 - Let's Go! header

//6 - Map Photo

//7 - Venice photo

//8 - Pick Your Destination

//9 - Thai Boat Photo

//10 - Sign Me Up! link
