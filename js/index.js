// Your code goes here
//doublclick

const navBar = document.querySelectorAll('.nav a');
navBar.forEach((element) => {
    element.addEventListener("dblclick", () => {
        
            alert('Warning!!! You have clicked an anchor tag');
            element.style.color = 'hotpink';
    
    })
})

//mouseover

const funBus = document.querySelector('.intro img');
funBus.addEventListener('mouseover', function(){
    funBus.style.transform = 'scale(1.2)';
    funBus.style.transition = 'transform 1s';
});

// mouseleave

funBus.addEventListener('mouseleave', function(){
    funBus.style.transform = 'scale(1)';
});

//mouseover

const letsGo = document.querySelector('.content-section .img-content img');
letsGo.addEventListener('mouseover', function(){
    letsGo.style.transform = 'scale(1.2)';
    letsGo.style.transition = 'transform 1s';
});

//resize

const adventurePic = document.querySelector('.content-destination img');
window.addEventListener('resize', () => {
    adventurePic.src = 'https://picsum.photos/seed/picsum/536/354';
});

//Scroll

window.addEventListener('scroll', () => {
    const body = document.querySelector('body');
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    
    const scrolled = window.scrollY;
    
    if(scrolled === scrollable) {
        alert('You\'ve reached the bottom of the window!');
        window.addEventListener('scroll', () => {
            body.style.backgroundColor = 'lightgreen';
            });
    } 
    
});

const header = document.querySelector('header');
header.addEventListener('mousemove', runEvent);
function runEvent(e){
    document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";

}







