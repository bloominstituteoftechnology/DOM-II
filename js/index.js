// Your code goes here

//mouseover nav//

let test = document.querySelector('.main-navigation')

test.addEventListener("mouseover", event => {
    event.preventDefault()
    event.target.style.color = "orange";
    setTimeout(function () {
        event.target.style.color = ""
    }, 500)
})

//change image on keydown//

let image = document.querySelector('img')

window.addEventListener('keydown', event => {
    if (event.code === 'Backspace') {
        image.setAttribute('src', 'https://images.unsplash.com/photo-1488740304459-45c4277e7daf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')
    }
})

//change paragraph color on keydown//

let paragraph = document.querySelector('p')

window.addEventListener('keydown', event => {
    if (event.which === 191) {
        paragraph.style.color = 'orange'
    }
})

image.addEventListener('drag', event => {
    document.body.style.backgroundColor = '#111'

})

image.addEventListener('dragend', event => {
    document.body.style.backgroundColor = 'green'
})


window.addEventListener('resize', event => {
    document.body.style.fontWeight = 'bold'
    setTimeout(function () {
        document.body.style.fontWeight = ''
    }, 500)
    console.log('resize me')
})

let original = document.body.innerHTML
console.log(document.body)

window.addEventListener('scroll', event => {
    document.body.textContent = 'POOP SANDWICH'
    setTimeout(function () {
        document.body.innerHTML = original
    }, 500)
})

window.addEventListener('contextmenu', event => {
    document.body.style.display = 'flex'
})

zoom = window.addEventListener('wheel', event => {
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    move.style.transform = `scale(${scale})`;
})

let scale = 1;
const move = document.querySelector('body');
move.onwheel = zoom;





