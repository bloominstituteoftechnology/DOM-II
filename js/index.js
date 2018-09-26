// Your code goes here

//Change Fun Bus Title - Mouseover

const funBusTitle = document.querySelector('.logo-heading');
funBusTitle.addEventListener(
    "mouseover",
        event => {
            event.target.style.color = "red";
        setTimeout(function() {
            event.target.style.color = "";
        }, 500);
    },
    false
    );
    

// Change background red - Keydown

const backgroundRed = document.querySelector('html');
backgroundRed.addEventListener(
    "keydown",
        event => {
            event.target.style.background = "red";
        setTimeout(function() {
            event.target.style.background = "";
        }, 500);
    },
    false
    );

// Change background green - Wheel

const backgroundGreen = document.querySelector('html');
backgroundGreen.addEventListener(
    "wheel",
        event => {
            event.target.style.background = "green";
        setTimeout(function() {
            event.target.style.background = "";
        }, 500);
    },
    false
    );

const dragDrop = document.querySelectorAll('.nav a');
    dragDrop.addEventListener("dragstart", (event) => {
        event.console.log("You dragged");
    });
// Element.addEventListener('drag / drop', callback);

// Element.addEventListener('load', callback);

// Element.addEventListener('focus', callback);

// Element.addEventListener('resize', callback);

// Element.addEventListener('scroll', callback);

// Element.addEventListener('select', callback);

// Element.addEventListener('dblclick', callback);