// Your code goes here

const navItems = document.querySelectorAll('a');

navItems.addEventListener('click', ()=>{
    event.preventDefault();
});


const bottomButtons = document.querySelectorAll('btn');

bottomButtons.addEventListener('click', (event) => {
    event.target.innerText = 'GO!';
});

const destinationImg = document.querySelector('.content-destination .img');

destinationImg.addEventListener('click', ()=>{
    destinationImg.classList.toggle('img-source');
});