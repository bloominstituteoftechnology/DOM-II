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

// const funImg = document.querySelector('.content-section img');

//     funImg.addEventListener('keydown', function(event) {
//         event.target.style.transform = 'rotate(360)';
//         event.target.style.transition = 'transform 2s';
//     })

const funSun = document.querySelector('.destination h4');

funSun.addEventListener('copy', (event) => {
    event.target.style.color = 'red';
})

const navStyle = document.querySelector('.nav');

navStyle.addEventListener('mouseover', () => {
    navStyle.style.transform = 'scale(3)';
    navStyle.style.transition = 'transform 1s';
});

const foot = document.querySelector('.footer');
foot.addEventListener('mouseenter', () => {
    foot.style.backgroundColor = 'pink';
    },
    foot.addEventListener('mouseleave', () => {
        foot.style.backgroundColor = 'blue'
    })
    )

const stopProp = document.querySelector('.destination');
stopProp.addEventListener('wheel', (event) => {
    stopProp.style.transform = 'rotate(360deg)'
    stopProp.style.transition = '.8s'
    event.stopPropagation()

} )

const fancyBtn = document.querySelector('.destination .btn');
fancyBtn.addEventListener('mousedown', () => {
    fancyBtn.style.backgroundColor = 'silver';
})

const adventure = document.querySelector('.text-content')
console.log(adventure)
 adventure.addEventListener('mousemove', colorVariant);
function colorVariant(event){
    adventure.style.backgroundColor = `rgb(${event.offsetX}, ${event.offsetY}, 79)`
}




