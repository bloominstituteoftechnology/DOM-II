// Your code goes here
const button = document.querySelectorAll(".btn");
button.forEach(function(button){
    button.addEventListener("mouseover", function(){
        button.style.backgroundColor = "pink";
        
    }) 
    button.addEventListener("mouseover", function(e){
    e.preventDefault();
    })
});

const logo = document.querySelector(".logo-heading")
logo.addEventListener("click", function(e){
    logo.style.color = "blue";
})

const navigation = document.querySelector(".nav");
    document.addEventListener("dblclick", function(e){
         e.target.style.opacity = .2;
    });

   


// function myFunction(x) {
//     x.classList.toggle("fa-thumbs-down");
// })






