// Your code goes here

//Stop the navigation from items from refreshing the page by using `preventDefault()`
const aTags = document.querySelectorAll('a')
for (i=0; i<aTags.length; i++) {
    aTags[0].addEventListener("click", function(e) {
        e.preventDefault()
    })
}

//make logo turn red with mouseover 
const logo = document.querySelector(".logo-heading")
logo.addEventListener("mouseover", function(e) {
    logo.style.color = "red";
})

//
// logo.style.fontSize = logoSize
logo.addEventListener("click", function(e) {
     logo.style.fontSize = "10rem"
})