// Your code goes here
const busImage = document.querySelector('.intro img');

busImage.addEventListener('mouseenter', () => {
    busImage.style.transform = "scale(1.2)";
    busImage.style.transition = "all 0.3s";
})

busImage.addEventListener('mouseleave', () => {
    busImage.style.transform = "scale(1)"
})

const changeImage = document.querySelector('.intro img');
changeImage.addEventListener('dblclick', () => {
    changeImage.src = "./img/bus-fun.jpg";
})