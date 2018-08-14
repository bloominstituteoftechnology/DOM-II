// Your code goes here
const anchors = document.querySelector('.nav');
const hoverPic = document.querySelector('.funBus');
const bodyColor = document.querySelector('.oof');
const textUnderline = document.querySelector('.logo-heading');
//butto1,2 and 3 effect
const buttonGrow = document.querySelector('.btn1');
const buttonGrow2 = document.querySelector('.btn2');
const buttonGrow3 = document.querySelector('.btn3');
//end of button effect
const navBarColor = document.querySelector('.main-navigation');
const easterEGG = document.querySelector('.oof');
const easeout = document.querySelector('.footer');
const focusMe = document.querySelector('.adventure');
const selecting = document.querySelector('.letsgo');
const out = document.querySelector(`.fun`);


//blurs image when mouse hovered over
hoverPic.addEventListener('mouseover', (event) => {
    hoverPic.classList.toggle('blurBus');
    console.log("WOW!");
});
//Removes blur when mouse is off image
hoverPic.addEventListener('mouseleave', (event) => {
    hoverPic.classList.remove('blurBus');
});
//Raindbow toggle container
bodyColor.addEventListener('click', (event) => {
    bodyColor.classList.toggle('colorChange');
    
    console.log("oof");
});

textUnderline.addEventListener('dblclick', (event) =>{
    textUnderline.classList.toggle('underline');
    console.log("its selecting!");
});

buttonGrow.addEventListener('mousedown', (event) => {
    buttonGrow.classList.toggle('btn-grow');
});
buttonGrow2.addEventListener('mousedown', (event) => {
    buttonGrow2.classList.toggle('btn-grow');
});
buttonGrow3.addEventListener('mousedown', (event) => {
    buttonGrow3.classList.toggle('btn-grow');
});


navBarColor.addEventListener('mouseup', (event) => {
    navBarColor.classList.toggle('NewColor');
    event.stopPropagation();
    console.log("i think it works doctor");
});

easterEGG.addEventListener('keydown', (event) => {
    easterEGG.classList.toggle('easter');
});

easeout.addEventListener('mousemove', (event) => {
    easeout.classList.add('colorChaning')
});

focusMe.addEventListener('mouseenter', (event) => {
    focusMe.classList.toggle('imageChange');
});

selecting.addEventListener('wheel', (event) => {
    selecting.classList.toggle('textGrow')
})

out.addEventListener('mouseout', (event) => {
    out.classList.toggle('imageGo');
});

anchors.addEventListener('click' , (event) =>{
    event.preventDefault();
});