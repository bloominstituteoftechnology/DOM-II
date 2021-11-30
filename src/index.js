import './less/index.less'

// Your code goes here!
const links = document.querySelectorAll("a");
const title = document.querySelector('.logo-heading')
const body = document.querySelector('body')
const img = document.querySelector('img')
//Trigger 1: Mouse Over
links.forEach(link => {
    link.addEventListener("mouseover", function(event) {
    event.target.style.color = "orange";
    setTimeout(function() {
        event.target.style.color = "";
        }, 500);
    }, false);
})

//Trigger 2: Click
links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.target.style.color = "red";
            setTimeout(function() {
                event.target.style.color = "";
            }, 500);
        }, false);
    })

//Trigger 3: Mouse Enter
title.addEventListener("mouseenter", function(event) {
        event.target.textContent = 'Bun Fus';
    });

//Trigger 4: Mouse Leave
title.addEventListener("mouseleave", function(event) {
        event.target.textContent = 'Fun Bus';
    });

//Trigger 5: KeyDown  
function sixKeyDown(event) {
    if (event.key === "6") {
        body.style.backgroundColor = 'black';
    } else {
    body.style.backgroundColor = 'white';
    }
}
document.addEventListener("keydown", sixKeyDown);

//Trigger 6: KeyUp
function sixKeyUp(event) {
        if (event.key === "6") {
            body.style.backgroundColor = 'white';
        } else {
        body.style.backgroundColor = 'white';
        }
    }
document.addEventListener("keyup", sixKeyUp);

//Trigger 7:  

//Trigger 8:  

//Trigger 9:  

//Trigger 10:
