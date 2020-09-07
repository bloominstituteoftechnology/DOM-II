// Your code goes here
const newH1 = document.querySelector("h1")
    newH1.addEventListener('dblclick', (event) => {
    event.target.style.color = 'red'
})

const newNav = document.querySelectorAll(".nav")
    newNav.forEach(navigation => {
    navigation.addEventListener('click', (event) => {
    event.target.style.color = "blue"
        })
    })

const newBusIMg = document.querySelector(".intro img")
    newBusIMg.addEventListener('mouseover', () => {
        newBusIMg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSUwIKCooICeQqedLMh3eq_YaS-0SmQwgskTg&usqp=CAU"
    })

const newH2 = document.querySelector(".intro h2")
    newH2.addEventListener('mouseenter', () => {
        newH2.textContent = "PARTY BUS WOOOO"
    })

const h2LetsGo = document.querySelector(".content-section h2")
    h2LetsGo.addEventListener('mouseout', () => {
        h2LetsGo.style.color = "blue"
    })

const middleImg = document.querySelector(".img-content img")
    middleImg.addEventListener('contextmenu', () => {
        middleImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfNikreL2sfwO_bXUSwV-CDu8X129UqWRnEw&usqp=CAU"
    })

