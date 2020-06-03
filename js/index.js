// Your code goes here

// Get all the buttons on the page for later use

// ADDED FUNCTIONALITY

// ADDED THEME SWITCHER BUTTON FROM NORMAL TO DARK AND BACK TO NORMAL
// ADDED THEME SWITCHER SHORTCUT KEY FROM NORMAL TO DARK AND BACK TO NORMAL D = DARK; N = NORMAL
// ADDED MOUSEOVER ON IMAGES TO SEE DIFFERENT IMAGES
// ADDED "TO TOP" BUTTON, WHICH ONLY APPEARS IF SCREEN IS NOT AT THE TOP
// ADDED INCREASE PARAGRAPH TEXT SIZE WITH SHIFT + SCROLL UP
// ADDED DECREASE PARAGRAPH TEXT SIZE WITH SHIFT + SCROLL DOWN
// ADDED MODAL ON PAGE LOAD TO WELCOME USERS TO THE SITE. BLURS BACKGROUND WHILE MODAL IS OPEN.
// DISABLED CONTEXT MENU ON IMAGES TO PREVENT IMAGE THEFT

// END ADDED FUNCTIONALITY

const buttons = document.getElementsByTagName('button');
const darkThemeButton = buttons[0]; // Switches to dark theme
const normalThemeButton = buttons[1]; // Switches back to normal theme

darkThemeButton.classList.add("themeSwitcherButton");
darkThemeButton.classList.add("darkThemeButton");
darkThemeButton.textContent = "Switch to Dark Theme";
normalThemeButton.classList.add("themeSwitcherButton");
normalThemeButton.classList.add("displayNone"); // Hides this button by default. Theme starts at normal.
normalThemeButton.textContent = "Switch to Normal Theme";

    const normalThemeKey = document.getElementById("normalThemeKey");
    const darkThemeKey = document.getElementById("darkThemeKey");

    normalThemeKey.classList.add("displayNone");
    darkThemeKey.classList.add("darkThemeKey");

darkThemeButton.onclick = function(event) {
    const theBody = document.body;
    theBody.classList.add("darkThemeBody");

    const theHeader = document.querySelector('header');
    theHeader.classList.add("darkThemeNav");

    const theHeading = document.getElementsByClassName("logo-heading");
    theHeading[0].classList.add("darkThemeHeading");

    const theNavLinks = document.querySelectorAll('nav > a');
    theNavLinks[0].classList.add("darkThemeNavLinks");
    theNavLinks[1].classList.add("darkThemeNavLinks");
    theNavLinks[2].classList.add("darkThemeNavLinks");
    theNavLinks[3].classList.add("darkThemeNavLinks");

    const theSubheadings = document.querySelectorAll('h2');
    theSubheadings[0].classList.add("darkThemeh2");
    theSubheadings[1].classList.add("darkThemeh2");
    theSubheadings[2].classList.add("darkThemeh2");
    theSubheadings[3].classList.add("darkThemeh2");

    const theH4s = document.querySelectorAll('h4');
    theH4s[0].classList.add("darkThemeh4");
    theH4s[1].classList.add("darkThemeh4");
    theH4s[2].classList.add("darkThemeh4");

    const theParagraphs = document.querySelectorAll('p');
    theParagraphs[0].classList.add("darkThemep");
    theParagraphs[1].classList.add("darkThemep");
    theParagraphs[2].classList.add("darkThemep");
    theParagraphs[3].classList.add("darkThemep");
    theParagraphs[4].classList.add("darkThemep");
    theParagraphs[5].classList.add("darkThemep");
    theParagraphs[6].classList.add("darkThemep");
    theParagraphs[7].classList.add("darkThemep");
    theParagraphs[8].classList.add("darkThemep");
    theParagraphs[9].classList.add("darkThemeFooterp");

    const packageButtons = document.getElementsByClassName('btn');
    packageButtons[0].classList.add("darkThemePackage");
    packageButtons[1].classList.add("darkThemePackage");
    packageButtons[2].classList.add("darkThemePackage");

    const theFooter = document.querySelector('footer');
    theFooter.classList.add("darkThemeFooter");

    // RESTORES normalTheme Button
    normalThemeButton.classList.remove("displayNone");

    // HIDES darkTheme Button
    darkThemeButton.classList.add("displayNone");

    darkThemeKey.classList.remove("displayNone");
    darkThemeKey.classList.add("darkThemeKey");
    normalThemeKey.classList.remove("displayNone");
    normalThemeKey.classList.add("normalThemeKey");

    document.getElementById('increaseSize').style.color = "white";
    document.getElementById('decreaseSize').style.color = "white";
}

normalThemeButton.onclick = function(event) {
    const theBody = document.body;
    theBody.classList.remove("darkThemeBody");

    const theHeader = document.querySelector('header');
    theHeader.classList.remove("darkThemeNav");

    const theHeading = document.getElementsByClassName("logo-heading");
    theHeading[0].classList.remove("darkThemeHeading");

    const theNavLinks = document.querySelectorAll('nav > a');
    theNavLinks[0].classList.remove("darkThemeNavLinks");
    theNavLinks[1].classList.remove("darkThemeNavLinks");
    theNavLinks[2].classList.remove("darkThemeNavLinks");
    theNavLinks[3].classList.remove("darkThemeNavLinks");

    const theSubheadings = document.querySelectorAll('h2');
    theSubheadings[0].classList.remove("darkThemeh2");
    theSubheadings[1].classList.remove("darkThemeh2");
    theSubheadings[2].classList.remove("darkThemeh2");
    theSubheadings[3].classList.remove("darkThemeh2");

    const theH4s = document.querySelectorAll('h4');
    theH4s[0].classList.remove("darkThemeh4");
    theH4s[1].classList.remove("darkThemeh4");
    theH4s[2].classList.remove("darkThemeh4");

    const theParagraphs = document.querySelectorAll('p');
    theParagraphs[0].classList.remove("darkThemep");
    theParagraphs[1].classList.remove("darkThemep");
    theParagraphs[2].classList.remove("darkThemep");
    theParagraphs[3].classList.remove("darkThemep");
    theParagraphs[4].classList.remove("darkThemep");
    theParagraphs[5].classList.remove("darkThemep");
    theParagraphs[6].classList.remove("darkThemep");
    theParagraphs[7].classList.remove("darkThemep");
    theParagraphs[8].classList.remove("darkThemep");
    theParagraphs[9].classList.remove("darkThemeFooterp");

    const packageButtons = document.getElementsByClassName('btn');
    packageButtons[0].classList.remove("darkThemePackage");
    packageButtons[1].classList.remove("darkThemePackage");
    packageButtons[2].classList.remove("darkThemePackage");

    const theFooter = document.querySelector('footer');
    theFooter.classList.remove("darkThemeFooter");

    // RESTORES normalTheme Button
    normalThemeButton.classList.add("displayNone");

    // HIDES darkTheme Button
    darkThemeButton.classList.remove("displayNone");

    normalThemeKey.classList.add("displayNone");
    normalThemeKey.classList.remove("normalThemeKey");
    darkThemeKey.classList.remove("displayNone");
    darkThemeKey.classList.add("darkThemeKey");

    document.getElementById('increaseSize').style.color = "black";
    document.getElementById('decreaseSize').style.color = "black";
}

window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(evt) {
    if (evt.keyCode == "68") {
        const theBody = document.body;
    theBody.classList.add("darkThemeBody");

    const theHeader = document.querySelector('header');
    theHeader.classList.add("darkThemeNav");

    const theHeading = document.getElementsByClassName("logo-heading");
    theHeading[0].classList.add("darkThemeHeading");

    const theNavLinks = document.querySelectorAll('nav > a');
    theNavLinks[0].classList.add("darkThemeNavLinks");
    theNavLinks[1].classList.add("darkThemeNavLinks");
    theNavLinks[2].classList.add("darkThemeNavLinks");
    theNavLinks[3].classList.add("darkThemeNavLinks");

    const theSubheadings = document.querySelectorAll('h2');
    theSubheadings[0].classList.add("darkThemeh2");
    theSubheadings[1].classList.add("darkThemeh2");
    theSubheadings[2].classList.add("darkThemeh2");
    theSubheadings[3].classList.add("darkThemeh2");

    const theH4s = document.querySelectorAll('h4');
    theH4s[0].classList.add("darkThemeh4");
    theH4s[1].classList.add("darkThemeh4");
    theH4s[2].classList.add("darkThemeh4");

    const theParagraphs = document.querySelectorAll('p');
    theParagraphs[0].classList.add("darkThemep");
    theParagraphs[1].classList.add("darkThemep");
    theParagraphs[2].classList.add("darkThemep");
    theParagraphs[3].classList.add("darkThemep");
    theParagraphs[4].classList.add("darkThemep");
    theParagraphs[5].classList.add("darkThemep");
    theParagraphs[6].classList.add("darkThemep");
    theParagraphs[7].classList.add("darkThemep");
    theParagraphs[8].classList.add("darkThemep");
    theParagraphs[9].classList.add("darkThemeFooterp");

    const packageButtons = document.getElementsByClassName('btn');
    packageButtons[0].classList.add("darkThemePackage");
    packageButtons[1].classList.add("darkThemePackage");
    packageButtons[2].classList.add("darkThemePackage");

    const theFooter = document.querySelector('footer');
    theFooter.classList.add("darkThemeFooter");

    // RESTORES normalTheme Button
    normalThemeButton.classList.remove("displayNone");

    // HIDES darkTheme Button
    darkThemeButton.classList.add("displayNone");

    darkThemeKey.classList.remove("displayNone");
    darkThemeKey.classList.add("darkThemeKey");
    normalThemeKey.classList.remove("displayNone");
    normalThemeKey.classList.add("normalThemeKey");

    document.getElementById('increaseSize').style.color = "white";
    document.getElementById('decreaseSize').style.color = "white";
    }
    if (evt.keyCode == "78") {
        const theBody = document.body;
    theBody.classList.remove("darkThemeBody");

    const theHeader = document.querySelector('header');
    theHeader.classList.remove("darkThemeNav");

    const theHeading = document.getElementsByClassName("logo-heading");
    theHeading[0].classList.remove("darkThemeHeading");

    const theNavLinks = document.querySelectorAll('nav > a');
    theNavLinks[0].classList.remove("darkThemeNavLinks");
    theNavLinks[1].classList.remove("darkThemeNavLinks");
    theNavLinks[2].classList.remove("darkThemeNavLinks");
    theNavLinks[3].classList.remove("darkThemeNavLinks");

    const theSubheadings = document.querySelectorAll('h2');
    theSubheadings[0].classList.remove("darkThemeh2");
    theSubheadings[1].classList.remove("darkThemeh2");
    theSubheadings[2].classList.remove("darkThemeh2");
    theSubheadings[3].classList.remove("darkThemeh2");

    const theH4s = document.querySelectorAll('h4');
    theH4s[0].classList.remove("darkThemeh4");
    theH4s[1].classList.remove("darkThemeh4");
    theH4s[2].classList.remove("darkThemeh4");

    const theParagraphs = document.querySelectorAll('p');
    theParagraphs[0].classList.remove("darkThemep");
    theParagraphs[1].classList.remove("darkThemep");
    theParagraphs[2].classList.remove("darkThemep");
    theParagraphs[3].classList.remove("darkThemep");
    theParagraphs[4].classList.remove("darkThemep");
    theParagraphs[5].classList.remove("darkThemep");
    theParagraphs[6].classList.remove("darkThemep");
    theParagraphs[7].classList.remove("darkThemep");
    theParagraphs[8].classList.remove("darkThemep");
    theParagraphs[9].classList.remove("darkThemeFooterp");

    const packageButtons = document.getElementsByClassName('btn');
    packageButtons[0].classList.remove("darkThemePackage");
    packageButtons[1].classList.remove("darkThemePackage");
    packageButtons[2].classList.remove("darkThemePackage");

    const theFooter = document.querySelector('footer');
    theFooter.classList.remove("darkThemeFooter");

    // RESTORES normalTheme Button
    normalThemeButton.classList.add("displayNone");

    // HIDES darkTheme Button
    darkThemeButton.classList.remove("displayNone");

    normalThemeKey.classList.add("displayNone");
    normalThemeKey.classList.remove("normalThemeKey");
    darkThemeKey.classList.remove("displayNone");
    darkThemeKey.classList.add("darkThemeKey");

    document.getElementById('increaseSize').style.color = "black";
    document.getElementById('decreaseSize').style.color = "black";
    }
}

const theBody = document.querySelector('body');
const scrollButton = document.createElement('button');
theBody.prepend(scrollButton);
scrollButton.classList.add("scrollButton");
scrollButton.classList.add("displayNone");
const scrollButtonLink = document.createElement('a');
scrollButtonLink.innerHTML = "&uArr; Top &uArr;";
scrollButton.prepend(scrollButtonLink);
scrollButtonLink.href = "#";

    window.addEventListener("scroll", function() {
    if(window.scrollY === 0) {
        scrollButton.classList.add("displayNone");
    } else {
        scrollButton.classList.remove("displayNone");
    }
});
const setParagraphs = document.querySelectorAll('p');
window.addEventListener('mousewheel', function(event){
    if(event.shiftKey) {
        if(event.deltaY < 0){
        // INCREASE TEXT SIZES WITH SHIFT + SCROLL UP

            for(i = 0; i <= 8; i++){
                setParagraphs[i].style.fontSize = "2rem";
            }
        } else if(event.deltaY > 0) {
        // DECREASE TEXT SIZES WITH SHIFT + SCROLL DOWN
            for(j = 0; j <= 8; j++){
                setParagraphs[j].style.fontSize = "1.2rem";
            }
        }
    }
});

window.addEventListener("load", function() {
    theBody.classList.add("blur");
    const modal = document.createElement('div');
    theBody.appendChild(modal);
    const modalText = document.createElement('div');
    modal.prepend(modalText);
    const modalButton = document.createElement('button');
    modal.appendChild(modalButton);
    modal.classList.add("modal");
    modalText.classList.add("modalText");
    modalText.textContent = "Thank you for Visiting! We offer many different packages at very affordable rates";
    modalButton.classList.add("modalButton");
    modalButton.textContent = "Browse Our Packages";
    modalButton.style.cursor = "pointer";
    
    modalButton.addEventListener("click", function() {
        modal.classList.add("displayNone");
        theBody.classList.remove("blur");
    });
});

const allImages = document.getElementsByTagName('img');

allImages[0].addEventListener("contextmenu", function(event) {
    event.preventDefault();
  });

  allImages[1].addEventListener("contextmenu", function(event) {
    event.preventDefault();
  });

  allImages[2].addEventListener("contextmenu", function(event) {
    event.preventDefault();
  });

  allImages[3].addEventListener("contextmenu", function(event) {
    event.preventDefault();
  });