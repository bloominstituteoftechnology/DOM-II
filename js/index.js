
const navContainer = document.querySelector(".nav-container");
const logoHeading = document.querySelector(".logo-heading");
const nav = document.querySelectorAll("nav a");
const h2 = document.querySelectorAll(".text-content h2");

navContainer.addEventListener('click', () => {
    logoHeading.style.color = 'red';
});



for(let i=0; i<nav.length; i++) {
    nav[i].addEventListener('mouseover', (e) => {
        console.log('Mouse is over link!');
        e.target.style.color = 'green';
    });
}

for(let i=0;i<nav.length;i++) {
    nav[i].addEventListener('mouseleave', (e) => {
        console.log('Mouse is out!');
        e.target.style.color = '';
    })
}

for(let i=0; i<nav.length; i++) {
    h2.addEventListener('dblclick', (e) => {
        e.target.style.style = "font-size: 2rem";
    });
};









// mouseover

// keydown

// wheel

// drag/drop

// load 

// focus

// resize 

window.addEventListener('resize', () => {
    document.querySelector('body').style = 'background-color: white';
});

// scroll

window.addEventListener('scroll', () => {
    document.querySelector('body').style = 'background-color: black';
});

// select

// dblclick 

