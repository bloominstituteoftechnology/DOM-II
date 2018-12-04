// Your code goes here

// Window 

window.addEventListener("keydown", function(element){
    let keyName = element.key;
    this.alert ("Watch the keyboard, you hit " + keyName);
} );

window.addEventListener("contextmenu", function(element){
    this.alert("Thanks for right clicking!");
});

// Nav Bar

const navBtn = document.querySelectorAll('a');

navBtn[1].addEventListener("click", function(event) {
  event.preventDefault();
});

// Scroll and Wheel for container

const mainPage = document.querySelectorAll(".content-section");
mainPage[0].addEventListener("wheel", function(event) {
    event.target.style.background = "pink";
});
mainPage[1].addEventListener("wheel", function(event) {
    event.target.style.background = "pink";
});

const mainParas = document.querySelectorAll(".text-content");
mainParas[0].addEventListener("wheel", function(event){
    event.stopPropagation();
    event.target.style.background = "lightblue";
});


// Button Events

buttonAnim = Array.from(document.querySelectorAll(".btn"));

buttonAnim.forEach(function(element){
    element.addEventListener("mouseover", function(){
    event.target.textContent = "Click For Fun!";
    event.target.style.textAlign = "center"; 
    });
});

buttonAnim.forEach(function(element){
    element.addEventListener("mouseout", function(){
    event.target.textContent = "Sign Me Up!";
    });
});

  // H2 Color Change

const headerTwos = document.querySelectorAll("h2");

headerTwos.forEach(function(element){
    element.addEventListener("click", function(){
        event.target.style.color = "red";
    });
});

headerTwos.forEach(function(element){
    element.addEventListener("dblclick", function() {
        event.target.style.color = "black";
    });
});


// Footer Input Form

const paraList = document.querySelectorAll("p");
paraList.forEach(function(element){
    element.addEventListener("copy", function(){
        alert("Please give credit when copying material from our page!");
    });
});

const inputForm = document.createElement('form');
inputForm.textContent = "Enter Your Email For Travel Updates!";
inputForm.style.textAlign = "center";
inputForm.style.fontSize = "1.4rem";
inputForm.style.paddingBottom = "1.2rem";

const footerForm = document.querySelector("footer");
footerForm.appendChild(inputForm);

const inputData = document.createElement('input');
inputForm.appendChild(inputData);
inputData.style.marginLeft = "1rem";

inputForm.addEventListener("focus", function(event) {
  event.target.style.background = "lightblue";   
}, true);

inputForm.addEventListener("blur", function(event) {
  event.target.style.background = "white";    
}, true);

inputData.addEventListener("mousedown", function(event) {
    event.target.textContent = "Press enter to submit";
})

// const formButton = document.createElement('button');
// inputForm.appendChild(formButton);
// formButton.style.marginLeft = "1rem";
// formButton.style.padding = "1.2rem 3rem .8rem 3rem";
// formButton.style.innerHTML = "Click to Submit";