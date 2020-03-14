// Your code goes here
const busImage = document.querySelector('img');

busImage.addEventListener('mouseenter', () => {
busImage.style.transform = 'scale(1.2)';
busImage.style.transition = 'all 0.4s';
})

busImage.addEventListener('mouseleave', () => {
    busImage.style.transform = 'scale(1)'
    busImage.style.transition = 'all .4s'
})