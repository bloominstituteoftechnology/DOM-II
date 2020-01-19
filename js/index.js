
//logo items
const title = document.querySelector("body > header > div > h1")
title.style.color = 'yellow'


//nav items

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




//nav background
const navBk = document.querySelector("body > header > div")
navBk.addEventListener("mouseover", (event) => {
    event.preventDefault() // prevents from being navigated away from our website to lambdaschool.
    event.stopPropagation()
  event.target.style.backgroundColor="lightBlue";
  

})

const bodyBK = document.querySelector("body > div")
bodyBK.addEventListener("mouseover", (event) => {
    event.preventDefault() // prevents from being navigated away from our website to lambdaschool.
    event.stopPropagation()
  event.target.style.backgroundColor="papayawhip";
  

})
const footer = document.querySelector("body > footer")
