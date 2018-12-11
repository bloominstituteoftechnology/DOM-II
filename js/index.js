
//mouseover

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

//keydown

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

//wheel

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
    
//drag/drop

const dragDrop = document.querySelectorAll('.nav a');
    dragDrop.addEventListener("dragstart", (event) => {
        event.console.log("You dragged");
    });

//load

//focus

//resize

//scroll

//select

//dblclick

