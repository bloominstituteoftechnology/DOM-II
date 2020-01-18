// Your code goes here
const funBusImg = document.querySelector('.intro img');
funBusImg.addEventListener('mouseenter', () => {
    event.target.style.transform = 'scale(1.3)';
})
funBusImg.addEventListener('mouseleave', () => {
    event.target.style.transform = '';
})

const navN = document.querySelectorAll('a')

/* navN[0].addEventListener('keydown', () => {
    event.target.style.color = 'red';
}) */
const everything = document.querySelectorAll('*')

for(let i = 0; i < everything.length; i++) {
    everything[i].addEventListener('keydown', () => {
        event.target.style.zoom = '1.3'
    })
    everything[i].addEventListener('keyup', () => {
        event.target.style.zoom = '1'
    })
    everything[i].addEventListener('click', () => {
        event.target.style.color = 'blue'
    })
    everything[i].addEventListener('contextmenu', () => {
        everything[7].style.backgroundColor = 'yellow'
    })
    everything[i].addEventListener('wheel', () => {
        everything[7].style.backgroundColor = 'green'
    })
    everything[i].addEventListener('select', () => {
        event.target.style.display = 'none'
    })
}

