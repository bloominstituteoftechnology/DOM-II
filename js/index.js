// Your code goes here
//Variable Declarations

const mainNav = document.querySelector('.main-navigation .nav-container');
const funBusMain = document.querySelector('.logo-heading');
const nav = document.querySelectorAll('.nav-link');
const test = document.querySelector('h2');
//Function


funBusMain.addEventListener('click', () => {
    funBusMain.style.color = 'teal';
});

for (let i = 0; i < nav.length; i++) {
    nav[i].addEventListener('mouseover', () => {
        nav[i].style.fontSize = '3rem';
        nav[i].style.color = '#FAD961'
    });
}

for (let i = 0; i < nav.length; i++) {
    nav[i].addEventListener('mouseout', (event) => {
       nav[i].style.fontSize = '1.5rem';
        nav[i].style.color = 'black';
    });
}

window.addEventListener('scroll', function() {
    document.querySelector('body').style = 
    'background-image: linear-gradient(0deg, #D9AFD9 0%, #97D9E1 50%, #ffffff 100%)';
    ;
});

test.addEventListener('dblclick', () => {
    console.log ('you hit h2');
    test.classList.toggle('type');
});
const mainNav = document.querySelector(".nav-container")
mainNav.addEventListener("dblclick", function(e) {
    mainNav.style.backgroundColor = "yellow";
})




 
