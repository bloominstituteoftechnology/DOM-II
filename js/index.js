// Your code goes here

const body = document.querySelector('body');
body.addEventListener('mouseover', () => {
    body.style.backgroundColor = 'lime';

    body.addEventListener('mouseleave', () => {
        body.style.backgroundColor = 'white';
})
});

const funBus = document.querySelector('.intro img');
console.log(funBus);
funBus.addEventListener('mouseenter', () => {
    funBus.style.transform = 'scale(2.25)';
})


