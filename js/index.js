const logoHeading = document.querySelector(".logo-heading");
const introImg = document.querySelector("header img");
const buttons = document.querySelectorAll(".btn");
const contentPick = document.querySelector(".content-pick");
const allImgs = document.querySelectorAll("img");
const allPs = document.querySelectorAll("p");
const container = document.querySelectorAll(".container");
const navLinks = document.querySelectorAll(".nav-link");
const textContentDiv = document.querySelectorAll(".text-content");


// window: "delayed" load of content + fade-in

window.addEventListener("load", function(e) {
    setTimeout(() => {
        container.forEach((selection) => {
            // selection.style.opacity = "1";
            TweenMax.to(selection, 1, {
                opacity: 1
            })
        })
    }, 500)
    
  });


// Header Img: Flip 180deg when user scrolls

window.addEventListener("scroll", function(e){
    console.log("The scroll works");
    logoHeading.style.transform= "rotate(180deg)";
})


// Header Img: Appear when nav heading is moused over with a delay

logoHeading.addEventListener("mouseover", function() {
    setTimeout(() => {
        // introImg.style.display = "initial";
        TweenMax.to("header img", 1, {
            opacity: 1
        })
    }, 200);
    
});


// Buttons: Scale up on mouseenter, return to normal on mouseout

buttons.forEach((btn) => {
    btn.addEventListener("mouseenter", function(e) {
        e.target.style.transform = "scale(1.2,1.2)";
        e.target.textContent = "Click for adventure";
    })
    btn.addEventListener("mouseout", function(e) {
        e.target.style.transform = "scale(1,1)";
        e.target.textContent = "Sign Me Up!";
    })
});


// Buttons: Create and show new p tag below when clicked

buttons.forEach((btn) => {
    btn.addEventListener("click", function(e) {
        contentPick.style.flexWrap = "wrap";

        const newH1 = document.createElement("h1");
        newH1.textContent = "You picked a great option!";
        newH1.style.padding = "30px 0";
        newH1.style.margin = "0 auto";
        newH1.style.textAlign = "center";
        contentPick.appendChild(newH1);
    })
});


// Images: skew -15deg when double clicked

allImgs.forEach((img) => {
    img.addEventListener("dblclick", function(e) {
        e.target.style.transform = "skewX(-15deg)";
    })
});


// Images: When dragged, images "disappear"

allImgs.forEach((img) => {
    img.addEventListener("drag", function(e) {
        e.target.style.opacity = "0";
    })
})


// .text-content divs: change colors on mousedown, return to normal on mouseup

textContentDiv.forEach((div) => {
    div.addEventListener("mousedown", function(e) {
        e.target.style.backgroundColor = "gold";
        e.target.style.color = "brown";
    })
    div.addEventListener("mouseup", function(e){
        e.target.style.backgroundColor = "transparent";
        e.target.style.color = "black";
    })
})


// Ps: change colors on mousedown, return to normal on mouseup (and stopPropagation to retain different events)

allPs.forEach((p) => {
    p.addEventListener("mousedown", function(e) {
        e.stopPropagation();
        e.target.style.backgroundColor = "lightsteelblue";
        e.target.style.color = "gold";
    })
    p.addEventListener("mouseup", function(e){
        e.target.style.backgroundColor = "transparent";
        e.target.style.color = "black";
    })
})


// Nav Links: Prevent default behavior

navLinks.forEach((link) => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
    })
});

