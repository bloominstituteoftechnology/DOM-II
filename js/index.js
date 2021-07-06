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

 //---Mouse Over Event---//
 //Event to change the text color of top bar when mouse over occurs
//  const mouseOver = document.querySelector("main-navigation");

//  for (let i = 0; i < mouseOver.length i++)
//  mouseOver.addEventListener("mouseOver", function (event) 
//  {event.target.style.fontColor = "blue";})

 //---keydown event---//
 //Event listener to display an alert when a key 
 document.querySelector("body").addEventListener("keydown", (e) => 
 {
    if (e.keyCode == "32") alert("Space Bar!");
  });
