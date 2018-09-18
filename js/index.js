// Your code goes here
// Header image mouseover
document.querySelector('.intro img').addEventListener('mouseover', (e) => {
    e.target.style.border = '3px solid black';
    setTimeout(() => {
        e.target.style.border = '';
    }, 1500)
});
