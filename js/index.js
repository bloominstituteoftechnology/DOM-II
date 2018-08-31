// Your code goes here
const logo = document.querySelector('.logo-heading')
logo.addEventListener('mouseover', function (){
    logo.style.color =  'Blue';
    logo.style.fontSize = '5.6rem';
});
const nav1 = document.querySelectorAll('.nav a')
nav1.forEach(function(element){
    element.addEventListener('click', function (event){
    let tag = event.target.style.backgroundColor = 'yellow';
    
    
})
});
const intro = document.querySelector('.intro')
intro.addEventListener('')