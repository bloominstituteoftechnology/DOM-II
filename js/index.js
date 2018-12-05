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

const par = document.querySelectorAll("p");
par.forEach(function(p){
    p.addEventListener("wheel", function(){
        p.style.color ="green";
    })
});

const aNav = document.querySelectorAll("a");
aNav.forEach(function(aNav){
    aNav.addEventListener("click", function(){
        aNav.style.backgroundColor = "red";
    })
    aNav.addEventListener('click',function(e){
        e.preventDefault();
    })
});

const imgs = document.querySelectorAll('img');
imgs[0].addEventListener('drag',function(){
    imgs[0].style.marginTop = "10%";
});
 

 


// function myFunction(x) {
//     x.classList.toggle("fa-thumbs-down");
// })






