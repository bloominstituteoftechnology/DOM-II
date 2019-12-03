// Your code goes here

// Mouseover on logo makes it move
const moveLogo = gsap.timeline()

moveLogo.to(".logo-heading", { duration: 1, x: 800 })
    .to(".logo-heading", { duration: 1, x: 0 })

moveLogo.pause()

document.querySelector('.logo-heading').addEventListener('mouseover', () => {
    moveLogo.play()
})

// Alerts on keydown
const body = document.querySelector('body')
body.addEventListener('keydown', (e) => {
    alert(`You pressed ${e.key}`)
})

// Console log new window size on resize
window.addEventListener('resize', (e) => {
    console.log(`You resized the window to ${window.innerWidth} by ${window.innerHeight}`)
})

