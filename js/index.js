// Your code goes here
const body = document.querySelector('body')
body.addEventListener("click", (event)=>{
    event.target.style.backgroundColor = "aqua"
})

const logo = document.querySelector('.logo-heading')
logo.addEventListener("mouseover", ()=>{
    logo.style.transform = "rotate(360deg)";
    logo.style.transition = "transform .5s";
})

const navigation = document.querySelector('.nav')
navigation.addEventListener('mouseover', (event) => {
    if(event.target.style.color === "pink"){
        event.target.style.color = "black"
    }else {
        event.target.style.color = "pink";
    }
})


const funBusImg = document.querySelectorAll('img')[0]
funBusImg.addEventListener("auxclick",()=>{
    funBusImg.style.transform = "rotateY(360deg)";
    funBusImg.style.transition = "transform 1s";
})
const intro = document.querySelector('.intro p')
intro.addEventListener('select', (event)=>{
    event.target.style.color = "gray";
})
const adventureImg = document.querySelectorAll('img')[1]
adventureImg.addEventListener('dblclick',(event)=>{
event.target.style.transform = "rotateZ(360deg)";
event.target.style.transition = "transform 1s";
})

const waterImg = document.querySelectorAll('img')[2]
waterImg.addEventListener('mousemove', ()=>{
    waterImg.style.transform = "skewY(360deg)";
    waterImg.style.transition = "transform 1s"
})

const destination = document.querySelector('.content-destination p')
destination.addEventListener('mousedown', ()=>{
    destination.style.color = "red";

})
destination.addEventListener('mouseup', ()=>{
    destination.style.color = "purple"

})



const boatImg = document.querySelectorAll('img')[3]
boatImg.addEventListener("mouseenter", function(){
    boatImg.style.transform = "scale(1.9)";
    boatImg.style.transition = "transform 0.2s";
})
boatImg.addEventListener("mouseleave",()=>{
    boatImg.style.transform = "scale(1)"
}) 