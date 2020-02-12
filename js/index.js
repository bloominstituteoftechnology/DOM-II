// Your code goes here

const busImg = document.querySelector('img')
busImg.addEventListener('click', () => {
    busImg.style.transform = "scale(0)"
    busImg.style.transition = "transform 1s";
})

const notFun = document.querySelector('h2')
notFun.addEventListener('dblclick', (event) => {
    notFun.textContent = "Welcome to the not so Fun Bus! Don't put your mouse on the map!"
    event.stopPropagation();
})

const body = document.querySelector('body')
body.addEventListener('dblclick', (event) => {
    body.textContent = "RIP Fun Bus"
})



const map = document.querySelector('.img-content')
map.addEventListener('mouseover', () => {
    map.style.transform ="scale(3)";
    map.style.transition = "transform 1s";
})

map.addEventListener('click', () => {
    map.style.transform = "scale(0)"
    map.style.transition = "transform 1s";
})

const dest = document.querySelector('.content-destination')
window.addEventListener('scroll', () => {
    dest.textContent = "What are you going to do now? Resize? ;)"
})

const sign = document.querySelector('.content-pick')
window.addEventListener('resize', () => {
    sign.textContent = "You had to do that? Now what? You going to touch the logo?"
})

const logo = document.querySelector('.logo-heading')
logo.addEventListener('click',  () => {   
    logo.textContent = "Death Bus! Double click the body"
  });

 

  document.querySelectorAll('a').forEach(el => {
  el.addEventListener('mouseover', () => {
    el.style.color = "yellow"
  })
})
const stopLink = document.querySelector('.nav-link')
stopLink.addEventListener("click", (event) => {
    event.preventDefault();
  })

document.querySelectorAll('.btn').forEach(el => {
    el.addEventListener('mouseover', () => {
      el.textContent = "Oh No"
    })
  })







