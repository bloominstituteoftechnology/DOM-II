const funBus = document.querySelector('.logo-heading');
funBus.addEventListener('mouseover', function(event){
    event.target.style.color = 'red';
    event.target.style.fontSize = '6rem';
});

const navItems = document.querySelectorAll('.nav-link');
navItems.forEach(function(item) {
    item.addEventListener('click',(item) => { item.preventDefault()});
    item.addEventListener('mouseenter', function() {
        event.target.style.color = 'white';
        event.target.style.background = 'red';
        event.target.style.fontSize = '2.4rem';
        event.target.style.padding = '10px 5px';
    });  
});

const busImg = document.querySelector('.home .intro img');
busImg.addEventListener('mousemove', function(img) {
    TweenMax.to(busImg, 2, {rotation:1080});
});

const introH2 = document.querySelector('.home .intro h2')
introH2.addEventListener('mousedown', function(item) {
    event.target.style.color = 'white';
    event.target.style.background = 'red';
    event.target.style.paddingTop = '20px';
    event.target.style.marginTop = '0px';
    event.target.style.opacity = '.7';
    TweenMax.to(introH2, 2, {rotation:1080});
});

const introContent = document.querySelector('.home .intro p');
introContent.addEventListener('mouseup', function(el) {
    TweenMax.to(introContent, 2, {rotation:720});
    event.target.style.background = 'lightblue';
})

const contentSec = document.querySelectorAll('.home .content-section');
contentSec[0].addEventListener('mouseout', function(el) {
    TweenMax.to(contentSec[0], 2, {rotation:720});
    event.target.style.background = 'lightblue';
})

contentSec[1].addEventListener('mouseleave', function(el) {
    TweenMax.to(contentSec[1], 2, {rotation:-720});
    event.target.style.background = 'navy';
    event.target.style.color = 'white';
})


const body = document.querySelector('body');
body.addEventListener('keydown', function(e) {
    alert('DONT EVEN TRY IT!');
})

const destinations = document.querySelectorAll('.home .destination');
destinations.forEach(function(el) {
    el.addEventListener('click', function() {
        TweenLite.to(destinations, 2, { ease: Bounce.easeOut, x: 200, rotation: 360});
    })
    
})

const button = document.querySelector('.home .destination .btn');
button.addEventListener('click', function(event) {
    event.stopPropagation();
    TweenMax.to(button, 3, {rotation:-360, scale:1.5, x:-100, ease:Power4.easeOut});
});

console.log(destinations);