// Your code goes here

// on load
const topFunBusLogo = document.querySelector('.logo-heading');
window.addEventListener('load', (event) => {
    // tween in
    TweenMax.to(".logo-heading", 2, {x:-100, opacity: 1});
});

// on load
const topNav = document.querySelector('.nav');
window.addEventListener('load', (event) => {
    // tween in
    TweenMax.to(".nav", 2, {x:-50, opacity: 1});
});

// scroll
const introH2 = document.querySelector('#introH2');
console.log(introH2);
window.addEventListener('scroll', (event) => {
    // animate to enter from left
    TweenMax.to("#introH2", 4, {x:-50, opacity: 1});
});

// scroll
const contentSectionTextContentH2 = document.querySelector('#contentSectionTextContentH2');
console.log(contentSectionTextContentH2);
window.addEventListener('scroll', (event) => {
    // animate to enter from left
    TweenMax.to("#contentSectionTextContentH2", 4, {x:-50, opacity: 1});
});

// scroll
const contentSectionInverseContentH2 = document.querySelector('#contentSectionInverseContentH2');
console.log(contentSectionInverseContentH2);
window.addEventListener('scroll', (event) => {
    // animate to enter from right
    TweenMax.to("#contentSectionInverseContentH2", 4, {x:50, opacity: 1});
});

// scroll
const contentDestinationH2 = document.querySelector('#contentDestinationH2');
console.log(contentDestinationH2);
window.addEventListener('scroll', (event) => {
    // animate to enter from left
    TweenMax.to("#contentDestinationH2", 4, {x:-50, opacity: 1});
});

// mouseover
const contentPickDestination1 = document.querySelector('#destination-1');
console.log(contentPickDestination1);
contentPickDestination1.addEventListener('mouseover', (event) => {
    // change background color
    event.target.style.background = "gold";

    contentPickDestination1.addEventListener('mouseleave', (event) => {
        // change color back
        event.target.style.background = "white";
    });
});

// mouseover
const contentPickDestination2 = document.querySelector('#destination-2');
console.log(contentPickDestination2);
contentPickDestination2.addEventListener('mouseover', (event) => {
    // change background color
    event.target.style.background = "gold";

    contentPickDestination2.addEventListener('mouseleave', (event) => {
        // change color back
        event.target.style.background = "white";
    });
});

// mouseover
const contentPickDestination3 = document.querySelector('#destination-3');
console.log(contentPickDestination3);
contentPickDestination3.addEventListener('mouseover', (event) => {
    // change background color
    event.target.style.background = "gold";

    contentPickDestination3.addEventListener('mouseleave', (event) => {
        // change color back
        event.target.style.background = "white";
    });
});

// click
const contentPickDestinationBtn1 = document.querySelector('#btn1');
console.log(contentPickDestinationBtn1);
const contentPickDestinationFunInTheSunCoverText = document.getElementById('funInTheSunCoverText');
console.log(contentPickDestinationFunInTheSunCoverText);
contentPickDestinationBtn1.addEventListener('click', (event) => {
    // show a new h4 element
    contentPickDestinationFunInTheSunCoverText.classList.remove('hide-this');
    console.log("Clicked Fun in the Sun Adventure");
});

// click
const contentPickDestinationBtn2 = document.querySelector('#btn2');
console.log(contentPickDestinationBtn2);
const contentPickDestinationMountainCoverText = document.getElementById('mountainCoverText');
console.log(contentPickDestinationMountainCoverText);
contentPickDestinationBtn2.addEventListener('click', (event) => {
    // show a new h4 element
    contentPickDestinationMountainCoverText.classList.remove('hide-this');
    console.log("Clicked Mountain Adventure");
});

// click
const contentPickDestinationBtn3 = document.querySelector('#btn3');
console.log(contentPickDestinationBtn3);
const contentPickDestinationIslandCoverText = document.getElementById('islandCoverText');
console.log(contentPickDestinationIslandCoverText);
contentPickDestinationBtn3.addEventListener('click', (event) => {
    // show a new h4 element
    contentPickDestinationIslandCoverText.classList.remove('hide-this');
    console.log("Clicked Island Adventure");
});