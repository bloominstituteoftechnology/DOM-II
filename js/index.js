// Your code goes here

//Stop the navigation from items from refreshing the page by using `preventDefault()`
const aTags = document.querySelectorAll('a')
for (i=0; i<aTags.length; i++) {
    aTags[i].addEventListener("click", function(e) {
        e.preventDefault()
    })
}

//make nav bar turn yellow 
const mainNav = document.querySelector(".nav-container")
mainNav.addEventListener("dblclick", function(e) {
    mainNav.style.backgroundColor = "yellow";
})

//make logo turn red with mouseover 
const logo = document.querySelector(".logo-heading")
logo.addEventListener("mouseover", function(e) {
    logo.style.color = "red";
})

//increase logo size by clicking
logo.addEventListener("click", function(e) {
    e.stopPropagation()
    logo.style.fontSize = "10rem"
})

//when resizing, fun bus img has border radius change
const funBusImg = document.querySelector(".intro img")
window.addEventListener("resize", function(e) {
    funBusImg.style.borderRadius = "50%";
})

//bus animation
const busIcon = document.querySelector(".bus-icon")
window.addEventListener("keydown", function(e) {
    TweenMax.to(busIcon, 5, {
        marginLeft:"100%",
        ease: Power4.easeOut
    });
})

//add spin animation to bottom image
const destinationImg = document.querySelector(".content-destination img")
window.addEventListener("scroll", function(e) {
    TweenMax.to(destinationImg, 3, {
        rotationY: 360
    });
});

//change text when copying text 
const introHeading = document.querySelector(".intro h2")
introHeading.addEventListener("copy", function(e) {
    introHeading.innerText = "Don't copy me!"
})

//
const allButtons = document.querySelectorAll(".btn") 
allButtons[0].addEventListener("mousedown", function(e) {
    TweenMax.to(allButtons[0], 2, {
        marginBottom: 50
    });
})

allButtons[1].addEventListener("mouseup", function(e) {
    TweenMax.to(allButtons[0], 2, {
        marginBottom: -50
    });
})