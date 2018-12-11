
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

//drag/drop

//load

//focus

//resize

//scroll

//select

//dblclick

