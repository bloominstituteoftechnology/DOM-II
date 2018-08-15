// Your code goes here

// Anchors
const navAnchors = document.querySelectorAll("nav a");
for(i = 0; i < navAnchors.length; i++) {
    let currentAnchor = navAnchors[i];
    currentAnchor.addEventListener('mouseenter', e => {
     TweenMax.to(currentAnchor, .25, {y:-10, color: "#FFD74C"});
    });
    currentAnchor.addEventListener('mouseout', e => {
     TweenMax.to(currentAnchor, .25, {y:0, color: "black"});
    });

    currentAnchor.addEventListener("click", e => {
        e.preventDefault();
});
}

// Logo
const logoHeading = document.querySelector(".logo-heading");

logoHeading.addEventListener("dblclick", e => {
    TweenMax.fromTo(logoHeading, .1, {x:0}, {x:15, repeat: 5, yoyo: true, ease:Sine.easeInOut});
});

window.addEventListener("load", e => { 
    for(i = 0; i < navAnchors.length; i++) {
    TweenMax.fromTo(navAnchors[i], .25, {y:0, color: "black"}, {y:-10, color: "#FFD74C", repeat: 1, yoyo: true, ease:Sine.easeInOut, delay: [i*.1]});
    }
});

// Nav Bar Shrink
const navBar = document.querySelector("header")
window.addEventListener("scroll", e => {
if (Math.round(window.scrollY) < 90) {
    TweenMax.to(navBar, .25, {height: "90px"});
} else {
    TweenMax.to(navBar, .25, {height: "60px"});
}
});


// Debug Window
const debugWindow = document.querySelector(".debugwindow");
window.addEventListener("resize", e => { 
    console.log("things");
    debugWindow.innerText = `Window Height: ${window.innerHeight}, Window Width: ${window.innerWidth}`;
});

// Modal
const travelButtons = document.querySelectorAll(".destination .btn");
const modal = document.querySelector('#myModal');

for(i = 0; i < travelButtons.length; i++) {
    let currentButton = travelButtons[i];
    currentButton.addEventListener("click", e => {
        TweenMax.to(modal, .25, {opacity: 1} );
        modal.style.display = "flex";
    });

    window.addEventListener("click", e => {
        e.stopPropagation();
        if (e.target == modal) {
            TweenMax.to(modal, .25, {opacity: 0, onComplete: () => {modal.style.display = "none"}});
        }
    });
    
}

// Bus Image
const busImage = document.querySelector(".home .content-section img");
busImage.addEventListener("wheel", e => {
    TweenMax.fromTo(busImage, 1, {opacity: 1}, {opacity: .5, repeat: 1, yoyo: true, ease:Sine.easeInOut});
});

// Home Input Bounce
 const homeInputs = document.querySelectorAll(".findoutmore input");
 for (i = 0; i < homeInputs.length; i++){
     let currentInput = homeInputs[i];
     currentInput.addEventListener("change", e => {
         TweenMax.fromTo(currentInput, .1, {y:0}, {y:5, repeat: 1, yoyo: true, ease:Sine.easeInOut});
         currentInput.value="";
         alert("INVALID ENTRY!");
     },false);
 }

 // Clear Textarea on Focus
 const formTArea = document.querySelector("textarea");
    formTArea.addEventListener("focus", e => {
    formTArea.value="";
 });
 