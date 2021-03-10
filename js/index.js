//Student Work from here on out // 

// my events: 
// 1) keypress - Escape key
// 2) Click event - mouse clicks a button 🎯
// 3) Mouse Over event on "home" Contact 🎯
// 4) Mouse Leave event on "home" Contact
// 5) HTMLevent pointerenter event
// 6) scroll event up
// 7) scroll event down
// 8) double click an image / media element and transform with CSS
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


const toUpperCase = document.querySelector('.nav')
  toUpperCase.addEventListener("mouseover", (event) => {
      event.target.style.textTransform = "uppercase"
})


// const pressR = document.querySelector('header img')
//     pressR.addEventListener("keydown", (event) => {
//         if (event.ctrlKey) {
//            return event.style.transform = "rotate(0.5turn)"
//         }
// })

// const adventureImg = document.querySelectorAll('img')[1]
// adventureImg.addEventListener('dblclick',(event)=>{
// event.target.style.transform = "rotateZ(360deg)";
// event.target.style.transition = "transform 1s";
// })

const logoScroll = document.querySelector('.logo-heading')
    logoScroll.addEventListener("scroll", ()=>{
    logoScroll.style.transform = "rotate(360deg)";
    logoScroll.style.transition = "transform .5s";
})

