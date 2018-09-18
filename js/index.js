// Your code goes here
// Variables

const mainNav = document.querySelector('.main-navigation .nav-container');
const funBusMain = document.querySelector('.logo-heading');
const nav = document.querySelectorAll('.nav-link');



//Function

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

window.addEventListener('scroll', function() {
    document.body.style.backgroundColor = "aliceblue";
});
