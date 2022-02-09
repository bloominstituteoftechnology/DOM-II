import './less/index.less'

// Your code goes here!

//!------------------------ MOUSE OVER EVENT --------------------!
//mouse over nav bar and change the color of text when moused over

let navHover = document.querySelectorAll(".nav-link");

navHover.addEventListener("mouseover", function(event) {
    //highlight the text/change font color
    event.target.style.color = "pink";

    //reset color after timeout
    setTimeout( function () {
        event.target.style.color = "";
    }, 500);
}, false);


//!------------------------ KEY DOWN EVENT -----------------------!

//!------------------------ WHEEL EVENT ----------------------------!

//!------------------------ LOAD EVENT -----------------------------!

//!------------------------ FOCUS EVENT ----------------------------!

//!------------------------ RESIZE EVENT ----------------------------!

//!------------------------ SCROLL EVENT ----------------------------!

//!------------------------ SELECT EVENT ----------------------------!

//!------------------------ DOUBLE CLICK EVENT --------------------!

//!------------------------ DRAG/DROP EVENT -----------------------!