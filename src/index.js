import './less/index.less'

// Your code goes here!
//1

window.onload = function (evt){
    console.log(`event ${evt.type} fired! Ready to go!`)
    const heading = document.querySelector('h1')
    heading.textContent = 'READY TO GO!'
// 2
    window.addEventListener('copy', () => {
        navigator.clipboard.readText()
        .then(text => {
            heading.textContent += text
        })
    })

//3
    document.body.addEventListener('click', evt =>{
        evt.target.classList.toggle('mirror')
    })

//4
    document.body.addEventListener('dblclick', evt => {
        evt.target.innerHTML = ''
    })

//5
    window.addEventListener('keydown', evt => {
        if(evt.key == 6){
            document.body.innerHTML = '<h1>You ran order 66<h1>'
        }
    })

//6
    document.body.addEventListener('mousemove', evt =>{
        const {clientX, clientY} = evt
        // console.log(`mouse is at ${clientX}, ${clientY}`)
    })

//7
const destinations = document.querySelectorAll('.destination')
for (let destination of destinations){
    destination.addEventListener('mouseenter', evt =>{
        destination.style.fontWeight = 'bold'
    })
//8
    destination.addEventListener('mouseleave', evt =>{
        setTimeout(() => {
        destination.style.fontWeight = 'initial'
        }, 500)
    })
//9
const oG = document.querySelector('.intro h2')
    oG.addEventListener('mouseover',(evt) =>{
        evt.target.style.color = 'red'
    },500)

//10
const welcome = document.querySelector('.intro h2')
    welcome.addEventListener('mouseover',(evt) =>{
        evt.target.style.fontSize = '7rem'
    },500)

}
}