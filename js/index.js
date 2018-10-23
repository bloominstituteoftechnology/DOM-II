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

function letItgo(){
    alert("let it go! let it go! Can't hold it back anymore!!")
}

headerPic.addEventListener("dragend", thanks)

function thanks(){
    alert("much appreciation")
}

//delete pic
let headerText = document.querySelector('.intro h2')
headerPic.addEventListener('click',displayNone)

function displayNone(){
    headerPic.src = "img/i-cant-believe.gif";
    headerText.textContent = "I can't believe you've done this";

}

headerText.addEventListener('dblclick',changeColor)

function changeColor(){
    headerText.style.color = 'red';
}

headerPic.addEventListener('mouseover',function(){
    headerPic.style.transform = "scale(1.2)";
})
headerPic.addEventListener('mouseleave', function () {
    headerPic.style.transform = "scale(1.0)";
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