
//logo items

const title = document.querySelector("body > header > div > h1")
title.style.color = 'orange'
title.style.marginLeft = '140px'
title.style.fontWeight = 'bold'

//nav items

const mainNav = document.querySelector("body > header > div > nav")
mainNav.style.marginRight = '150px'
mainNav.style.zIndex = '1'


const navItCo = document.querySelectorAll('a')
navItCo.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault() // prevents from being navigated away from our website to lambdaschool.
    event.stopPropagation()
    event.target.style.color = 'red'
  })
})

const navItCo2 = document.querySelectorAll('a')
navItCo.forEach(link => {
  link.addEventListener('mouseover', (event) => {
    event.preventDefault() // prevents from being navigated away from our website to lambdaschool.
    event.stopPropagation()

    event.target.style.color = 'yellow'
  })
})

const navA = document.querySelectorAll('a')
navA.forEach(link => {
  link.addEventListener('mouseover', (event) => {
    event.target.style.transform = "scale(2.2)";
    event.target.style.transition = "all 0.3s";// smoth transition effect 
  })
})

const navB = document.querySelectorAll('a')
navA.forEach(link => {
  link.addEventListener('mouseleave', (event) => {
    event.target.style.transform = "scale(1)"
    event.target.style.transition = "all 0.3s";// smoth transition effect 
    
  })
})
const bttmBorder= document.querySelector("body > header")
bttmBorder.style.borderBottom = 'unset'

const navBottons = document.querySelector("body > header > div > nav")
navBottons.style.border = '3px solid orange'
navBottons.style.borderRadius = '20px'

// const navSty = document.querySelector("body > header > div > nav > a:nth-child(1)")
// navSty.style.margin = '10px'


//nav background

const navBk = document.querySelector("body > header > div")
navBk.style.backgroundColor="lightBlue";
navBk.style.borderRadius = '20px'
  
//body background
 const bodyBk0 = document.querySelector("body > div > header")
 bodyBk0.style.borderRadius = '20px'

const bodyBK = document.querySelector("body > div")
bodyBK.style.backgroundColor="papayawhip";
bodyBK.style.borderRadius = '20px'

bodyBK.addEventListener("mouseover", (event) => {
    event.preventDefault() // prevents from being navigated away from our website to lambdaschool.
    event.stopPropagation()

})
//body imgs
const busImg = document.querySelector("body > div > header > img")
busImg.style.filter = "grayscale(80%)"

busImg.style.border = '1px solid orange';
busImg.style.borderRadius = '20px'

const busImg2 = document.querySelector("body > div > header > img")
busImg2.addEventListener('mouseover', (event) => {
event.target.style.filter = "grayscale(0%)";
})
const busImg3 = document.querySelector("body > div > header > img")
busImg3.addEventListener('mousleave', (event) => {
event.target.style.filter = "grayscale(80%)";
})



// window.onload = function(){

//     var hayden2 = new stackBoxBlurIt('hayden2').blur(40)
//     hayden2.onmouseover = function(){
//       this.blurit(0, 2000)
//     }
//     hayden2.onmouseout = function(){
//       this.blurit(40, 2000)
//     }
  
//   }
  