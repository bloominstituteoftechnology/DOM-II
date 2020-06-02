// Your code goes here

// Get all the buttons on the page for later use

const buttons = document.getElementsByTagName('button');
const darkThemeButton = buttons[0]; // Switches to dark theme
const normalThemeButton = buttons[1]; // Switches back to normal theme

darkThemeButton.classList.add("themeSwitcherButton");
darkThemeButton.classList.add("darkThemeButton");
darkThemeButton.textContent = "Switch to Dark Theme";
normalThemeButton.classList.add("themeSwitcherButton");
normalThemeButton.classList.add("displayNone"); // Hides this button by default. Theme starts at normal.
normalThemeButton.textContent = "Switch to Normal Theme";

function darkTheme() {
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
}