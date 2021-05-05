// 

// * `mouseover` -
//   * `keydown` -
//   * `wheel`-
//   * `load` 
//   * `focus` -
//   * `resize` -
//   * `scroll` -
//   * `select`
//   * `dblclick`-
//   * `drag / drop`

//Selectors

//Nav
let navButtons = document.querySelector('nav a');
//HeaderImg
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

//HeaderImg
let lastScrollPositionY = 0;
topImage.addEventListener('scroll', (event) => {
    event.lastScrollPositionY = window.scrollY;
});

function resize (event) {
    event.target.style.width = 100%;
    event.target.style.height = 30%;
}

topImage.addEventListener('resize', resize);

////Mid Content Section
contentSectionImg.addEventListener('click', (event)=> {
    event.target.style.opacity = .9;
});
//Buttons
function changeTextColor(event) {
    event.target.style.color = blue;
}

signUpButton.addEventListener('wheel', changeTextColor);

//Footer
footerText.addEventListener('dblclick', (event) => {
    event.target.style.font-size = 15px;
})