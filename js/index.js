// Your code goes here


// // -- "mouseover" -- 
const headerLogo = document.querySelector('.logo-heading');

headerLogo.addEventListener('mouseover', function(event){
    // console.log('MouseOver LOGO') // TEST
    event.target.style.color = "gold"
});

// -- "keydown" -- 
const newBod = document.querySelector("body");

newBod.addEventListener('keydown', function(event){
    // console.log("KEYDOWN") // TEST
    event.key = 'j';
    event.target.style.background = "gold"
});

// // -- 'mouseenter' -- 
const mouseNone = document.querySelector('footer');

mouseNone.addEventListener('mouseenter', function(event){
    // console.log(mouseNone)
    event.target.style.cssText = "display:none";
});

// // -- 'wheel' --
// const headerLogoWheel = document.querySelector('h2');
// const paragraph = document.querySelector('p');

// document.addEventListener('wheel', function (event){
//     headerLogoWheel.textContent = 'BUS o FUN'
//     paragraph.style.cssText = "background:crimson"
//     paragraph.textContent = 'This is the BUS o FUN!'
// });

// // -- 'drag / drop' // 


// // -- 'focus' // 


// -- 'scroll' // 
const headerLogoScroll = document.querySelector('h1');
const paragraph = document.querySelector('p');

document.addEventListener('scroll', function (event){
    headerLogoScroll.textContent = 'Broke Bus'
    paragraph.style.cssText = "background:purple"
    paragraph.textContent = 'This is the Broke Bus!'
});

// -- 'select' // 


// -- 'double-click' -- 
const logoDbl = document.querySelector('.home .intro h2');

logoDbl.addEventListener("dblclick", function(event){
    event.target.style.cssText = "font-size:5rem;color:dodgerblue"
})

// -- "load" -- // specific to WINDOW 
const onLoad = document.querySelectorAll("body");

window.addEventListener("load", setTimeout(function(){
    alert('Do not ride the Broke Bus!'); }, 3000));


// -- BLANK -- 
// const destination = document.querySelector('.destination');
//     destination.addEventListener('click', function(){
//         console.log("I'm in the div!")
//     })

//     const btn = document.querySelector('.btn');
//     btn.addEventListener('click', function(event){
//         console.log("I'm in the button")
//     });

// // -- 'resize' // 
// const heightOutput = document.querySelector('#height');
// const widthOutput = document.querySelector('#width');

// function reportWindowSize() {
//     heightOutput.textContent = window.innerHeight;
//     widthOutput.textContent = window.innerWidth;
// }

// window.onresize = reportWindowSize;