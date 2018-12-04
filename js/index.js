// Your code goes here

const navItems = document.querySelectorAll('a');
console.log(navItems);



navItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.target.classList.toggle('scale-up-center');

    })
});


const busImg = document.querySelector('.intro img');

busImg.addEventListener('mouseover', (e) => {
    busImg.classList.toggle('fade-out-bck');
})


const headers = document.querySelectorAll('h2');
console.log(headers);

headers.forEach((item) => {
    window.addEventListener('scroll', () =>{
        item.classList.toggle('shake-top');
    })
})



const img = document.querySelectorAll('img');
console.log(img);

img.forEach((item) => {
    item.addEventListener('dblclick', (e) => {
        
        e.target.classList.toggle('jello-horizontal');
    })
});


const logo = document.querySelector('.logo-heading');
console.log(logo);

window.addEventListener('load', () => {
    logo.classList.toggle('focus-in-expand')
})










