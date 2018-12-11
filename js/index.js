// Your code goes here




// ==================================== BUTTONS

const buttons = document.querySelector(".btn");

buttons.addEventListener("mouseover", function(event) {
    event.target.style.backgroundColor = "red";
    event.target.textContent = "Hi!";

})