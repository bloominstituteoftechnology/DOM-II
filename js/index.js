// Your code goes here
const topContent = document.getElementsByClassName("main-navigation");
topContent[0].addEventListener('mouseover', (event) =>{
  event.target.style.backgroundColor = 'orange'
})

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'blue'
    event.stopPropagation()
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
  boatImg.style.marginLeft = "-1200px"
})

window.addEventListener('load', (event) => {
  console.log("It's a fun BUS!");
});

const islandGetaway = document.querySelectorAll('.destination h4');
islandGetaway.forEach(header => {
  header.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red'
  })
})

const mapImage = document.querySelector('.content-section img');
mapImage.addEventListener('mouseenter', (event) => {
  event.target.style.transform = 'scale(1.4)'
  event.target.style.transition = 'all 0.3s'
})

mapImage.addEventListener('mouseleave', () => {
    mapImage.style.transform = 'scale(1)'
    mapImage.style.transition = 'all 0.3s'
})  

let scale = 1;
const canal = document.querySelectorAll('.img-content img');
canal[1].addEventListener('wheel', event => {
  event.preventDefault();
  scale += event.deltaY * -0.001;
  scale = Math.min(Math.max(.125, scale), 4);
  event.target.style.transform = `scale(${scale})`;
});

const links = document.querySelectorAll('.nav-link');

links.forEach(link => {
  link.addEventListener('click', (event) => {
      link.style.color = 'blue'
        event.preventDefault();
  })
})