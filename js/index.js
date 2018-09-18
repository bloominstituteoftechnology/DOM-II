// Your code goes here

document.getElementById('nav').addEventListener('click',event=>{
    document.querySelector('body').classList.toggle('changeBG2'); 
})

document.querySelector('#lnkHome').addEventListener('mouseover',event=>{
    event.target.classList.toggle('moveLink');
})
document.querySelector('#lnkAbout').addEventListener('click',event=>{
    event.stopPropagation();
    event.target.classList.toggle('makeBlink');
})
document.querySelector('#lnkBlog').addEventListener('dblclick',event=>{
    event.target.style.color="red";
})
window.addEventListener('load',event=>{
    //alert('helloooo there')
})



window.addEventListener('resize',event=>{
    alert('hey stop pulling on me');
})

window.addEventListener('scroll',event=>{
    document.querySelector('body').classList.toggle('changeBG')
})

window.addEventListener('WheelEvent',event=>{
    document.querySelector('body').classList.toggle('changeBG2')
})

let element = document.getElementById('imgDrag')
console.log(element)
element.addEventListener('ondragstart',event=>{
    console.log('whaaat');
})

let smelement = document.getElementById('imgDrag')
console.log(smelement)
smelement.addEventListener('ondrag',event=>{
    console.log('whaaatsss');
})


let navLinks = document.querySelectorAll('nav a');
navLinks.forEach(element =>{
    element.addEventListener('click',(element) =>{
        element.preventDefault();
    })
    
})


window.addEventListener('scroll',event=>{
    TweenMax.to('.logo',1,{left:1500});
})




setInterval(()=>{
    TweenMax.to('.logo',1,{right:1500});
},2000)

