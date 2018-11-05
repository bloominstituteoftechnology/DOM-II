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
let header = document.querySelector('header').setAttribute("style", "z-index: 1;");
let imgTages = document.querySelectorAll('.content-section img');
let imgParent = document.querySelectorAll('.img-content')
let title, title2; 
title = title2 = document.createElement("div");
    
imgTages[0].addEventListener("mouseover", function(event) { 
    title.textContent = "Hi there!"
    imgParent[0].setAttribute("style", "position: relative;")
    imgParent[0].prepend(title);
    
    title.setAttribute("style", "width: 98%; text-align: center; background-color: rgba(255, 255, 255, 0.6); font-family: Indie Flower, cursive; font-size: 50px; color: salmon; position: absolute; top: 42%; display: block;");

    setTimeout(function() {
        title.setAttribute("style", "display: none;")
    }, 500);
}, false);


// Click Event
let counter = 0;
imgParent[1].addEventListener("mouseover", (event) => {
    title2.textContent = "Click here to find Location"
    imgParent[1].setAttribute("style", "position: relative;")
    imgParent[1].prepend(title2);

    title2.setAttribute("style", "width: 98%; text-align: center; background-color: rgba(255, 255, 255, 0.6); font-family: Indie Flower, cursive; font-size: 50px; color: white; position: absolute; top: 32%; display: block;");
});

imgParent[1].addEventListener("click", (event) => {
       counter++
    if (counter < 5){
        console.log(counter)
    }
   else if (counter >= 5 && counter < 8 ){
        title2.textContent = "Wow already 5+ Click! ok Lets go!"
        console.log(counter)
   }
   else {
        title2.textContent = "Haha ok to Peru we go!"
        console.log(counter)
   }
});


// Keydown Event
document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    alert('keydown event\n\n' + 'Did you press ' + keyName + '?');
  });


//Wheel Event
let wheelCount = 0;
document.addEventListener("wheel", (event) => {

    let header = document.querySelector('header')
    
    if (wheelCount < 1 ){
        let newElement = document.createElement("div");
        newElement.setAttribute("style", "width: 173px; height: 89px; text-align: center; font-size: 2rem; color: salmon;     border: 2px dashed lightcyan; background-color: rgba(255, 255, 255, 0.6); position: fixed; top: 100px; left: 25px");
        
        newElement.textContent = "Don't forget to contact our rep about your new trip with Fun Bus!";
        header.prepend(newElement);

        wheelCount++
    }
 
});
