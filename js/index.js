// Your code goes here


//buttons

const navBar = document.querySelectorAll("a")
const button = document.querySelectorAll(".btn")

//imgs

const topImg = document.querySelector(".intro img")
const midImg = document.querySelectorAll(".img-content img")
const lastImg = document.querySelector(".content-destination img")

// headings

const intro = document.querySelector(".intro h2")
const middle = document.querySelector(".text-content h2")
const scroll = document.querySelector("body")


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

midImg[0].addEventListener("keydown", function(event){
    if (event.key === "t"){
        return navBar;
    }
})


scroll.addEventListener("scroll", function(event){
    event.target.style.color = "yellow";
})


