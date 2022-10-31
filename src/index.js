import './less/index.less'

// Your code goes here!

window.onLoad = function (evt) {
    console.log(`event ${evt.type} fired! Ready to go!`)
    const heading = document.querySelector('h1')
    heading.textContent = 'READY TO GO!!'
//  2-copy
window.addEventListener('copy', () => {
  navigator.clipboard.readText()
  .then(text => {
    heading.textContent += text
     })
 })
//  3- click
document.body.addEventListener('click', evt => {
    evt.target.classList.toggle('mirror')
})
// 4- dblclick
document.body.addEventListener('dbclick', evt => {
    evt.target.innerHTML = ''
})
// 5- keydown
window.addEventListener('keydown', evt => {
    if (evt.key === 6){
        document.body.innerHTML = ''
    }
 })
//  6- mousemove
document.body.addEventListener('mouseenter', () => {
  const { clientX, clientY} = evt
})
// 7- mouseenter
// 8- mouseleave
const destinations = document.querySelectorAll('.destination')
for (let destination of destinations) {
    destination.addEventListener('mouseenter', () => {
        destination.style.fontWeight = 'bold'
    })
    destination.addEventListener('mouseleave', () => {
        setTimeout(() => {
            destination.style.fontWeight = 'initial'
        }, 500)
        })  
    }
}