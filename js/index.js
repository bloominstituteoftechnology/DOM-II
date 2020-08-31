// Your code goes here

//mouseover
const footer = document.querySelector('footer');
footer.addEventListener('mouseover', function () {
    footer.style.backgroundColor = '#4B4A67';
});

//wheel
const adventureAwaits = document.querySelector('.inverse-content .text-content');
adventureAwaits.addEventListener('wheel', function () {
    adventureAwaits.style.color = '#DDD1C7';
});

//dbl click
const img = document.querySelector('.intro img');
img.addEventListener('dblclick', function () {
    img.style.hieght = '500px';
    img.style.width = '250px';
});

//contextmenu
const img2 = document.querySelector('.img-content img');
img2.addEventListener('contextmenu', function () {
    img2.style.height = '300px';
    img2.style.width = '250px';
});

//mouseleave
const header = document.querySelector('header')
header.addEventListener('mouseleave', function () {
    header.style.background = '#7E8987';
});

//copy
const destinationPick = document.querySelector('.content-pick');
destinationPick.addEventListener('copy', function () {
    destinationPick.style.color = '#C2CFB2';
    destinationPick.style.background = '#7E8987'
});

//mousemove
const navBar = document.querySelector('.nav');
navBar.addEventListener('mousemove', function () {
    navBar.style.flexDirection = 'row-reverse';
});

//click
const destination = document.querySelectorAll('.destination');
destination.forEach(item => {
    item.addEventListener('click', function () {
        item.style.backgroundColor = '#585A6F';
    })
});

//keyup
const fakePrize = document.querySelector('body');
fakePrize.addEventListener('keyup', event => {
alert( `You Just Won a FREE Trip with FunBus! Click the Sign Up Button Below to Choose Which Trip You'd Like to Take!`)
});

//increase size
const sizeIncrease = document.querySelector('header p');
sizeIncrease.addEventListener('mouseenter', event => {
    event.target.style.fontSize = '24px';
});
sizeIncrease.addEventListener('mouseleave', event => {
    event.target.style.fontSize = '18px';
});

//prevent Default
const anchorTags = document.querySelector('.nav-link');
anchorTags.addEventListener("click", event => {
    event.preventDefault();
});

//stop propagation
//keydown
const intro = document.querySelector('body');
intro.addEventListener('keydown', () =>  {
if(intro.style.backgroundColor ==! '#585A6F')  
    {
        intro.style.backgroundColor = '#585A6F';
}  else if(intro.style.backgroundColor === '#585A6F'){
    intro.style.backgroundColor = '#8DB580';
}   else(intro.style.backgroundColor === '#8DB580');{
    intro.style.backgroundColor = '#585A6F'
}
event.stopPropagation()
});