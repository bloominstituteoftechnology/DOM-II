// Your code goes here
const busPic = document.querySelector('img');
busPic.addEventListener("mouseover",(event)=> {
    busPic.style.transform = "scale(1.2)";
})
busPic.addEventListener("mouseleave",(event)=> {
    busPic.style.transform = "scale(1.0)";
})


const doubleclick = document.querySelector('h2');
doubleclick.addEventListener('dblclick', function() {
    doubleclick.style.color = "pink";
        });

const go = document.querySelector('.go')
window.addEventListener('resize',()=>{
    go.style.color = "red";
});


const form = document.getElementById("form");
form.addEventListener('focus',(e)=>{
    e.target.style.background = '#DCEDC1'
},true);
form.addEventListener('blur',(e)=>{
    e.target.style.background = ''
},true);

window.addEventListener('load',()=>
alert('loaded!!!'));

window.addEventListener('scroll',()=>
console.log('scrolled!!!!'));

const imgcontent = document.querySelectorAll(".img-content");
imgcontent.addEventListener('click',()=>{
    gsap.to(".img-content",{
        duration:1,
        x:200,
        scale:2,
        rotate:180
    })
})