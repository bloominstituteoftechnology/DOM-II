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

const header = document.querySelector('h1');
header.addEventListener('mouseover', function(){
    header.textContent = "Sorry, Out of service"
});



const button2 = document.querySelectorAll(".btn");
button2.forEach(function(button2){
    button2.addEventListener("mouseover", function(){
        button2.textContent = "Not A good Idea!"
    })
});

const nav2 = document.querySelectorAll(".nav");
nav2.forEach((nav) => {
    nav.addEventListener("mouseover", function(e){
        nav.addEventListener("mouseenter", function(e){
            e.target.style.transform = "scale(2, 2)";
           
        })
        nav.addEventListener("mouseout", function(e) {
            e.target.style.transform = "scale(1,1)";
            
        })
    })
});
const home = document.querySelector('body');
home.addEventListener('keypress', function(e) {
    e.target.style.backgroundColor = 'yellow';
});

const par1 = document.querySelector("p");
home.addEventListener("keyup", function(e){
    e.target.style.color ="red";
});





function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
}






