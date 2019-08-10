// Your code goes here

//Event Listeners
/*  
 mouseover
 keydown
 wheel
 drag / drop
 load
 focus
 resize
 scroll
 select
 dblclick */

const signUpBtn = document.querySelectorAll(".btn");

function signUp(){
    prompt("Please enter your name here:", "Name");
    if (confirm){
        alert("Thank you for signing up!");
    }
};

signUpBtn.forEach(function(element){
    element.addEventListener("click", signUp);
});