// Your code goes here
var each = [].forEach;
const nav = document.querySelectorAll('.nav-link');
each.call( nav, function(e)
{
    e.addEventListener('mouseover', function(event){
        navy = event.target.style;
     
        navy.borderBottom = '1px solid dodgerblue';

    });
    e.addEventListener('mouseout', function(){
        navy.borderBottom = '';
    })
}
);

// This was my first try ad adding a right click. It works only once.
let menu = document.querySelector('.context-menu');
console.log(menu);
menu.classList.add('off');

let bodie = document.querySelector('body');
bodie.addEventListener('contextmenu', showmenu);

//add a listener for leaving the menu and hiding it
menu.addEventListener('mouseleave', hidemenu);


function showmenu(ev) {
    //stop the real right click menu
    ev.preventDefault();
    //show the custom menu
    console.log(ev.clientX, ev.clientY);
    menu.style.top = `${ev.clientY - 20}px`;
    menu.style.left = `${ev.clientX - 20}px`;
    menu.classList.remove('off');
}

function hidemenu(ev) {
    menu.classList.add('off');
    menu.style.top = '-200%';
    menu.style.left = '-200%';
}

// Wheel in the Bus Img 
let intro = document.querySelector('.intro img'); 
intro.addEventListener("wheel", wheelMe);
intro.title = 'FUN BUS! READY TO ROLL!'
function wheelMe() {
intro.setAttribute('src', '/img/newfun.png');
}


// Double Clicking the Content
const contentTop = document.querySelector('.content-section p');
contentTop.addEventListener("dblclick", doubleClick);
function doubleClick (){
    contentTop.innerHTML = " I was double-clicked on and added more content here.";

}


// Alert Message On First Signup
const signUp = document.querySelector(".btn");
signUp.addEventListener('click',getStarted);
// Action to the button to alert user.
function getStarted (){

  alert("Let's Get it STARTED");
}

// When the window resizes this woill count as you resize the window in
// first p tag on Destination
window.addEventListener("resize", newResize);

var x = 0;
function newResize(event){

  
var txt = ` The Window was resized ${x +=1}`
document.querySelector('div .destination p').innerHTML= txt;

}
//adding color to the lower section like water

const boxed = document.querySelectorAll('div .destination');
const boxes = function () {
    this.style.backgroundColor = 'dodgerblue';
    this.style.color = "white";
}
boxed.forEach(boxed => boxed.addEventListener('click', boxes));






// Adding scrolling happy figured out scrolling!
let mainNav = document.querySelector('.main-navigation');

function scroll(){

var pos = window.pageYOffset;

if(pos > 200) {
    mainNav.style.height = "60px";
}
else {
    mainNav.style.height = "100px"
}
}
window.addEventListener("scroll", scroll);