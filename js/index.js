// Variables
const mainNav = document.querySelector('.main-navigation .nav-container');
const funBusMain = document.querySelector('.logo-heading');
const nav = document.querySelectorAll('.nav-link');
const footer = document.querySelector('.footer');
const imgs = document.querySelectorAll("img");
const body = document.querySelector("body");
const button = document.querySelectorAll('.btn');



/*===================Event listeners===================*/

//click on fun bus logo, changes color
funBusMain.addEventListener('click', () =>{
    funBusMain.style.color = 'darkkhaki';
});

//Nav elements mouseover Grow and Color Change
for (let i = 0; i < nav.length; i++){
    nav[i].addEventListener('mouseover', () =>{
        nav[i].style.fontSize = '1.65rem';
        nav[i].style.color = 'lightseagreen';
    });
}
//Nav elements shrink back and color change
for (let i = 0; i < nav.length; i++){
    nav[i].addEventListener('mouseout', (event) =>{
        nav[i].style.fontSize = '1.6rem';
        nav[i].style.color = 'black';
    });
}
//scrolling changes background
window.addEventListener('scroll', function() {
    document.body.style.backgroundColor = "aliceblue";
});

//scroll over nav makes it blue
mainNav.addEventListener('mouseover', (event) => {  
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.style.backgroundColor = 'aliceblue';
 });

//clicking the body makes it white
body.addEventListener('click',   function()  {   
    this.style.background = 'white';
});

//clicking nav turns it back to white
mainNav.addEventListener('click',   function()  {   
    this.style.background = 'white';
});

//clicking footer makes it white.
footer.addEventListener('click', function(){ 
    this.style.background = 'white';
});

//double clicking body reloads the document
body.addEventListener('dblclick', function(){ 
    location.reload();
});

//mouse over logo makes it big, mouse out shrinks it again
funBusMain.addEventListener('mouseover', (event) =>{ 
    funBusMain.style.fontSize = '5rem';
});
funBusMain.addEventListener('mouseout', (event) =>{ 
    funBusMain.style.fontSize = '3rem';
});




imgs.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    e.target.style.backgroundImage = "src = img/fun-bus.jpg ";
})