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


//Logo scale
const logo = document.querySelector(".logo-heading");

logo.addEventListener("mouseenter", (event) => {
    logo.style.transform = "scale(1.5)";
    logo.style.transition = "all 0.3s";
})

logo.addEventListener("mouseleave", (event) => {
    logo.style.transform = "scale(1.0)";
    logo.style.transition = "all 0.3s";
})



//Main Bus Img change
const busImg = document.getElementsByTagName("img")[0];
busImg.setAttribute("id", "header-img");
busImg.addEventListener("mouseenter", (event) => {
    busImg.setAttribute("src", "img/beach-sunset.jpg");
});
busImg.addEventListener("mouseleave", (event) => {
    busImg.setAttribute("src", "img/fun-bus.jpg");
});


//Text Copy Event
const paragraph = document.querySelector('p');

paragraph.addEventListener("copy", (event) => {
    paragraph.style.backgroundColor = "#e7c9f2";
    paragraph.style.transition = "all 0.5s";
});


//Text Cut Event
paragraph.addEventListener("cut", (event) => {
    paragraph.style.border = "dashed 1px gray";
    paragraph.style.transition = "all 0.5s";
});


//Key Press Event
const wholePage = document.querySelector("html");

wholePage.addEventListener("keypress", (event) => {
    wholePage.style.backgroundColor = "red";
})


//Key Up Event
wholePage.addEventListener("keyup", (event) => {
    wholePage.style.backgroundColor = "white";
})


//Wheel Event Image of Map
const mapImg = document.querySelector(".img-content img");

mapImg.addEventListener("wheel", (event) => {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    mapImg.style.transform = "scale(${scale})";
    let scale = 1; 
});

//Drag / Drag End Event

wholePage.addEventListener("drag", (event) => {
    wholePage.style.opacity = "0.2";
})

wholePage.addEventListener("dragend", (event) => {
    wholePage.style.opacity = "1.0";
})

//Load Event

window.addEventListener("load", (event) => {
    console.log("Congrats! The Page Has Loaded!")
})

//Offline Event / Online Event

window.addEventListener('offline', (event) => {
    console.log("OH NO! THE WIFI IS DOWN!");
});

window.addEventListener('online', (event) => {
    console.log("Oh wait. Nevermind the Wifi is good. :)");
});