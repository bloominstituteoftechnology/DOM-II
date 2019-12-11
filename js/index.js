// Your code goes here

// 1
const mapImg = document.querySelector('.img-content');
mapImg.addEventListener('mouseenter', (event) => {
mapImg.style.transform = "scale(1.1)";
mapImg.style.transition = "all 0.3s";
});

// 2
mapImg.addEventListener('mouseleave', (event) => {
    mapImg.style.transform = "scale(1.0)";
    mapImg.style.transition = "all 0.3s";
});


