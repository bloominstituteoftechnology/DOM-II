 //Your code goes here. Using your [index.js file](js/index.js), create 10 [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events). using your creativity to make the Fun Bus site more interactive.

//When the doc loads this alert will appear explaining what you can do on the site.
  window.addEventListener("load", function(event) {
    alert("On this site, you may do the following: Hover over the Fun Bus logo to double its size, drag the intro img to increase its size, double click the nav links to change their background color to red, press any keyboard key to make the header disappear, hover over the header to make the header reappear, hover over a expedition title to change its color to MediumSeaGreen, hover over a Adventure Awaits title to change its color to Maroon, Double click a sign up button to prompt an input box and then an alert, Right click the footer to change its background color to MediumTurquoise.");});

// Hover over the Fun Bus logo to double its size.
  const navLogoHeading = document.querySelector('.logo-heading');
    navLogoHeading.addEventListener("mouseover", (e) => e.target.style.transform = "scale(2.0)");
    navLogoHeading.addEventListener('mouseleave', (e) => e.target.style.transform = "scale(1.0)");

// Drag the intro img to increase its size. 
  const funBusBanner = document.querySelector(".intro > img" );
    funBusBanner.addEventListener('drag', (e) => e.target.style.transform = 'scale(1.25)');

// Double click the nav links to change their background color to red.
  const nav = document.querySelector(".nav");
    nav.addEventListener("dblclick", (e) => {e.target.style.backgroundColor = 'red';});

// Press any keyboard key to make the header disappear. 
  const body = document.querySelector('body');
  const header = document.querySelector('.main-navigation');
    body.addEventListener("keydown", () => {header.style.opacity = "0"});

// Hover over the header to make the header reappear. 
  const navContainer = document.querySelector(".nav-container");
    navContainer.addEventListener("mouseenter", () => header.style.opacity = "1");

// Hover over a expedition title to change its color to MediumSeaGreen.
  const allExpeditionsTitle = document.querySelectorAll('.destination h4')
    //allExpeditionsTitle.addEventListener('mousemove', (e) => {e.stopPropagation()})
    allExpeditionsTitle.forEach(node => {node.addEventListener('mousemove', (e) => {e.target.style.color = 'MediumSeaGreen'})});

// Hover over a Adventure Awaits title to change its color to Maroon.
  const adventureAwaits = document.querySelectorAll('.text-content h2')
    //adventureAwaits.addEventListener('mousemove', (e) => {e.stopPropagation()})
    adventureAwaits.forEach(node => {node.addEventListener('mousemove', (e) => {e.target.style.color = 'Maroon'})});

// Double click a sign up button to prompt an input box and then an alert. 
  const button = document.querySelectorAll('.btn');
    button.forEach(node => {node.addEventListener('dblclick', function(){let name = prompt('Enter name'); alert(`${name} you are signed up!`);})});

// Right click the footer to change its background color to MediumTurquoise.
  footer = document.querySelector('.footer');
    footer.addEventListener('contextmenu', (e) => {e.target.style.backgroundColor = 'MediumTurquoise';})

// Nav links do not reload page.
  nav.addEventListener('click', (e) => {e.preventDefault(); console.log("clicked on navlink");});