// Your code goes here


// ==================================== BUTTONS

const buttons = document.querySelectorAll(".btn");

buttons[0].addEventListener("mouseover", function(event) {
    event.target.style.backgroundColor = "red";
    event.target.style.color = "black";
    event.target.textContent = "Hi!";

})

buttons[1].addEventListener("mouseover", function(event) {
    event.target.style.backgroundColor = "green";
    event.target.style.color = "red";
    event.target.textContent = "Hello!";

})

buttons[2].addEventListener("mouseover", function(event) {
    event.target.style.backgroundColor = "black";
    event.target.style.color = "green";
    event.target.textContent = "Hey!";

});


//============================================== HEADER H1




//============================================== NAV

const nav = document.querySelector(".nav");

nav.addEventListener('click', function(event) {
    event.target.style.color = "red";
    console.log("Link was clicked!");
})


//============================================== WINDOW

window.addEventListener("scroll", function(event) {
    console.log(event)
})

//============================================== P


