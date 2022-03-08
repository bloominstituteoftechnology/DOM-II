import './less/index.less'

// Your code goes here!
//click
const clickTarget = document.querySelector('.intro img');
const containerHome = document.querySelector('header');



function changeRed(evt) {
   containerHome.style.backgroundColor = 'red';
}
clickTarget.addEventListener("click", changeRed);

//dblclick
const clickTargetTwo = document.querySelector('.content-section .img-content');
const intro = document.querySelector('.intro p');



function changeGreen(evt){
    intro.style.color = 'green';
}
 
clickTargetTwo.addEventListener("dblclick", changeGreen);


//`mouseover`
const targetThree = document.querySelector('.inverse-content');
const sizeImg = document.querySelector('.inverse-content .img-content');


function increaseSize(evt) {
    sizeImg.style.width = '25%';
    sizeImg.style.height = '25%';
}
targetThree.addEventListener('mouseover', increaseSize);

//scroll

function scrolled(evt){
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scroll = window.scrollY;
    if(Math.ceil(scroll) === scrollable){
        alert('You have reached the bottom ser')
    }
}
window.addEventListener('scroll', scrolled)

//keydown

function keydown(evt){
    if (evt.keyCode == "13"){
    alert('Good vibes activated')}
}

window.addEventListener('keydown', keydown, false);


//keyup
function keyup(evt){
    if (evt.keyCode == "13"){
        alert('Good vibes have been revoked, smh')}
}

window.addEventListener('keyup', keyup, false);

//wheel
let scale = 1;
function zoom(event) {

    if (event.deltaY < 0) {
      scale *= event.deltaY * -2;
    }
    else {
      
      scale /= event.deltaY * 2;
    }
}

const letsGoDiv = document.querySelector('.content-section h2')
letsGoDiv.addEventListener('wheel', zoom);




//





//



//
