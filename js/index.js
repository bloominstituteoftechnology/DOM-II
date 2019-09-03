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