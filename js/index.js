// Your code goes here
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'blue'
  })
})

navLinks.forEach(link => {
  link.addEventListener('mouseout', (event) => {
    event.target.style.backgroundColor = 'white'
  })
})

const funBus = document.querySelector('.logo-heading');
funBus.addEventListener('dblclick', (event) => {
event.target.style.backgroundColor = "yellow"
})

const boatImg = document.querySelector('.content-destination img')
window.addEventListener('resize', () =>{
  boatImg[0].target.style.transform= "transitionX(-100%)"
})

window.addEventListener('load', (event) => {
  console.log("It's a fun BUS!");
});