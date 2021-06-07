
const buttons = document.querySelectorAll('.btn')

for (let button of buttons) {
    button.addEventListener('click', () => {
        alert('Great Choice!')
    })
}

const nav = document.querySelector('header')
nav.addEventListener('dblclick', (event) => {
    event.target.style.background = 'pink'
})

document.addEventListener('keydown', (event) => {
    alert(`You pressed the '${event.key}' key`)
})
document.addEventListener('wheel', () => {
    document.body.style.background = 'lightgrey'
})

const navItems = document.querySelectorAll('a')
navItems.forEach(el => el.addEventListener('click', (event) => {
    event.preventDefault();
}))

const h1 = document.querySelector('h1');
h1.addEventListener('click', (event) => {
    event.target.style.color = 'red';
    event.stopPropagation();
})

document.body.addEventListener('resize', (event) => {
    console.log(event)
    alert('Resizing!')
})

const bus = document.querySelector('.intro').querySelector('img');
bus.addEventListener('click', () => {
    bus.classList.toggle('off')
})

const busWord = document.querySelector('.bus')
busWord.addEventListener('mouseover', (event) => {
    event.target.style.cursor = 'pointer';
})

busWord.addEventListener('click', (event) => {
    bus.classList.toggle('off')
})
console.log(busWord)

window.addEventListener('load', (event) => {
    alert('page is fully loaded');
});
window.addEventListener('copy', (event) => {
    console.log(event.target)
});

// `You just copied a ${event.target} tag! Now go paste it somehere!`



// button.addEventListener('click', () => {a
//     alert('Test!')
// })

// nav.addEventListener('click', () => {
//     launchButton.removeEventListener('click', showModal)
// })


