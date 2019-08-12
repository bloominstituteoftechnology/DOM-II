// Your code goes here

let headerBg = document.querySelector(".main-navigation");
let colors = ['#FFFFFF', '#FFEBCD','yellow', '#17A2B8'];
let count = 0;
let BgChange = function(){
    headerBg.style.background = colors[count];
    count++;
    if (count == colors.length){
        count = 0;
    }
}

window.onload = (setInterval(BgChange, 10000));

// Header Background change #1

// let target = function(e){
//     console.log(e)
// }

// document.body.addEventListener("keydown", target); 

let logo = document.querySelector(".logo-heading");
let textChange = function(){
    logo.textContent = "Press Enter for your Bus Pass!"
}
logo.addEventListener("click", textChange);
// Text change #2

let busStop = function(e){
   let bus = document.querySelector('.bus');
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
   audio.currentTime = 0;
   audio.play();
    if (e.keyCode == 13){
        bus.id = "playing";
    }
}

window.addEventListener("keydown", busStop);
// Bus horn on Keydown #3

let links = document.querySelectorAll(".nav-link");
let hoverLink = function(e){
    e.target.style.fontSize = "larger";
    e.target.style.color = "pink";
}

let removeHover = function(e){
    e.target.style.fontSize = "initial";
    e.target.style.color = "black";
}

links.forEach(link => link.addEventListener("mouseover", hoverLink));
// Mouseover on nav link #4
links.forEach(link => link.addEventListener("mouseout", removeHover));
// Mouseout on nav link #5
links.forEach(link => link.addEventListener("click", function(e){
    e.preventDefault();
}));
// Prevent default on Mouse click #6

let buttons = document.querySelectorAll(".btn");
let signups = document.querySelectorAll(".destination");

 let buttonPress = function(e){
   signups.forEach(signup => signup.style.background = "#C0C0C0");
}

signups.forEach(button => button.addEventListener("dblclick", buttonPress));
// sign up background #7

buttons.forEach(function(button){
    button.addEventListener("dblclick", function(e){
    e.target.style.color = "pink";
    e.stopImmediatePropagation();
})});
// sign up button background #8