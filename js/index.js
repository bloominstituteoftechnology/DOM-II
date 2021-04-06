// Your code goes here

//Elements from the DOM
const signUpBtn = document.querySelector(".btn");
const firstImg = document.querySelector('#first-img');
console.log(signUpBtn);

//One
signUpBtn.addEventListener("click",function(event){
    signUpBtn.style.background = 'red';
})


//two
firstImg.addEventListener("mouseover",function(event){
firstImg.style.filter = "grayscale(100%)";
} )
