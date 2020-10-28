// Your code goes here
let topBar=document.querySelector(".main-navigation")
let navButton=document.querySelectorAll(".nav-link")


topBar.addEventListener("mouseover",(event)=>{
    topBar.classList.add("topMouseOver")
    navButton.classList.add("topMouseOver")
    
})

topBar.addEventListener("mouseout",(event)=>{
    topBar.classList.remove("topMouseOver")})



document.body.addEventListener("wheel",(event)=>{
document.body.style.backgroundColor="red"

})

document.body.addEventListener("keydown",(event)=>{
    document.body.style.color="green"
})