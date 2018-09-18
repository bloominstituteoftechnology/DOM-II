// Your code goes here

const logoHeading = document.querySelector(".logo-heading")
const navBar = document.querySelector(".nav");
const yellowBus = document.querySelector(".yellow-bus");
const mapImg = document.querySelector(".map-img");
const headerIntro = document.querySelector(".home");
const navContainer = document.querySelector(".nav-container");
const allImg = document.getElementsByTagName("img");
const allBtn = document.querySelectorAll(".btn");

// Change font color to orange when moused over
logoHeading.addEventListener("mouseover", () => {
    logoHeading.style.color = "orange";
})

// Change font color to black when moused out
logoHeading.addEventListener("mouseout", () => {
    logoHeading.style.color = "black";
})



// Turn nav tags blue when clicked
navBar.addEventListener("click", () => {
    event.preventDefault(); // stops nav a tags to refresh the page
    event.target.style.color = "blue";
});

// Turn nav tags to black when double clicked
navBar.addEventListener("dblclick", () => {
    event.target.style.color = "black";
});

// Change opacity to .5 when dragged
yellowBus.addEventListener("dragstart", function( event ) {
  
    event.target.style.opacity = .5;
}, false);
// Reset opacity
yellowBus.addEventListener("dragend", function( event ) {
    
    event.target.style.opacity = "";
}, false);

// When clicking or holding mouse down move text to right and change opacity
headerIntro.addEventListener("mousedown", () => {
    TweenMax.to(".h2-titles", 2, { x:100, opacity: 0});
});
// Reset it back to original
headerIntro.addEventListener("mouseup", () => {
    TweenMax.to(".h2-titles", 2, { x:0, opacity: 1});
});

// change nav bar to gray when mouse is scrolled
navContainer.addEventListener("wheel", () =>{
    event.target.style.backgroundColor = "gray";
    
})

// change border radius of all img when dragged
for (let i = 0; i < allImg.length; i++) {
    allImg[i].addEventListener("drag", () => {
        allImg[i].style.borderRadius = "100px";
    })
}



for (let i = 0; i < allBtn.length; i++) {
    
    allBtn[i].addEventListener("click", () => {
        allBtn[i].style.backgroundColor = "blue";
    })

}

// stop text from turning black
for (let i = 0; i < allBtn.length; i++) {
    event.stopPropagation();
    allBtn[i].addEventListener("click", () =>{
        allBtn[i].style.color = "black";
    })
}