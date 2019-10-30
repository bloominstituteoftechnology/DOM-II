// Your code goes here
const mouseHoverLinks = document.querySelectorAll(".nav-link");
console.log(mouseHoverLinks)

mouseHoverLinks[0].addEventListener("mouseover", function(){
    mouseHoverLinks[0].style.color = "red";
})
mouseHoverLinks[1].addEventListener("mouseover",function(){
    mouseHoverLinks[1].style.color = "red";
})

mouseHoverLinks[2].addEventListener("mouseover",function(){
    mouseHoverLinks[2].style.color ="red";
})

mouseHoverLinks[3].addEventListener("mouseover",function(){
    mouseHoverLinks[3].style.color ="red";
})

const mouseOutEvent = document.querySelector('.intro img');
mouseOutEvent.addEventListener('mouseleave', () => {
    mouseOutEvent.style.transform = 'scale(1)';
    mouseOutEvent.style.transform = 'all 0.5s';
});

const busdown = document.querySelector("body");
busdown.addEventListener("keydown", function(press){
if (press.key === 'h') {
    console.log("h")
}
})

//zoom

const letsGo = document.querySelectorAll("h2");
console.log(letsGo);
document.addEventListener('wheel', (zoom)=>{
    letsGo[1].style.transform= "scale(2)";
})

//drag/trop

const dragIt = document.querySelectorAll("h2")

document.addEventListener("drag", ()=>{
    dragIt[2] = event.target;
    console.log(event)
})

//load 

const loadEvent = document.querySelector('.content-destination img');
window.addEventListener('load', event =>{
    loadEvent.textcontent = 'slow bus';
});

//focus 
const focusEvent = document.querySelector('footer');
focusEvent.addEventListener('focus', () => {
    focusEvent.style.background = 'blue';
});

// duble click

const dbClickEvent = document.querySelector('.nav a');
dbClickEvent.addEventListener('dbclick', () => {
    dbClickEvent.textContent = "Yannick's bus";
});

//scroll 
const scrollEvent = document.querySelector('body');
window.addEventListener('scroll', () => {
    body.style.background = 'red';
});

// mouse enter and mouse leave 
const mouseInEvent = document.querySelector('.intro img');
 mouseInEvent.addEventListener('mouseleave',() =>{
    mouseInEvent.style.transform = "scale(1.4)";
    mouseInEvent.style.transform = 'all 0.5s';
 });
