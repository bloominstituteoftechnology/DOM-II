// Your code goes here
// * `mouseover`
// * `keydown`
// * `wheel`
// * `load`
// * `focus`
// * `resize`
// * `scroll`
// * `select`
// * `dblclick`
// * `drag / drop`


//adds subtext to the main header if mouse over
const logoImg = document.querySelector("h1.logo-heading")
const logoSub = document.querySelector("h1.logo-subtext")

logoImg.addEventListener('mouseover', () => {
logoSub.classList.remove('off')
})

logoImg.addEventListener('mouseout', () => {
    logoSub.classList.add('off')
    })

//add interactivity to nav bar upon clicks
const  navItem = document.querySelectorAll('a')


navItem[0].addEventListener("click", e => {
    e.target.style.fontSize = "4rem"
    navItem.preventDefault()
})

navItem[1].addEventListener("click", e => {
    e.target.style.color = "green"
    navItem.preventDefault()
})

navItem[2].addEventListener("click", e => {
    e.target.style.color = "pink"
    navItem.preventDefault()
})

navItem[3].addEventListener("click", e => {
    e.target.style.color = "blue"
    navItem.preventDefault()
})

//double click to remove image

// const advImg = document.getElementsByClassName("img-content")

// advImg.addEventListener("dblclick", e => {
//     e.target.style.display = "none"
// })


//add color change to body with scroll wheel
bodyScreen = document.querySelector("body")
bodyScreen.addEventListener("wheel" , () => {
    bodyScreen.style.backgroundColor = "blue"
    bodyScreen.style.color = "white"
    logoImg.style.color = "black"
    logoSub.style.color = "black"
    stopPropogation()
})

//resets the scroll event propagation when space is pressed
bodyScreen.addEventListener('keypress', event => {
    if (event.key == " ") {
    event.preventDefault()
    event.target.style.backgroundColor = "white"
    event.target.style.color = "black"
    }
}) 

//highlight the footer and change the text size upon mouseover
const footerHigh = document.querySelector('.footer');
footerHigh.addEventListener('mouseover', (event) => {event.target.style.backgroundColor = "green"; })
footerHigh.addEventListener('mouseover', (event) => {event.target.style.fontSize = "3rem"; })

//changes the "intro section class" to red when double clicked
const intro = document.querySelector('.intro')
intro.addEventListener('dblclick', event => {
    event.target.style.backgroundColor = "orange"
})
