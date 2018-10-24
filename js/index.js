// Your code goes here
const haveFunImg = document.querySelectorAll('.img-fluid')
console.log(haveFunImg);
haveFunImg.addEventListener('mouseover', function(event){
    haveFunImg.classList.toggle('display-none')
});

const homeColor = document.querySelector('html');

    homeColor.addEventListener('click', function(event){
        event.target.style.background = 'lightyellow'
    });


const h1Tag = document.querySelector('h1');
h1Tag.addEventListener('dblclick', function(event){
    event.currentTarget.textContent = 'Adventure Awaits'
});

const destination = document.querySelector('.content-destination');
destination.addEventListener('click', function(event){
    TweenMax.to(".content-destination", 5, {rotation:360, ease:Power4.easeOut}) 
})

const h2Tag = document.querySelector('h2');
h2Tag.addEventListener('copy', function(event){
    event.currentTarget.style.color = 'green'
})

const h2Tag = document.addEventListener('copy', () => {
    console.log("Copied to clipboard!");
})
