import './less/index.less'

// Your code goes here!

let nav = document.querySelectorAll('.nav-link')

for(let i = 0; i <nav.length; i++)

nav[i].addEventListener('mouseover', (event)=>{
    event.target.style.color = 'teal';
    event.stopPropagation();
})

for(let i = 0; i <nav.length; i++)
nav[i].addEventListener('click', (event) =>{
    event.preventDefault();
})

//Created Input Section
let topHeader = document.querySelector('.intro');
let arrowContent = document.createElement('p')
arrowContent.textContent ="Let's make a party in the background. Use the Arrow Keys in the box below to make change this site's style!"
topHeader.appendChild(arrowContent)

let arrowParty = document.createElement('input')
topHeader.appendChild(arrowParty);

//Color Randomizer
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
    document.body.style.background = bgColor;
    }

//Input Event Listener 3 & 4
arrowParty.addEventListener('keydown', (event) =>{
        event.target.style.backgroundColor = random_bg_color();;
        event.stopPropagation();
    });

arrowParty.addEventListener('mouseenter', (event) =>{
    event.target.style.background = 'pink';
    event.stopPropagation();
    `preventDefault()`

}, true);

//Button Creation
let button = document.createElement('button');
button.innerHTML = "Reset the Background!";

topHeader.appendChild(button);

//Event Listener 5
button.addEventListener('click', (event) => {
    document.body.style.background = 'white';
})


//Sign Up Button Event Listener 6
let signMeUp = document.querySelectorAll('.btn');
for(let i = 0; i < signMeUp.length; i++)
signMeUp[i].addEventListener('dblclick', (event)=> {
    alert('Get ready for an exciting trip!')
})

//Img blur and Event Listener 7
let blurredImgs = document.querySelectorAll('img');

blurredImgs[3].style.filter = 'blur(3.5px)'
for(let i = 0; i < signMeUp.length; i++)
blurredImgs[3].addEventListener('mouseover', (event)=>{
    event.target.style.filter = "blur(0px)"
})

//Event Listener 8
window.addEventListener('load', (event)=>{
    console.log("Everything is loaded!")
})

//Event Listener 9
window.addEventListener('scroll', (event)=> {
    console.log("Keep it scrolling")
    event.stopPropagation();
})

//Event Listener 10
window.addEventListener('wheel', (event) =>{
    console.log('I see you wheeling up and down')
    event.stopPropagation();
})

//Event Listener 11
window.addEventListener('resize', (event) => {
    let windowWidth = window.outerWidth;
    let windowHeight = window.outerHeight;
    console.log( "Window size: width=" + windowWidth + ", height=" + windowHeight)
})
