import './less/index.less'

// Your code goes here!
const links = document.querySelectorAll("a");
const title = document.querySelector('.logo-heading')
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

    