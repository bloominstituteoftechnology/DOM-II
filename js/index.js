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


window.onclick = hideContextMenu;

const funBus = document.querySelector('.logo-heading');
funBus.addEventListener("contextmenu", showContextMenu);
const contentDiv = document.querySelector(".main-navigation");
var li = document.createElement("li");


// Right Click Function with Escape
function showContextMenu (e) {
    funBus.style.display = 'block';
    funBus.style.left = event.clientX + 'px';
    funBus.style.top = event.clientY + "px";
    e.preventDefault();
    li.innerHTML = "Cool Menu";
    li.style.border = '1px Solid Black';
    li.style.padding = '10px 5px';
    li.style.borderLeft = "4px solid orangered";
    li.style.backgroundColor= "whitesmoke"
    li.style.fontSize = '16px';
    li.style.width =" 100px";
    li.style.height ="25px";
    li.style.listStyleType = 'none';
    contentDiv.appendChild(li);
}

function hideContextMenu(){
    list = li.style;
    list.display = 'none';
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
const boxed = document.querySelectorAll('div .destination p');
boxed.forEach( boxed => {
    boxed.addEventListener('click', boxes)
  }) 
  
function boxes() {
 this.style.backgroundColor = 'dodgerblue';
   this.style.color ="white";

}


// Adding scrolling
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