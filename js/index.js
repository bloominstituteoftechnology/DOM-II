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
//      keydown

//Selectors

//Nav
const navButtons = document.querySelector('nav a');
//HeaderImg
const topImage = document.querySelector('.intro img');
//Mid Content Section
const letsGo = document.querySelector('.content-section h2'); //checar si este selector también  modifica el otro content-section h2 o sólo Let's go.
const contentSectionImg = document.querySelector('.content-section img')
//Content Destination
const sectionDest = document.querySelector('.home .content-destination')
//Content-Pick bottom
const topLogo = document.querySelector('.home .content-pick');
const signUpButton = document.querySelector('.btn');
//Footer
const footerText = document.querySelector('.footer')

//Event Listeners and Methods

//keydown
footerText.addEventListener('keydown', (event) => {
    event.target.style.background = "red"
})

//Nav
navButtons.addEventListener('mouseover', (event) => {
    event.target.style.color = "blue"
    event.target.style.fontSize = "small"
    //event.target.style.text-shadow = 2px 2px lightgrey
});

//HeaderImg
const lastScrollPositionY = 0;
topImage.addEventListener('scroll', (event) => {
    event.lastScrollPositionY = window.scrollY;
});

function resize (event) {   
   console.log("resize!")
}

topImage.addEventListener('click', resize);

//letsGo

letsGo.addEventListener('click', (event) => {
    event.target.style.color = 'red';
    event.target.style.fontSize = 'large';
})


////Mid Content Section
contentSectionImg.addEventListener('click', (event)=> {
    event.target.style.opacity = .9;
})

//Buttons
function changeTextColor(event) {
    event.target.style.color = "blue";
}

signUpButton.addEventListener('wheel', changeTextColor);

//Footer
footerText.addEventListener('dblclick', (event) => {
    event.target.style.fontSize = 15;
})