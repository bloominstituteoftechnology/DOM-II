// 

// * `mouseover` -
//   * `keydown` -
//   * `wheel`
//   * `load` 
//   * `focus` -
//   * `resize`
//   * `scroll` -
//   * `select`
//   * `dblclick`
//   * `drag / drop`

//Selectors

//Nav
let navButtons = document.querySelector('nav a');
//Header
let topImage = document.querySelector('.intro img');
//Mid Content Section
let letsGo = document.querySelector('.content-section h2'); //checar si este selector también  modifica el otro content-section h2 o sólo Let's go.
let contentSectionImg = document.querySelector('.content-section img')
//Content Destination
let sectionDest = document.querySelector('.home .content-destination')
//Content-Pick bottom
let topLogo = document.querySelector('.home .content-pick');
let signUpButton = document.querySelector('.btn');
//Footer
let footerText = document.querySelector('.footer')

//Event Listeners and Methods

//Nav
navButtons.addEventListener('mouseover', (event) => {
    event.target.style.color = "blue";
    event.target.style.font-size = 10px;
    event.target.style.text-shadow = 2px 2px lightgrey;
});

