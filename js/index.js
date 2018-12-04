// Your code goes here
let nav = document.querySelectorAll("nav a");

for (let i = 0; i < nav.length; i++){
    nav[i].addEventListener("mouseover", function( event ) {   
        event.target.classList.add("jello-horizontal")
        setTimeout(function() {
        event.target.classList.remove("jello-horizontal")
        }, 1500);
    }, false);
}

// prevent default click on nav
for (let i = 0; i < nav.length; i++){
    nav[i].addEventListener("click", function( event ) {   
        event.preventDefault();
        event.target.style.color = "green";
    }, false);
}

let logo = document.querySelector("h1");
logo.addEventListener("mouseover", function( event ) {   
    event.target.classList.add("wobble-hor-bottom")
    setTimeout(function() {
    event.target.classList.remove("wobble-hor-bottom")
    }, 1500);
}, false);

let body = document.querySelector("body")
body.addEventListener("keydown", function( event ) {   
    event.target.classList.add("pyro")
    setTimeout(function() {
    event.target.classList.remove("pyro")
    }, 4000);
}, false);

let firstimg = document.querySelector("img")

let anim = TweenMax.to(firstimg, 1, {
    x:0,
    opacity:1,
    rotation: 360,
    paused: true,
})

firstimg.addEventListener("dblclick", function( event ) {   
    anim.play()
    anim.restart()
}, false);

let content = document.querySelector(".content-section")

let yoyo = TweenMax.to(".content-section", 1, {
    x: 200,
    opacity:1,
    paused: true,
    yoyo: true,
    repeat: 1,
})

content.addEventListener("wheel", function( event ) {   
    yoyo.play()
    yoyo.restart()
}, false);

let contentp = document.querySelector(".content-section p")

let nestedyoyo = TweenMax.to(".content-section p", 1, {
    x: 200,
    opacity:1,
    paused: true,
    yoyo: true,
    repeat: 1,
})

//stops propagation so you can wheel the inner paragraph tags without the outside, or separately

contentp.addEventListener("wheel", function( event ) {   
    event.stopPropagation();
    nestedyoyo.play();
    nestedyoyo.restart();
}, false);

let condest = document.querySelector(".content-destination img")

condest.addEventListener("load", function( event ) {   
    event.target.classList.add("wobble-hor-bottom")
    setTimeout(function() {
    event.target.classList.remove("wobble-hor-bottom")
    }, 1500);
}, false);

let dest = document.querySelectorAll(".destination h4")

for (let i = 0; i < dest.length; i++){
    dest[i].addEventListener("click", function( event ) {   
        event.target.classList.add("wobble-hor-bottom")
        setTimeout(function() {
        event.target.classList.remove("wobble-hor-bottom")
        }, 1500);
    }, false);
}

let hey = document.querySelectorAll(".destination p")
for (let i = 0; i < hey.length; i++){
    hey[i].addEventListener("mouseenter", function( event ) {   
        event.target.classList.add("jello-horizontal")
        setTimeout(function() {
        event.target.classList.remove("jello-horizontal")
        }, 1500);
    }, false);
}


let buttons = document.querySelectorAll(".destination .btn")



for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("mouseenter", function( event ) {   
        let banim = TweenMax.to(buttons[i], 1, {
            rotation: 180,
            opacity:1,
            paused: true,
            yoyo: true,
            repeat: 1,
        })
        banim.play()
        banim.restart()
    }, false);
}