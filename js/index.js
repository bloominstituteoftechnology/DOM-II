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







