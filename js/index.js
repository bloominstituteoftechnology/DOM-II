// Your code goes here
let mainHeader = document.querySelector('.intro h2');
mainHeader.addEventListener('mouseover', function(event){
    event.target.style.color = "green"
})

let busImg = document.querySelector('header img');
busImg.addEventListener('wheel', function(){
    busImg.style.width ='400px';
},{passive:true})

window.addEventListener('keydown', function(event){
    if(event.key === 'a') {
    let mapImg = document.querySelectorAll('img')[1];
        mapImg.style.display = 'none';
    }
});

window.addEventListener('keyup', function(event){
    if(event.key === 'a') {
        let cityImg = document.querySelectorAll('img')[2];
        cityImg.style.display = 'none';
    }
});

let contentSec = document.querySelector('.content-section');
let inverseSec = document.querySelector('.inverse-content');
contentSec.addEventListener('mouseenter', function(event){
    if (contentSec.style.background === ''){
        event.stopPropagation()
        contentSec.style.background = 'green';
    } else {
        inverseSec.addEventListener('mouseleave', function(){
            inverseSec.style.background = 'green';
        });
    }
});

let header = document.querySelector('.intro');
let contentDestination = document.querySelector('.content-destination');
header.addEventListener('dblclick', function(){
    header.style.background = 'blue';
    contentDestination.style.background = 'blue';
});

let navATags = document.querySelectorAll('nav a');
window.addEventListener('click', function(e){
    e.preventDefault();

})

