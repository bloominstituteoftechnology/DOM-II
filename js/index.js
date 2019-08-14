//Mouseover Event
let nav_container = document.querySelector(".nav")

nav_container.addEventListener('mouseover', (event) => {
event.target.style.fontSize = '2.5rem'
  // event.target.style.transform = 'rotate(45deg)'
})
//----------------------------------------------------------------------------------
//keydown event
let keyOnBody = document.querySelector('body')

keyOnBody.addEventListener('keydown', (event) => {
  alert(`Don't put your keys on me`)
})
//----------------------------------------------------------------------------------
//click Event
let clickEvent_Img = document.querySelectorAll('img')

clickEvent_Img.forEach((image) => {
  image.addEventListener('click', (event) => {
    event.target.style.content = 'url(https://www.fillmurray.com/200/300)'
  })
})
//----------------------------------------------------------------------------------
// DoubleClick
let logoHeader = document.getElementsByClassName('logo-heading');

logoHeader[0].addEventListener('dblclick', (event) => {
  event.target.textContent = 'Not so Fun Bus'
})
//----------------------------------------------------------------------------------
// Mouesemove
let selectH2 = document.querySelectorAll('h2')

selectH2.forEach((h2) => {
  h2.addEventListener('mousemove', (event) => {
    event.target.textContent = 'new h2'
  })
})
//----------------------------------------------------------------------------------
// Load event
let loadedfooter = document.querySelector('footer')
console.log(loadedfooter)

loadedfooter.addEventListener('focus', (event) => {
  event.target.style.backgroundColor = 'red'

})