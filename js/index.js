// Your code goes here

// all selectors for elements
let navLinks = document.querySelectorAll(".nav-link");
// let navLinks = document.getElementsByClassName("nav-link");








// event listeners

// navLinks.addEventListener("mouseover", function(event){
//     console.log(event.target);
// });

navLinks.forEach(function(link){
    link.addEventListener("mouseover", function(event){
        event.target.style.color = "gray";
    })

    link.addEventListener("mouseout", function(event){
        event.target.style.color = "black";
    })
});