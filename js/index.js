// Your code goes here
const body = document.querySelector('body');
const header = document.querySelector(".main-navigation")
const nav = document.querySelector('.nav');
const logo = document.querySelector(".logo-heading");
const introImg = document.querySelector(".intro img");
const introHeading = document.querySelector(".intro h2");
const content = document.querySelector(".content-section");

// const textContent = document.querySelector(".content-section .text-content");
// const imgContent = document.querySelector(".content-section .img-content");
const destinations = document.querySelector(".content-pick");
const nav1 = nav.querySelector(".nav .nav-link:nth-of-type(1)");
const nav2 = nav.querySelector(".nav .nav-link:nth-of-type(2)");
const nav3 = nav.querySelector(".nav .nav-link:nth-of-type(3)");
const nav4 = nav.querySelector(".nav .nav-link:nth-of-type(4)");

const sun = destinations.querySelector(".content-pick .destination:nth-of-type(1)");
const mountain = destinations.querySelector(".content-pick .destination:nth-of-type(2)");
const island = destinations.querySelector(".content-pick .destination:nth-of-type(3)");

//Adding event listener
body.addEventListener('wheel', e => body.classList.add('transition-color'));
body.addEventListener('keydown', e => body.classList.remove('transition-color'));
body.addEventListener('keypress', e => alert('Use your mouse to navigate through the page.'));
body.addEventListener('keyup', e => e.target.style.backgroundColor = 'lightblue');

//Fun bus image
introImg.addEventListener('dblclick', e => e.target.style.border = "2px solid yellow");

//navigation bar
header.addEventListener('click', e =>  header.classList.add('transition-color'));

nav1.addEventListener('click', e => {
    e.stopImmediatePropagation();
    e.preventDefault();
    alert('There is no home page yet');
});
nav2.addEventListener('click', e => {
    e.stopImmediatePropagation();
    e.preventDefault();
    alert('There is no about us page yet');
});
nav3.addEventListener('click', e => {
    e.stopImmediatePropagation();
    e.preventDefault();
    alert('There is no blog page yet');
});
nav4.addEventListener('click', e => {
    e.stopImmediatePropagation();
    e.preventDefault();
    alert('There is no contact page yet');
});

nav1.addEventListener('mouseover', (e)=> e.target.style.color = 'blue');
nav1.addEventListener('mouseleave',(e) => e.target.style.color = 'black');
nav2.addEventListener('mouseover', (e)=> e.target.style.color = 'orange');
nav2.addEventListener('mouseleave',(e) => e.target.style.color = 'black');
nav3.addEventListener('mouseover', (e)=> e.target.style.color = 'yellow');
nav3.addEventListener('mouseleave',(e) => e.target.style.color = 'black');
nav4.addEventListener('mouseover', (e)=> e.target.style.color = 'red');
nav4.addEventListener('mouseleave',(e) => e.target.style.color = 'black');


//Content Section
const text = content.querySelector(".text-content");
text.addEventListener('copy', e => e.currentTarget.style.color = "red");


sun.addEventListener('click', e => {
   sun.classList.add("destination-sun");
});
mountain.addEventListener('click', e => {
    mountain.classList.add("destination-mountain");
 });
island.addEventListener('click', e => {
    island.classList.add("destination-island");
 });
