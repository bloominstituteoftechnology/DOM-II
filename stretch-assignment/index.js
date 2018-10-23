const myRed = document.querySelector('.block--red');
const myBlue = document.querySelector('.block--blue');
const myGreen = document.querySelector('.block--green');
const myPink = document.querySelector('.block--pink');
const myGray = document.querySelector('.block--gray');

let myTop = -1;
myGray.addEventListener('mouseup', function(event) {
    // only has to deal with event bubbling
    //event.stopPropagation();
    event.target.style.order = `${myTop}`;
    myTop--;
});

myPink.addEventListener('mouseup', function(event) {
    // only has to deal with event bubbling
    //event.stopPropagation();
    event.target.style.order = `${myTop}`;
    myTop--;
});

myGreen.addEventListener('mouseup', function(event) {
    // only has to deal with event bubbling
    //event.stopPropagation();
    event.target.style.order = `${myTop}`;
    myTop--;
});

myBlue.addEventListener('mouseup', function(event) {
    // only has to deal with event bubbling
    //event.stopPropagation();
    event.target.style.order = `${myTop}`;
    myTop--;
});

myRed.addEventListener('mouseup', function(event) {
    // only has to deal with event bubbling
    //event.stopPropagation();
    event.target.style.order = `${myTop}`;
    myTop--;
});

const myStart = 2;
let myGrayX = myStart;
let myPinkX = myStart;
let myGreenX = myStart;
let myBlueX = myStart;
let myRedX = myStart;

//Traveler??????
myGray.addEventListener('mousemove', function(event) {
    // only has to deal with event bubbling
    //event.stopPropagation();
    TweenMax.to(".block--gray", 3, {rotation:myGrayX, x:myGrayX, ease:Power4.easeOut});
    myGrayX+=myStart;
});

myPink.addEventListener('mousemove', function(event) {
    // only has to deal with event bubbling
    //event.stopPropagation();
    TweenMax.to(".block--pink", 3, {rotation:myPinkX, x:myPinkX, ease:Power4.easeOut});
    myPinkX+=myStart;
});

myGreen.addEventListener('mousemove', function(event) {
    // only has to deal with event bubbling
    //event.stopPropagation();
    TweenMax.to(".block--green", 3, {rotation:myGreenX, x:myGreenX, ease:Power4.easeOut});
    myGreenX+=myStart;
});

myBlue.addEventListener('mousemove', function(event) {
    // only has to deal with event bubbling
    //event.stopPropagation();
    TweenMax.to(".block--blue", 3, {rotation:myBlueX, x:myBlueX, ease:Power4.easeOut});
    myBlueX+=myStart;
});

myRed.addEventListener('mousemove', function(event) {
    // only has to deal with event bubbling
    //event.stopPropagation();
    TweenMax.to(".block--red", 3, {rotation:myRedX, x:myRedX, ease:Power4.easeOut});
    myRedX+=myStart;
});