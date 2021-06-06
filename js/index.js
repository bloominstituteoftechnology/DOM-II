function zoom(event) {
    event.preventDefault()

    scale += event.deltaY * -0.01

    scale = Math.min(Math.max(.125, scale), 4)

    funBus.style.transform = `scale(${scale})`
}

let scale = 1
const funBus = document.querySelector('.logo-heading')
funBus.onwheel = zoom


const introColor = document.querySelector('.intro')
introColor.addEventListener("mouseover", (event) => {
    event.target.style.color = "pink"

    setTimeout(() => {
        event.target.style.color = ""
    }, 500)
}, false)

const invContent = document.querySelector('.inverse-content')
invContent.addEventListener("mouseover", (event) => {
    event.target.style.color = "blue"

    setTimeout(() => {
        event.target.style.color = ""
    }, 500)
}, false)

const copyright = document.querySelector('.footer')
copyright.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "red"

    setTimeout(() => {
        event.target.style.backgroundColor = ""
    }, 500)
}, false)


const destination = document.querySelector('.content-destination')
destination.addEventListener('dblclick', (event) => {
    destination.style.backgroundColor = "cyan"
})

const contSect = document.querySelector('.content-section')
contSect.addEventListener('dblclick', (event) => {
    contSect.style.color = "white"
})

const coffeeImg = document.querySelectorAll('.img-content img')[0]
coffeeImg.addEventListener("mouseover", event => {
    event.target.style.transform = "skewy(360deg)";
    event.target.style.transition = "transform 0.5s";
})

const nav = document.querySelector('.nav a')
nav.addEventListener("click", (event) => {
    console.log('Oops, no can do.')
})

const buttons = document.querySelector(".btn")
buttons.addEventListener("click", (event) => {
    console.log('Oops, no can do.')
})