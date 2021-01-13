// Your code goes here
const navBar = document.querySelectorAll("a")
const button = document.querySelectorAll(".btn")

//imgs

const topImg = document.querySelector(".intro img")
const midImg = document.querySelectorAll(".img-content img")
const lastImg = document.querySelector(".content-destination img")

// headings

const intro = document.querySelector(".intro h2")
const middle = document.querySelectorAll(".text-content h2")
const last = document.querySelector(".content-destination h2")



navBar[0].addEventListener('mouseover', function(event){
    event.target.style.color = "orange";
  
})

navBar[1].addEventListener('mouseover', function(event){
    event.target.style.color = "yellow";
  
})

navBar[2].addEventListener('mouseover', function(event){
    event.target.style.color = "brown";
 
})

navBar[3].addEventListener('mouseover', function(event){
    event.target.style.color = "pink";

})

navBar[0].addEventListener("mouseleave", function(event){
    event.target.style.color = "purple";
})

navBar[1].addEventListener("mouseleave", function(event){
    event.target.style.color = "blue";
})

navBar[2].addEventListener("mouseleave", function(event){
    event.target.style.color = "green";
})

navBar[3].addEventListener("mouseleave", function(event){
    event.target.style.color = "red";
})

topImg.addEventListener("click", function(event){
    alert("MAGIC SKOOOOOOL BUSSSSSSSS DOWN");
})


midImg[0].addEventListener("dblclick", function(event){
    alert("Secret Discount Code : 5050")
})

middle[0].addEventListener("mousemove", function(event){
    event.target.style.color = "Teal";
})

middle[1].addEventListener("mouseenter", function(event){
    event.target.style.opacity = "50%";
})

last.addEventListener("mouseover", function(event){
    event.target.style.opacity = "20%";
})

middle[1].addEventListener("mouseleave", function(event){
    event.target.style.opacity = "100%";
})

last.addEventListener("mouseleave", function(event){
    event.target.style.opacity = "100%";
})

button[0].addEventListener("mouseover", function(event){
    event.target.style.color = "red";
    event.target.style['background-color'] = "yellow"
})

button[1].addEventListener("mouseover", function(event){
    event.target.style.color = "red";
    event.target.style['background-color'] = "yellow"
})