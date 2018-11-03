// Your code goes here

// My Variables

// Mouseenter Event
let headerImg = document.querySelector('.intro img');
headerImg.addEventListener("mouseenter", function(event) {   

    let mainHeader = document.querySelector('.intro h2').textContent;

    let colors = ["red", "orange", "green", "blue", "pink"];

    let j = 0;
    let newStr = ""

    for (let i = 0; i < mainHeader.length; i++){

            if (j === colors.length){
                j = 0;
            }
            if(mainHeader.charAt(i) == " "){
                newStr += '<span>' + mainHeader.charAt(i) + '</span>';
                
            }
            else{
                newStr += '<span style="color:' + colors[j] + '">' + mainHeader.charAt(i) + '</span>';
                j++
            }

    }
    let newText = document.querySelector('.intro h2');
    newText.innerHTML = newStr;

    let holder = ""
    setTimeout(function() {
        for (let i = 0; i < mainHeader.length; i++){
            holder += '<span style="color: black">' + mainHeader.charAt(i) + '</span>';

        }
        newText.innerHTML = holder;

    }, 500);
}, false);


// Load Event
// window.addEventListener("load", function(event) {
//     let user = prompt("Hello and welcome to Fun Bus! What is your name?", "");
//     let orinalText = document.querySelector('.intro h2')
//     console.log(orinalText)
//     if (user !== "" && user != null) {
//         orinalText.innerHTML = `Hello ${user}! ${orinalText.textContent}`;
//     }
// });

// Mouseover Event
let imgTages = document.querySelectorAll('.content-section img');
console.log(imgTages)

let imgParent = document.querySelectorAll('.img-content')
let title = document.createElement("div");
    title.textContent = "Hi there!"
    
imgTages[0].addEventListener("mouseover", function(event) { 

    imgParent[0].setAttribute("style", "position: relative;")
    imgParent[0].prepend(title);
    
    title.setAttribute("style", "width: 98%; text-align: center; background-color: rgba(255, 255, 255, 0.6); font-family: Indie Flower, cursive; font-size: 50px; color: salmon; position: absolute; top: 42%; display: block;");

    setTimeout(function() {
        title.setAttribute("style", "display: none;")
    }, 500);
}, false);


