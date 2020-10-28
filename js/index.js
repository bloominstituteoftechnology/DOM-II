// Your code goes here
let topBar=document.querySelector(".main-navigation")



topBar.addEventListener("mouseover",(event)=>{
    topBar.classList.add("topMouseOver")
    
    
})

topBar.addEventListener("mouseout",(event)=>{
    topBar.classList.remove("topMouseOver")})


let dBody=document.querySelector("body")

function scrollFunction(event){
    dBody.classList.add("rBody")
    setInterval(()=>dBody.classList.toggle("gBody"),1000);
    dBody.removeEventListener("wheel",(scrollFunction))
}


dBody.addEventListener("wheel",(scrollFunction))

document.body.addEventListener("keydown",(event)=>{
    document.body.style.color="green"
})

let navLinks=document.querySelectorAll(".nav-link")

Array.from(navLinks).forEach(function (link){
    
    link.addEventListener("dblclick", function (event){
        
        event.target.style.fontSize="5rem"
        
    })
})




dBody.addEventListener("click", (event)=>{
    dBody.style.color="red"
})

topBar.addEventListener("click", function(event){
    event.stopImmediatePropagation()
})

window=document.querySelector("window")

window.addEventListener("resize",(event)=>{
    dBody.style.color="black"
})
let busWords=document.querySelector(".logo-heading")
let busPic=document.querySelector(".busPic")

busPic.addEventListener("click",(event)=>{
    busWords.style.fontSize="+22rem"
   
})

let footer=document.querySelector(".footer")

footer.classList.add("rBody")

window.addEventListener("mousemove",(event)=>{
    footer.classList.toggle("gBody")
})

let welcome=document.querySelector(".intro h2")

welcome.addEventListener("copy",(event)=>{
    busWords.style.fontSize="+6rem"
})

let footerp=document.querySelector(".footer p")


footerp.addEventListener("cut",(event)=>{
    busWords.style.fontSize="+9rem"
})

let sunButton=document.querySelector(".destination .btn")

sunButton.addEventListener("contextmenu",(event)=>{
    sunButton.style.backgroundColor="purple"
})

window.addEventListener("keyup",(event)=>{
    dBody.style.color="red"
})
