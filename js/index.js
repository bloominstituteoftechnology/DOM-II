// Your code goes here


// // -- (1) "mouseover" -- 
const headerLogo = document.querySelector('.logo-heading');

headerLogo.addEventListener('mouseover', function(event){
    // console.log('MouseOver LOGO') // TEST
    event.target.style.color = "gold"
});

// -- (2) "keydown" -- 
const newBod = document.querySelector("body");

newBod.addEventListener('keydown', function(event){
    // console.log("KEYDOWN") // TEST
    event.key = 'j';
    event.target.style.background = "gold"
});

// // -- (3) 'mouseenter' -- 
const mouseNone = document.querySelector('footer');

mouseNone.addEventListener('mouseenter', function(event){
    // console.log(mouseNone)
    event.target.style.cssText = "display:none";
});

// // -- 'wheel' -- // DO NOT UNDERSTAND WHEEL
// const headerLogoWheel = document.querySelector('h2');
// const paragraph = document.querySelector('p');

// document.addEventListener('wheel', function (event){
//     headerLogoWheel.textContent = 'BUS o FUN'
//     paragraph.style.cssText = "background:crimson"
//     paragraph.textContent = 'This is the BUS o FUN!'
// });

// // -- 'drag / drop' // 


// // -- (4) 'click' // 
const newPlaneImg = document.querySelectorAll('img.img-fluid').forEach(item => {
  item.addEventListener('click', event => {
  item.src = 'https://dw8stlw9qt0iz.cloudfront.net/VLVYPikq_0ydHmRj89KV9HVqWTQ=/fit-in/1440x810/filters:format(jpeg):quality(75)/curiosity-data.s3.amazonaws.com/images/content/landscape/standard/991adb98-ffd0-4c64-c11f-9b05b643bd83.jpg';
item.alt = "plane nosediving with wing on fire";
  })
});


// -- (5) 'scroll' // 
const headerLogoScroll = document.querySelector('h1');
const paragraph = document.querySelector('p');

document.addEventListener('scroll', function (event){
    headerLogoScroll.textContent = 'Broke Bus'
    paragraph.style.cssText = "background:purple"
    paragraph.textContent = 'This is the Broke Bus!'
});


// -- (6) 'double-click' -- 
const logoDbl = document.querySelector('.home .intro h2');

logoDbl.addEventListener("dblclick", function(event){
    event.target.style.cssText = "font-size:5rem;color:dodgerblue"
})

// // -- (7 & 8) Scaling with 'mouseenter' & 'mouseleave'
const scaleUp = document.querySelectorAll('.content-destination img')

scaleUp.forEach(item => {
    item.addEventListener('mouseenter', event => {
        item.style.transform = 'scale(1.1)';
        item.style.transition = 'transform 0.5s';
    })
})

const scaleDown = document.querySelectorAll(' .content-destination img');

scaleDown.forEach(item => {
    item.addEventListener('mouseleave', event => {
        item.style.transform = 'scale(1)';
        item.style.transition = 'transform 0.5s'
    })
})

// -- (9) 'RESIZE' -- // 
window.addEventListener('resize', event => {
    const changeTitle = document.querySelectorAll('h2');
    changeTitle[1].textContent = 'Try Walking!'
    changeTitle[0].textContent = 'Ride a Steel Horse!'
  });

// -- STOP PROPOGATION -- // DO NOT UNDERSTAND THIS 
const divButton = document.querySelector('.destination')

divButton.addEventListener('click', function(event) {
console.log ("I'm in the div!")
event.target.style.cssText = "background:purple";
})

const buttonInDiv = document.querySelector('.destination .btn')
buttonInDiv.addEventListener('click', (event) => {
console.log("I'm in the button!")
event.target.style.cssText = 'background:pink'
event.stopPropagation();
}); 

// -- Prevent Default -- // DO NOT UNDERSTAND THIS 
const navDefault = document.querySelectorAll('.nav-link')
navDefault.forEach((currentvalue) => {
    currentvalue.addEventListener('click', (event) => {
        console.log("link is clicked")
        event.preventDefault();
    }); 
});



// -- (10) "load" -- // specific to WINDOW 
// const onLoad = document.querySelectorAll("body");

// window.addEventListener("load", setTimeout(function(){
//     alert('Do not ride the Broke Bus!'); }, 3000));

