// Your code goes here
header = document.querySelector(".main-navigation");

// Get me all of the anchor tags in the navigation
header.a = document.querySelectorAll("a");

// Finish getting our selectors
mainContainer = document.querySelector(".home")
mainContainer.img = mainContainer.querySelectorAll("img");
mainContainer.p = mainContainer.querySelectorAll("p");
mainContainer.h2 = mainContainer.querySelectorAll("h2");

logo = document.querySelector(".logo-heading");
logo.style.color= "Blue";
footer = document.querySelector("footer");

// Grab the body for coloring fun
body = document.querySelector("body");

bodyBgRedValue = 255;
bodyBgGreenValue = 255;
bodyBgBlueValue = 255;
body.style.backgroundColor = `rgba(${bodyBgRedValue},${bodyBgGreenValue},${bodyBgBlueValue}, 1)`;


/* GSAP */

TweenMax.from(logo, 1, {x:450, rotation:360});
TweenMax.from(header, 1, {x:800, rotation:360, width:50, height:5});
TweenMax.from(header.a, 5, {rotation:180, scale:0.5})

/* End GSAP */

/* Event Listeners */
header.addEventListener("mouseover", headerMouseOver); 

body.addEventListener("keydown", keyPressed);

window.addEventListener("scroll", scrolled);

mainContainer.h2.forEach(element =>{
    element.addEventListener("mouseover", headerTextOver);
});
mainContainer.img.forEach(element => {
    element.addEventListener("mousedown", clickedImage);
});
header.a.forEach(element => {
    element.addEventListener("mousedown", clickedLink);
    element.addEventListener("mouseover", onLinkOver);
});

footer.addEventListener("drag", dragFooter); // Doesn't work properly yet

/* End event listeners */

/* Event callbacks */
function keyPressed(e) {
    console.log(e.key);
    if (e.key === "r") {
        bodyBgRedValue--;
    }
    if (e.key === "g") {
        bodyBgGreenValue--;
    }
    if (e.key === "b") {
        bodyBgBlueValue--;
    }
    body.style.backgroundColor = `rgba(${bodyBgRedValue}, ${bodyBgGreenValue}, ${bodyBgBlueValue}, 1)`;

    e.stopPropagation();
}

function headerMouseOver() {
    TweenMax.from(logo, 1, {rotation:360});
}

function clickedImage(e) {
    TweenMax.from(mainContainer.img, 5, {scale:0.5});
    e.stopPropagation();
}

function clickedLink(e) {
    e.preventDefault();
}

function onLinkOver() {
    header.a.forEach(element => {
        element.innerText = "LINK!";
    });
}

function scrolled() {
    mainContainer.p.forEach(element => {
        element.style.color = "green";
    })
}

function headerTextOver() {
    mainContainer.h2.forEach(element => {
        element.style.border = "1px solid black";
    });
}

function dragFooter(e) {
    // This needs a lot more work...
    footer.style.display = "block";
    footer.style.position = "absolute";
    footer.style.top = e.clientY;
    footer.style.left = e.clientX;
}