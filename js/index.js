// Your code goes here

// Variables

const mainNav = document.querySelector('.main-navigation .nav-container');
const funBusMain = document.querySelector('.logo-heading');
const nav = document.querySelectorAll('.nav-link');
const refresh = document.querySelector('fun-bus.jpg'); // Doesn't work yet, trying to figure it out at the moment. Might scrap the idea

//Function

funBusMain.addEventListener('click', () =>{
    funBusMain.style.color = 'dodgerblue';
});

for (let i = 0; i < nav.length; i++){
    nav[i].addEventListener('mouseover', () =>{
        nav[i].style.fontSize = '3rem';
        nav[i].style.color = 'Green';
    });
}

for (let i = 0; i < nav.length; i++){
    nav[i].addEventListener('mouseout', (event) =>{
        nav[i].style.fontSize = '1.5rem';
        nav[i].style.color = 'black';
    });
}

window.addEventListener('scroll', function() {
    document.body.style.backgroundColor = "dodgerblue";
});

refresh.onclick = function button(){  // Doesn't work right now, going to play with code more.
    location.reload();
};