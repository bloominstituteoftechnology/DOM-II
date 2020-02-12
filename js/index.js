// Your code goes here
const busImg = document.querySelector('.intro');

busImg.addEventListener('click', () => {
    busImg.style.transform = 'skewY(1080deg)'
    busImg.style.transition = 'transform 3s'
})

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('auxclick', () => {
        btn.style.backgroundColor = 'red'
    })
})

const destImg = document.querySelector('.content-destination img');

destImg.addEventListener('dblclick', () => {
    destImg.style.transform = 'translate(50px, 50px';
})

const funImg = document.querySelector('.content-section img');

    funImg.addEventListener('keydown', function(event) {
        event.target.style.transform = 'rotate(360)';
        event.target.style.transition = 'transform 2s';
    })

const funSun = document.querySelector('.destination h4');
console.log(funSun);
funSun.addEventListener('select', (event) => {
    event.target.style.color = 'red';
})

const nav = document.querySelector('.nav');
nav.addEventListener('mouseenter', () => {
    nav.style.stransform = 'scale(3)';
    nav.style.transition = 'transform 1s';
});

