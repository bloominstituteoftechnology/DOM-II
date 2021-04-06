// Your code goes here

//Elements from the DOM
const signUpBtn = document.querySelector(".btn");
const firstImg = document.querySelector('#first-img');
const paragraph = document.querySelectorAll('p')

//One
signUpBtn.addEventListener("click",function(event){
    signUpBtn.style.background = 'red';
})


//two
firstImg.addEventListener("mouseover",function(event){
    firstImg.style.filter = "grayscale(100%)";
} )

// three
document.addEventListener("keydown",function(event){
    if(event.key === "w"){
        console.log(paragraph);
        paragraph.forEach(item => item.style.color = "white");
    }
})