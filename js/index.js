// Your code goes here
// import { gsap } from "gsap/dist/gsap";
// import { ExpoScaleEase, RoughEase, SlowMo } from "gsap/dist/EasePack";
// import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
// import { TextPlugin } from "gsap/dist/TextPlugin";


// gsap.registerPlugin(MotionPathPlugin, TextPlugin, ExpoScaleEase, RoughEase, SlowMo);

// gsap.from('img', {opacity:0, duration:5, y:30, opacity:0})


const logo = document.querySelector(".logo-heading")
logo.addEventListener("dblclick", ()=>{
    logo.style.color="red";
    logo.style.fontSize="100px";
})

const secondimg = document.querySelector(".img2")
console.log(secondimg)
secondimg.addEventListener("mouseenter", function(){
    secondimg.src ="https://d1vki863cvir6c.cloudfront.net/uploads/topic/image/635/lambdaschool.png"
})

navlink = document.querySelector(".nav");
navlink.addEventListener("mouseover", function(event){
    event.target.style.color="red";

    setTimeout(function(){
       
        event.target.style.color= "";
    }, 500);
}, false);

const funbuspic = document.querySelector(".funimg");
 funbuspic.addEventListener("mouseenter", function(){
    funbuspic.style.transform = "scale(1.6)";
    funbuspic.style.transition = "transform 1s";

 })

 const funbuspic1 = document.querySelector(".funimg");
 funbuspic1.addEventListener("mouseleave", function() {
    funbuspic.style.transform = "scale(1)";
})

let text1 = document.querySelectorAll( "h2")
text1.forEach((element)=>{
    element.addEventListener("mouseover", ()=>{
        element.style.color = "red";

setTimeout(function(){event.target.style.color="";
},5000);
}, false)

    })

    window.addEventListener('scroll', ()=>{
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled =  window.scrollY;
        console.log(scrolled);
        console.log(scrollable)

        if (Math.ceil(scrolled) === scrollable) {
            alert('you are at the bottom of the page')
        }
        
    })