//Student Work from here on out // 


// MY LIVE SERVER DOES NOT DISPLAY ALL OF THE BASE CSS. SOME OF MY EVENTS WORK, BUT MOST ARE NOT. I AM NOT SURE IF IT IS THE SYNTAX, WRITTEN INCORRECTLY, ETC. BUT THERE SEEMS TO BE AN UNDERLYING ISSUE WITH ALL OF THE LIVE SERVER IN GENERAL. 


// my events: 
// 1) keypress - Escape key
// 2) Click event - mouse clicks a button 🎯
// 3) Mouse Over event on nav bar text 🎯
// 4) Mouse Leave event on nav bar text
// 5) HTMLevent - pointerenter event
// 6) scroll event?  - having trouble making it initiate.
// 7) 
// 8) double click an image / media element 🎯
// 9)
// 10)


// const doubleClickEvent = document.querySelector('header') 
// doubleClickEvent.addEventListener("click", (event) => {
//         event.target.style.backgroundColor = '#f4f4f4'
// })


const body = document.querySelector('body')
    body.addEventListener("click", (event) => {
        event.target.style.backgroundColor = "salmon"
})

// mouse over event for the nav
const toUpperCase = document.querySelector('.nav')
  toUpperCase.addEventListener("mouseover", (event) => {
      event.target.style.textTransform = "uppercase"
})


// mout out event for the nav
const capitalizeNav = document.querySelector('.nav')
  capitalizeNav.addEventListener("mouseout", (event) => {
      event.target.style.textTransform = "capitalize"
})

// enlarge the h2 element when
const enlargeText = document.querySelector('.intro p')
  enlargeText.addEventListener("select", (event) => {
      event.target.style.fontSize = 14
      event.stopPropagation();
})


const pressR = document.querySelector('header img')
    pressR.addEventListener("keypress", (event) => {
        if (event.key === "r") {
           event.target.style.transform = "rotateZ(360deg)"
        }
})


// double click the second image to make it rotate
const adventureImg = document.querySelectorAll('img')[1]
    adventureImg.addEventListener('dblclick', (event)=>{
    event.target.style.transform = "rotateZ(360deg)";
    event.target.style.transition = "transform 1s";
})

// can't figure out why this one wont work
// const logoScroll = document.querySelector('.logo-heading')
//     logoScroll.addEventListener("scroll", (event) => {
//     logoScroll.style.transform = "rotate(360deg)";
//     logoScroll.style.transition =   "transform .5s";
// })
