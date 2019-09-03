// Your code goes here

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector(".menu");
let menuStatus = false;

menu.style.marginLeft = '-500px';

function menuToggle(){
    if (menuStatus == false){
        menu.style.marginLeft = '0px';
        menuStatus = true;
    }
    else if (menuStatus == true){
        menu.style.marginLeft = '-500px';
        menuStatus = false;
    }
}

menuBtn.onclick = menuToggle;

let navMouseOver = document.querySelectorAll('.nav-link');
navMouseOver.forEach(item => {
    item.addEventListener("mouseenter", event => {
    event.target.style.color = 'purple';
    })
})
navMouseOver.forEach(item => {
    item.addEventListener("mouseleave", event =>{
    event.target.style.color = 'orange';
    })
});

const headerPic = document.querySelector("header img");
headerPic.addEventListener('mouseenter', item => {
    headerPic.style.transform = 'scale(2)';
    // headerPic.style.overflow = 'hidden';
    //check later....try css??
})

const headerPicDown = document.querySelector('header img');
headerPicDown.addEventListener('mouseleave', item =>{
    headerPicDown.style.transform = 'scale(1)';
})

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
 });