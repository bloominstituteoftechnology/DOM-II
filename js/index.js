// Your code goes here

//Change size of image
const firstImage = document.querySelector("header img")
firstImage.addEventListener('mouseover', (event) => {
    event.target.src = "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
})


//change font size with arrows
const titlesH2 = Array.from(document.querySelectorAll("div h2"))
const subText = Array.from(document.querySelectorAll("div p"))

document.addEventListener('keydown', (event) => {
    if(event.key == 'ArrowUp') {
        titlesH2.forEach((title) => {
            title.style.fontSize = '4em'
        })
        subText.forEach((text) => {
            text.style.fontSize = '2em'
        })
    } else if (event.key == 'ArrowDown') {
        titlesH2.forEach((title) => {
            title.style.fontSize = '3.2em'
        })
        subText.forEach((text) => {
            text.style.fontSize = '1.6em'
        })
    }

})


//Showing up modal when web page load
window.addEventListener('load', () => {
    // alert("Welcome... You!")
})


//Create border to all images by double click
const images = document.querySelectorAll("img")

images.forEach(img => {
    img.addEventListener('dblclick', item => {
        console.log('Hola')
        img.style.transition = "all 1s"
        img.style.border = "thick solid #F00"
    })
})


//Navigation

const navLinks = document.querySelectorAll("nav a")

navLinks.forEach(link => {
    link.addEventListener('click', lnk => {
        lnk.preventDefault()
    })
})



//Copy event
const textP = document.querySelectorAll("p, h1, h2, h3, h4")

textP.forEach(text => {
    // console.log(text)
    text.addEventListener('copy', (jeje) => {
        console.log(jeje.target.textContent.toUpperCase())

    })
})