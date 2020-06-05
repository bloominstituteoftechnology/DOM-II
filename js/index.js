// Your code goes here

const body = document.querySelector('body');
body.addEventListener('mouseover', () => {
    body.style.backgroundColor = 'lime';

    body.addEventListener('mouseleave', () => {
        body.style.backgroundColor = 'white';
})
});


