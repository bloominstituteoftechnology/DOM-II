// Your code goes here

// first button text can turn red
let buttons = document.querySelectorAll(".btn");

buttons[0].addEventListener('click', function () {
    buttons[0].style.color = "red";
});

//dont copy my page!
document.addEventListener('copy',stop);

function stop(){
    alert("dont touch that");
}


// document.addEventListener('onLoad', adBlock)

window.onload =function adBlock(){
    alert("please disable Ad Blocker");
}

let headerPic = document.querySelector('.intro img')
console.log(headerPic)

headerPic.addEventListener("dragleave",letItgo)

function letItgo(event){
    alert("let it go! let it go! Can't hold it back anymore!!")
    event.stopPropagation();
}

headerPic.addEventListener("dragend", thanks)

function thanks(){
    alert("much appreciation")
}
let header  = document.querySelector(".intro")

header.addEventListener('click',testPropogation)

function testPropogation(){
    console.log("parent")
}
//change pic
let headerText = document.querySelector('.intro h2')
headerPic.addEventListener('click',displayNone)

function displayNone(event){
    console.log("child")
    headerPic.src = "img/i-cant-believe.gif";
    headerText.textContent = "I can't believe you've done this";
    event.stopPropagation();

}

headerText.addEventListener('dblclick',changeColor)

function changeColor(){
    headerText.style.color = 'red';
}

headerPic.addEventListener('mouseover',function(event){
    headerPic.style.transform = "scale(1.2)";
    event.stopPropagation();
})
headerPic.addEventListener('mouseleave', function (event) {
    headerPic.style.transform = "scale(1.0)";
    event.stopPropagation();
})


let headerP = document.querySelector('.intro p') 
console.log(headerP)

document.addEventListener('scroll',yeet)

function yeet(){
    headerP.innerHTML = "Where did I go!";

}

document.addEventListener('keydown',logKey)

function logKey(){
    console.log("key was pressed")
}


document.addEventListener('resize', reSize)

function reSize(){
    headerP.innerHTML = "Viewport Width Change!!!";
}