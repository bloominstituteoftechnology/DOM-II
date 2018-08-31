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
window.onkeydown = listenKeys; 
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
    li.style.heigh ="25px";
    li.style.listStyleType = 'none';
    contentDiv.appendChild(li);
    e.stopPropagation();
    
  
}

function hideContextMenu(){
    list = li.style;
    list.display = 'none';
    

}


function listenKeys (event) {
    var keyCode = event.which || event.keyCode;
    if(keyCode == 27){
        hideContextMenu();
    }
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



 window.addEventListener('scroll', function(){
    const contentText = document.querySlector('.content-pick .destination p');
   const yPosition = window.pageYOffset;
   if (yPosition > 550) {
contentText.style.opacity = '0';
   }else{
    contentText.style.opacity = '1';
   }
 })