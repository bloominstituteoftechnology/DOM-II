// Your code goes here
const logo = document.querySelector('.logo-heading')
logo.addEventListener('mouseover', function (){
    logo.style.color =  'Blue';
    logo.style.fontSize = '5.6rem';
});
const nav1 = document.querySelectorAll('.nav a');
nav1.forEach(function(element){
    element.addEventListener('click', function(){
        element.style.backgroundColor = 'yellow';
    })
});
    

const keyD = document.querySelector('body')
keyD.addEventListener('keydown',function(){
    keyD.style.color = 'red';
});

const keyU = document.querySelector('body')
keyU.addEventListener('keyup', function(){
    keyU.style.color = 'green';
})

const intro = document.querySelector('.text-content h2')
intro.addEventListener('mouseenter', function(){
    intro.style.color = 'pink';
});
const inverse = document.querySelector('.inverse-content h2')
inverse.addEventListener("mousedown", function(){
    inverse.style.color = 'orange';
});
const destination = document.querySelector('.content-destination')
destination.addEventListener('mouseup', function(){
    destination.style.color = 'DarkGreen'
})
const go = document.querySelector('.intro')
go.addEventListener('dblclick', function(){
    go.style.backgroundColor = 'tan';
})
const footer = document.querySelector('.footer p')
footer.addEventListener('mouseleave', function(){
    footer.style.color = 'teal';
})
const foot = document.querySelector('.footer')
foot.addEventListener('auxclick', function(){
    foot.style.backgroundColor = 'red';
})