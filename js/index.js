// Your code goes here

// Mouseover on logo makes it move
const moveLogo = gsap.timeline()

moveLogo.to(".logo-heading", { duration: 1, x: 800 })
    .to(".logo-heading", { duration: 1, x: 0 })

moveLogo.pause()

document.querySelector('.logo-heading').addEventListener('mouseover', () => {
    moveLogo.play()
})

//
