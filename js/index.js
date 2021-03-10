// Your code goes here

// all selectors for elements
let nav = document.querySelector("nav");
let navLinks = document.querySelectorAll(".nav-link");
// let navLinks = document.getElementsByClassName("nav-link");

let images = document.querySelectorAll("img");






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

    link.addEventListener("dblclick", function(event){
        console.log(event);
    })
});

document.addEventListener("keydown", function(event){
    if(event.code === "Escape"){
        console.log(event);
    }
});

images.forEach(function(img){
    img.addEventListener("wheel", function(event){
        console.log(event.target);
    })
});

// why does window work but not document???
window.addEventListener('load', (event) => {
    console.log('page is loaded');
    console.log(nav);
});

nav.addEventListener('focus', function(event){
    console.log(event);
})

