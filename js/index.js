// Your code goes here


//========== Header event listeners
const pageHeader = document.querySelector('.main-navigation');
pageHeader.addEventListener('mouseenter', function(e) {
    pageHeader.style.backgroundColor = '#17A2B8';
})


const links = document.querySelectorAll('nav-links');
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('mouseover', function(e) {
        links[i].style.color = 'white';
    })
}
pageHeader.removeEventListener('mouseenter', function(e) {
    pageHeader.style.backgroundColor = '#17A2B8';
})


//==========  page event listeners
const home = document.querySelector('.home');
home.addEventListener('wheel', function(e) {
    console.log("Wheeeee! We're scrolling, now.");
})



//========== Main content event listeners
const busPic = document.querySelector('.bus-pic');
busPic.addEventListener('click', function(e) {
    busPic.src = 'img/photo-1464851707681-f9d5fdaccea8.jpeg'
})



const buttons = document.querySelectorAll('.btn');
for (let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener('mouseover', function(e) {
        buttons[i].style.backgroundColor = '#FCB74A';
    })
}