// Your code goes here

//Mouse Over / changes anchor colors
const navAnchors = document.querySelector('.nav');

navAnchors.addEventListener('mouseover', () =>{
    navAnchors.style.backgroundColor = 'gold';
    console.log('gold nav bar')
});

navAnchors.addEventListener('mouseleave', () =>{
    navAnchors.style.backgroundColor = 'white';
    console.log('default nav bar')
});

//Key Down / Press any key for a secret message for any plagerizers
const pageBody = document.querySelector('body');
const noPlagerismFont = document.querySelector('.footer p');

pageBody.addEventListener('keydown', () => {
    noPlagerismFont.textContent = 'Copyright Fun Bus 2018. https://www.copyright.gov/help/faq/definitions.html';
    console.log('alerted plagerizers')
});

//Wheel / make font size smaller for h1 and changes first 'p' color to black
const title = document.querySelector('h1');

pageBody.addEventListener('wheel', (event) =>{
    title.style.fontSize = '22px';

    loadFontColor.style.color = 'black';

    console.log('font size and color changed')

    event.stopPropagation();
});

//Drag & Drop / drags the second image
const dragImage = document.querySelector('.content-section img')

dragImage.addEventListener('drag', () => {
    console.log('draggaing')
}, false);

dragImage.addEventListener("dragstart", (event) => {
    dragged = event.target;
    event.target.style.opacity = .5;

    console.log('drag start')
  }, false);

  dragImage.addEventListener("dragend", (event) => {
    event.target.style.opacity = '3%';

    console.log('drag end')
  }, false);

//Load / 
const loadFontColor = document.querySelector('p')

window.addEventListener('load', () => {
    loadFontColor.style.color = 'white';

    console.log('text is loaded as white')
});

//Focus / changes input background to grey and text to green
const name = document.querySelector('.header-input')
name.addEventListener('focus', (event) => {
    event.target.style.background = 'lightgrey';
    event.target.style.color = 'green';
    
    console.log('input changed to corrected colors')
});

name.addEventListener('blur', (event) => {
    event.target.style.background = 'white';
    event.target.style.color = 'black';
    
    console.log('input changed to default colors')
});

//Resize / shows that window has been resized
window.addEventListener('resize', () => {
    console.log('screen has been resized')
});

//Scroll / 
let bodyBG = document.querySelector('body')

window.addEventListener('scroll', () =>{
    bodyBG.style.backgroundColor = 'lightgrey';

    console.log('screen has scrolled')
});

//Select / type some text in the bottom left box and select a part of it, it will return a console log
const footerInput = document.querySelector(".footer-input")

footerInput.addEventListener('select', () => {
    console.log(`something was selected`)
})

//Double Click / 








