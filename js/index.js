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
})

let contentSec = document.querySelector('.content-section');
contentSec.addEventListener('mouseenter',)
console.log(contentSec);

let inverseSec = document.querySelector('.inverse-content');
console.log(inverseSec);