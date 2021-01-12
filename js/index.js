// Your code goes here
const header = document.querySelector('header');
const funBus = header.querySelector('h1');
funBus.onclick = function (event) {
    funBus.style.color = 'blue';
    funBus.style.fontSize = '5em';
    console.log("you clicked the fun bus");
};

document.addEventListener("keydown", function(event) {
    if (event.key === 'Escape'){
        funBus.style.color = 'green';
    }
});

funBus.addEventListener("mouseover", function(event){
    funBus.style.color = 'orange';

setTimeout(function() {
    funBus.style.color = "";
}, 500);
}, false);                  //sets the color back

const introSec = document.querySelector('.intro');
const introImg = introSec.querySelector('img');

introImg.addEventListener("wheel", zoom);
function zoom(){
    this.style.width = "150%";
    this.style.height = "150%";
}

window.addEventListener('load', (event) => {
    console.log('Page is Fully Loaded');
});

const navItems = document.querySelectorAll('nav a');
    Array.from(navItems).forEach(elm => {
        elm.addEventListener('click', function(event){
            event.target.style.color = 'green';
        });
    });


const contentSection = document.querySelector('.content-section');

contentSection.addEventListener('dblclick', function(event){
    contentSection.style.background = 'pink';
    contentSection.style.fontFamily = 'Arial';
    contentSection.style.fontWeight = 'bold';
});

const destination = document.querySelector('.content-destination');
destination.addEventListener("resize", function(event){
    destination.style.background = 'red';
});