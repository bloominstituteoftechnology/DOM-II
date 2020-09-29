// Your code goes here
const signMeUp = document.querySelector(".btn")
const logoHeading = document.querySelector(".logo-heading")

logoHeading.addEventListener('mouseover', (event) => {
    logoHeading.style.color = "green"
})


logoHeading.addEventListener('mouseout', (event) => {
    logoHeading.style.color = "black"
})

const footer = document.querySelector('.footer')

window.addEventListener('load', (event) => {
    footer.style.background = "purple"
})

const nav = document.querySelector(".nav")

nav.addEventListener('focusin', (event) => {
    nav.style.background = "pink"
})
nav.addEventListener('focusout', (event) => {
    nav.style.background = "white"
})

// let lastKnownScrollPosition = 0
// let ticking = false;

// window.addEventListener('scroll', (e) => {
//     lastKnownScrollPosition = window.scrollY

//     function scroll(scroll_pos){
//         console.log("test")
//     }

//     if(!ticking){
//         window.requestAnimationFrame(function(){
//             console.log("test2")
//             nav.style.background = "green"
//             scroll(lastKnownScrollPosition);
//             ticking = false;
//         })
//         ticking = true;
//     }
// });
signMeUp.addEventListener('dblclick', (e) => {
    signMeUp.style.fontSize = "30px"
})

// const keyDown = document.querySelector(".main-navigation")

// keyDown.addEventListener('keypress', (event) =>{
//     if(event.key === "KeyS")
//     console.log("test")
//     keyDown.style.color = "pink"
// })

// const keyUp = document.querySelector()
 const mouseEnter = document.querySelector(".content-section")

 mouseEnter.addEventListener('mouseenter', (event) => {
     console.log("test")
     mouseEnter.style.background = "blue"
 })
const mouseLeave = document.querySelector(".content-section")

mouseLeave.addEventListener('mouseleave', (event) => {
    mouseLeave.style.background = "white"
})