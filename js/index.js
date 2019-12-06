// Using your index.js file, create 10 unique event listeners. using your creativity to make the Fun Bus site more interactive. Here are some unique events you could try to use:
//  mouseover
//  keydown
//  wheel
//  drag / drop
//  load
//  focus
//  resize
//  scroll
//  select
//  dblclick
// Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

//  Nest two similar events somewhere in the site and prevent the event propagation properly
//  Stop the navigation items from refreshing the page by using preventDefault()


const busImg = document.getElementsByTagName("img")[0]
busImg.setAttribute("id", "header-img");
busImg.addEventListener("mouseenter", (event) => {
    busImg.setAttribute("src", "img/beach-sunset.jpg")
})
busImg.addEventListener("mouseleave", (event) => {
    busImg.setAttribute("src", "img/fun-bus.jpg")
})

