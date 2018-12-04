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
mainNav.addEventListener("click", function(e) {
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