// Your code goes here

//mouseover and mouseleave
const hamburgerSelector = document.querySelector('.hamburger');
// hamburgerSelector.style.opacity = 0.5;
hamburgerSelector.addEventListener('mouseover', (event) => {
    // console.log('hi');
    hamburgerSelector.classList.toggle('full-opacity');
    hamburgerSelector.classList.toggle('half-opacity');
});
hamburgerSelector.addEventListener('mouseleave', (event) => {
    // console.log('hi');
    hamburgerSelector.classList.toggle('full-opacity');
    hamburgerSelector.classList.toggle('half-opacity');
});


//keydown
const bodySelector = document.querySelector('body');
const funBusImgSelector = document.querySelector(".intro img");
bodySelector.addEventListener('keydown', (event) => {
    funBusImgSelector.style.width = "95%";
});

//wheel
const logoSelector = document.querySelector('.logo-heading');
bodySelector.addEventListener('wheel', (event) => {
    logoSelector.style.color = 'red';
});

//drag and drop
const introImgSelector = document.querySelector(".intro img");
const introTextSelector = document.querySelector(".intro p");
introImgSelector.addEventListener('dragstart', (event) => {
    introImgSelector.style.opacity = 0.5;
});
introImgSelector.addEventListener('dragend', (event) => {
    introImgSelector.style.opacity = 1;
});

//load
const introImgSelectors = document.getElementsByTagName(".intro img");

bodySelector.addEventListener('load', (event) => {
    introImgSelector.style.width = "95%";
    introImageSelector.style.border = "5px solid red";
})


//focus



//resize


//scroll

//select

//dblclick